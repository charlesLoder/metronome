let totalBeeps = 1; // everything related to totalBeeps will eventually be changed

const choiceBpm = function (input) {
  return eval(input);
}

const playBeep = function (bpm) {
  let tempo = setTimeout( function() {playBeep(bpm)} , (60000 / bpm));
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
  playBeep(choiceBpm(userBpmInput));
})

// next step, add bpb
