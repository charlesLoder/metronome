let totalBeeps = 1; // everything related to totalBeeps will eventually be changed

const choiceBpm = function (input) {
  return eval(input);
}

const choiceBpb = function (input) {
  return eval(input);
}

const playBeep = function (bpm, bpb) {
  let tempo = setTimeout( function() {playBeep(bpm, bpb)} , (60000 / bpm));
  console.log(bpb);
  document.getElementById("accent").play();
  console.log("beep");
  //
  totalBeeps++;
  if (totalBeeps > 8) {
    clearTimeout(tempo);
    totalBeeps = 1;
  }
  //
}

document.getElementById("start").addEventListener("click", () => {
  let userBpmInput = document.getElementById("userBpm").value;
  let userBpbInput = document.getElementById("userBpb").value;
  playBeep(choiceBpm(userBpmInput), choiceBpb(userBpbInput));
})

// next step, add bpb
