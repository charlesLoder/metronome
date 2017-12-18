const choiceBpm = function (input) {
  return eval(input);
}

const choiceBpb = function (input) {
  return eval(input);
}

const playBeep = function (bpm, bpb, currentBeat) {
  let tempo = setTimeout( function() {playBeep(bpm, bpb, currentBeat)} , (60000 / bpm));
  // document.getElementById("accent").play();
  console.log("beep");
  console.log(currentBeat);
  //
  currentBeat++;
  if (currentBeat > bpb) {
    currentBeat = 1;
    clearTimeout(tempo);
  }
  //
}

document.getElementById("start").addEventListener("click", () => {
  let userBpmInput = document.getElementById("userBpm").value;
  let userBpbInput = document.getElementById("userBpb").value;
  playBeep(choiceBpm(userBpmInput), choiceBpb(userBpbInput), 1);
})
