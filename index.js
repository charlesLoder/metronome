const choiceBpm = function (input) {
  return eval(input);
}

const playBeep = function (bpm, bpb, currentBeat) {
  let tempo = setTimeout( function() {playBeep(bpm, bpb, currentBeat)} , (60000 / bpm));

  if (currentBeat == 1) {
    // console.log("beep!");
    document.getElementById("accent").play();
    console.log(currentBeat);
    currentBeat++;
  } else if (currentBeat >= bpb) {
    console.log(currentBeat);
    currentBeat = 1;
    // console.log("beep");
    document.getElementById("noAccent").play();
    // clearTimeout(tempo); // this is just to stop it after a while
  } else {
    // console.log("beep");
    document.getElementById("noAccent").play();
    console.log(currentBeat);
    currentBeat++;
  }
}

const addBpb = function (ul, li, btn) {
  btn.appendChild(document.createTextNode( document.getElementById("beatList").getElementsByTagName("li").length + 1) );
  li.appendChild(btn);
  ul.appendChild(li);
}

document.getElementById("addBpb").addEventListener("click", () => {
  let beatList = document.getElementById("beatList");
  let beat = document.createElement("li");
  let beatButton = document.createElement("button");
  addBpb(beatList, beat, beatButton)
})

document.getElementById("minusBpb").addEventListener("click", () => {
  let beatList = document.getElementById("beatList");
  beatList.removeChild(beatList.lastElementChild)
})

document.getElementById("start").addEventListener("click", () => {
  let userBpmInput = document.getElementById("userBpm").value;
  let userBpbInput = document.getElementById("beatList").getElementsByTagName("li").length;
  playBeep(choiceBpm(userBpmInput), userBpbInput, 1);
})
