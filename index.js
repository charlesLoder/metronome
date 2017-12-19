const choiceBpm = function (input) {
  return eval(input);
}

document.getElementById("addBpb").addEventListener("click", () => {
  let beatList = document.getElementById("beatList");
  let beat = document.createElement("li");
  let beatButton = document.createElement("button");
  beatButton.appendChild(document.createTextNode( document.getElementById("beatList").getElementsByTagName("li").length + 1) );
  beat.appendChild(beatButton);
  beatList.appendChild(beat);
})


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

document.getElementById("start").addEventListener("click", () => {
  let userBpmInput = document.getElementById("userBpm").value;
  let userBpbInput = document.getElementById("beatList").getElementsByTagName("li").length;
  playBeep(choiceBpm(userBpmInput), userBpbInput, 1);
})

// maybe, add an ul of buttons
// that would bpb = length of the ul (i.e. document.getElementsByTagName("ul").length)
