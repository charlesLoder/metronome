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

const playBeep = function (bpm, bpb, currentBeat, i) {

  if (bpb[i] === 1 ) {
    // console.log("The value of bpb[i] is: " + bpb[i]);
    console.log("beep!");
    currentBeat++;
    i = (currentBeat - 1);
  } else if (currentBeat >= bpb.length) {
    // console.log("The value of bpb[i] is: " + bpb[i]);
    console.log("beep");
    currentBeat = 1;
    i = 0;
  } else {
    // console.log("The value of bpb[i] is: " + bpb[i]);
    console.log("beep");
    currentBeat++;
    i = (currentBeat - 1);
  }
  
  let tempo = setTimeout( function() {playBeep(bpm, bpb, currentBeat, i)} , (60000 / bpm));

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
  playBeep(choiceBpm(userBpmInput), bpbArray(acctbtn), 1, 0);
});
