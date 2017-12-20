const choiceBpm = function (input) {
  return eval(input);
}

const addBpb = function (ul, li, btn, length) {
  btn.appendChild(document.createTextNode(length) );
  btn.setAttribute("id", "beat-" + length);
  btn.setAttribute("class", "acctbtn");
  btn.setAttribute("value", 0);
  li.appendChild(btn);
  ul.appendChild(li);
}

const bpbArray = function (btnClass) {
  let accentArray = [];
  Array.prototype.forEach.call (btnClass, function (btn) {
    accentArray.push(parseFloat(btn.value));
  });
  return accentArray;
}

const playBeep = function (bpm, bpb, currentBeat) {
  // let tempo = setTimeout( function() {playBeep(bpm, bpb, currentBeat)} , (60000 / bpm));
  let tempo = setTimeout( function() {playBeep(bpm, bpb, currentBeat)} , (60000 / bpm));
/******************************************************************************
  if (currentBeat === 1) {
    console.log("beep!");
    // document.getElementById("accent").play();
    console.log(currentBeat);
    currentBeat++;
  } else if (currentBeat >= bpb) {
    console.log(currentBeat);
    currentBeat = 1;
    console.log("beep");
    // document.getElementById("noAccent").play();
    // clearTimeout(tempo); // this is just to stop it after a while
  } else {
    console.log("beep");
    // document.getElementById("noAccent").play();
    console.log(currentBeat);
    clearTimeout(tempo); // this is just to stop it after a while
    currentBeat++;
  }
******************************************************************************/
  bpb.forEach( (e, i) => {
    if (e === 1) {
      console.log("beep!");
      currentBeat++;
    } else if (currentBeat >= bpb.length) {
      console.log("beep");
      currentBeat = 1;
    } else {
      console.log("beep");
    }
  })

}

document.getElementById("addBpb").addEventListener("click", () => {
  let beatList = document.getElementById("beatList");
  let beat = document.createElement("li");
  let beatButton = document.createElement("button");
  let ulLength = document.getElementById("beatList").getElementsByTagName("li").length + 1;
  addBpb(beatList, beat, beatButton, ulLength);
});

document.getElementById("minusBpb").addEventListener("click", () => {
  let beatList = document.getElementById("beatList");
  beatList.removeChild(beatList.lastElementChild);
});

document.getElementById("start").addEventListener("click", () => {
  let userBpmInput = document.getElementById("userBpm").value;
  let acctbtn = document.getElementsByClassName("acctbtn");
  playBeep(choiceBpm(userBpmInput), bpbArray(acctbtn), 1);
});
