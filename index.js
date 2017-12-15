var totalBeeps = 1; // everything related to totalBeeps will eventually be changed

const playBeep = function (bpm) {
  bpm = choiceBpm();
  speed = setTimeout(playBeep, (60000 / bpm));
  document.getElementById("accent").play();

  totalBeeps++;
  if (totalBeeps > 8) {
    clearTimeout(speed);
  }
  
}

const choiceBpm = function (input) {
  input = document.getElementById("userBpm").value;
  return input;
}
