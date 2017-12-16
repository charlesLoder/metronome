var totalBeeps = 1; // everything related to totalBeeps will eventually be changed

const playBeep = function (bpm) {
  tempo = setTimeout( function() {playBeep(bpm)} , (60000 / bpm));
  document.getElementById("accent").play();
  console.log("beep");
  //
  totalBeeps++;
  if (totalBeeps > 8) {
    clearTimeout(tempo);
  }

}

const choiceBpm = function () {
  input = document.getElementById("userBpm").value;
  return eval(input);
}

document.getElementById("start").addEventListener("click", () => {
  playBeep(choiceBpm());
})
