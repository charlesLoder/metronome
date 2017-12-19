const choiceBpm = function (input) {
  return eval(input);
}

const choiceBpb = function (input) {
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
    clearTimeout(tempo); // this is just to stop it after a while
  } else {
    // console.log("beep");
    document.getElementById("noAccent").play();
    console.log(currentBeat);
    currentBeat++;
  }
}

document.getElementById("start").addEventListener("click", () => {
  let userBpmInput = document.getElementById("userBpm").value;
  let userBpbInput = document.getElementById("userBpb").value;
  playBeep(choiceBpm(userBpmInput), choiceBpb(userBpbInput), 1);
})
