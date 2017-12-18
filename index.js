let beatCount = 1;

const choiceBpm = function (input) {
  return eval(input);
}

const choiceBpb = function (input) {
  return eval(input);
}

const playBeep = function (bpm, bpb) {
  let tempo = setTimeout( function() {playBeep(bpm, bpb)} , (60000 / bpm));
  // document.getElementById("accent").play();
  console.log("beep");
  //
  beatCount++;
  if (beatCount > bpb) {
    beatCount = 1;
    clearTimeout(tempo);
  }
  //
}

document.getElementById("start").addEventListener("click", () => {
  let userBpmInput = document.getElementById("userBpm").value;
  let userBpbInput = document.getElementById("userBpb").value;
  playBeep(choiceBpm(userBpmInput), choiceBpb(userBpbInput));
})
