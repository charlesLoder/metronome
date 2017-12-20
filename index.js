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
    console.log(currentBeat);
    console.log("beep!");
    if (currentBeat >= bpb.length) {
        currentBeat = 1;
        i = 0;
    } else {
      currentBeat++;
      i = (currentBeat - 1);
    }
  } else if (currentBeat >= bpb.length) {
    console.log(currentBeat);
    console.log("beep");
    currentBeat = 1;
    i = 0;
  } else {
    console.log(currentBeat);
    console.log("beep");
    currentBeat++;
    i = (currentBeat - 1);
  }

  tempo = setTimeout( function() {playBeep(bpm, bpb, currentBeat, i)} , (60000 / bpm));

}

const changeValue = function (btn) {
  if (btn.value === "1") {
    btn.setAttribute("value", "0");
    btn.setAttribute("class", "acctbtn noAccent");
  } else {
    btn.setAttribute("value", "1");
    btn.setAttribute("class", "acctbtn accent");
  }
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
  let tempo;
  let startBtn = document.getElementById("start");
  let userBpmInput = document.getElementById("userBpm").value;
  let acctbtn = document.getElementsByClassName("acctbtn");
  // switch (startBtn.innerHTML) {
  //   case "Start":
  //     playBeep(choiceBpm(userBpmInput), bpbArray(acctbtn), 1, 0);
  //     startBtn.innerHTML = "Stop";
  //     break;
  //   case "Stop":
  //     clearTimeout(tempo);
  //     startBtn.innerHTML = "Start";
  //     console.log("Working!");
  //     break;
  if (startBtn.innerHTML === "Start") {
    playBeep(choiceBpm(userBpmInput), bpbArray(acctbtn), 1, 0);
    startBtn.innerHTML = "Stop";
  } else {
    startBtn.innerHTML = "Start";
  }
  // }
});

document.querySelector("#beatList").addEventListener("click", () => {
  let selectButton = this.document.activeElement;
  changeValue(selectButton);
})
