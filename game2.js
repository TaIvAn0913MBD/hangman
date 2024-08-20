const gadna = document.getElementById("gadna");
const result = document.getElementById("result");
const restart = document.getElementById("image");
const ami = document.getElementById("ami");
const stick = document.getElementById("man");
const hint = document.getElementById("hint");
let too = 10;
const zaii = document.getElementById("zaii");
ami.innerHTML = too;
const man = document.getElementsByClassName("stick")[0];
const words = [
  "jokic",
  "mongolia",
  "orange",
  "japan",
  "tokyo",
  "ulaanbaatar",
  "apple",
  "curry",
  "lebron",
];
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let utga = ug();
console.log(utga);
function restore() {
  gadna.innerHTML = "";
  too = 10;

  console.log(utga);
  ami.innerHTML = too;
  alert("You have restarted");

  utga = ug();
  door();
  gui();
}
function clear() {
  result.innerHTML = "";
  man.innerHTML = "";
}
console.log(ami.innerHTML);

function random() {
  let num = Math.floor(Math.random() * 9);
  return Number(num);
}
function ug() {
  return words[random()];
}
function door() {
  for (let i = 0; i < utga.length; i++) {
    const hiii = document.createElement("div");
    hiii.innerHTML = "_";
    hiii.className = "hh";
    result.appendChild(hiii);
  }
}
door();
for (let i = 0; i < alphabet.length; i++) {
  let box = document.createElement("div");
  gadna.appendChild(box);
  box.className = "box";
  box.id = alphabet[i];
  box.innerHTML = alphabet[i];
  box.addEventListener("click", function () {
    const shine = document.createElement("div");
    shine.className = "box1";
    shine.innerHTML = alphabet[i];

    let haha = document.getElementsByClassName("hh");
    for (let j = 0; j < utga.length; j++) {
      if (utga[j] === alphabet[i]) {
        haha[j].innerHTML = alphabet[i];
        box.style.backgroundColor = "red";
        box.style.pointerEvents = "none";
      } else {
        too -= 1;
        box.style.backgroundColor = "red";
        box.style.pointerEvents = "none";
      }
    }
    console.log(result.innerText.replace(/\s/g, ""));
    console.log(utga);
    too += utga.length - 1;
    let ggi = too;
    ami.innerHTML = too;
    if (too <= 0) {
      hi();
    }
    console.log(too);

    if (ggi < 10 && ggi > 8) {
      stick.style.backgroundImage = "url(./one.png)";
      stick.style.backgroundSize = "contain";
      stick.style.height = "100%";
      stick.style.width = "100%";
      stick.style.borderRadius = "6px";
    }
    if (ggi < 9 && ggi > 7) {
      stick.style.backgroundImage = "url('./two.png')";
      stick.style.backgroundSize = "contain";
      stick.style.height = "100%";
      stick.style.width = "100%";
      stick.style.borderRadius = "6px";
    }
    if (ggi < 8 && ggi > 6) {
      stick.style.backgroundImage = "url('./three.png')";
      stick.style.backgroundSize = "contain";
      stick.style.height = "100%";
      stick.style.width = "100%";
      stick.style.borderRadius = "6px";
    }
    if (ggi < 7 && ggi > 5) {
      stick.style.backgroundImage = "url('./four.png')";
      stick.style.backgroundSize = "contain";
      stick.style.height = "100%";
      stick.style.width = "100%";
      stick.style.borderRadius = "6px";
    }
    if (ggi < 6 && ggi > 4) {
      stick.style.backgroundImage = "url(./five.png)";
      stick.style.backgroundSize = "contain";
      stick.style.height = "100%";
      stick.style.width = "100%";
      stick.style.borderRadius = "6px";
    }
    if (ggi < 5 && ggi > 3) {
      stick.style.backgroundImage = "url('./six.png')";
      stick.style.backgroundSize = "contain";
      stick.style.height = "100%";
      stick.style.width = "100%";
      stick.style.borderRadius = "6px";
    }
    if (ggi < 4 && ggi > 2) {
      stick.style.backgroundImage = "url('./seven.png')";
      stick.style.backgroundSize = "contain";
      stick.style.height = "100%";
      stick.style.width = "100%";
      stick.style.borderRadius = "6px";
    }
    if (ggi < 3 && ggi > 1) {
      stick.style.backgroundImage = "url('./eight.png')";
      stick.style.backgroundSize = "contain";
      stick.style.height = "100%";
      stick.style.width = "100%";
      stick.style.borderRadius = "6px";
    }
    if (ggi < 2 && ggi > 0) {
      stick.style.backgroundImage = "url('./nine.png')";
      stick.style.backgroundSize = "contain";
      stick.style.height = "100%";
      stick.style.width = "100%";
      stick.style.borderRadius = "6px";
    }
    if (ggi < 1 && ggi > -1) {
      stick.style.backgroundImage = "url('./ten.png')";
      stick.style.backgroundSize = "contain";
      stick.style.height = "100%";
      stick.style.width = "100%";
      stick.style.borderRadius = "6px";
    }
    if (result.innerText.replace(/\s/g, "") === utga.toString()) {
      alert("You won, young man");
      if (
        confirm(
          "Wanna play again?, click yes if wanna play again, press no if you wanna quit"
        ) === true
      ) {
        hi();
      } else {
        alert("Bye");
      }
    }
  });
}

function hints() {
  alert("You have used a hint");
  if (utga === "jokic") {
    zaii.innerHTML = "Nuggets player";
  }
  if (utga == "mongolia") {
    zaii.innerHTML = "Country in Asia";
  }
  if (utga == "orange") {
    zaii.innerHTML = "A fruit";
  }
  if (utga == "japan") {
    zaii.innerHTML = "Country in Asia";
  }
  if (utga == "tokyo") {
    zaii.innerHTML = "Capital city of a country that is surrounded with water";
  }
  if (utga == "ulaanbaatar") {
    zaii.innerHTML = "capital city of a country that is in middle fo Asia";
  }
  if (utga == "apple") {
    zaii.innerHTML = "A fruit";
  }
  if (utga == "curry") {
    zaii.innerHTML = "Golden State Warriors player";
  }
  if (utga == "lebron") {
    zaii.innerHTML = "The G.O.A.T";
  }
}
hint.onclick = hints;
function gui() {
  zaii.innerHTML = "";
  for (let i = 0; i < alphabet.length; i++) {
    let box = document.createElement("div");
    gadna.appendChild(box);
    box.className = "box";
    box.id = alphabet[i];
    box.innerHTML = alphabet[i];
    box.addEventListener("click", function () {
      const shine = document.createElement("div");
      shine.className = "box1";
      shine.innerHTML = alphabet[i];

      let haha = document.getElementsByClassName("hh");
      for (let j = 0; j < utga.length; j++) {
        if (utga[j] === alphabet[i]) {
          haha[j].innerHTML = alphabet[i];
          box.style.backgroundColor = "red";
          box.style.pointerEvents = "none";
        } else {
          too -= 1;
          box.style.backgroundColor = "red";
          box.style.pointerEvents = "none";
        }
      }
      console.log(result.innerText.replace(/\s/g, ""));
      console.log(utga);
      too += utga.length - 1;
      let ggi = too;
      ami.innerHTML = too;
      if (too <= 0) {
        hi();
      }
      console.log(too);

      if (ggi < 10 && ggi > 8) {
        stick.style.backgroundImage = "url(./one.png)";
        stick.style.backgroundSize = "contain";
        stick.style.height = "100%";
        stick.style.width = "100%";
        stick.style.borderRadius = "6px";
      }
      if (ggi < 9 && ggi > 7) {
        stick.style.backgroundImage = "url('./two.png')";
        stick.style.backgroundSize = "contain";
        stick.style.height = "100%";
        stick.style.width = "100%";
        stick.style.borderRadius = "6px";
      }
      if (ggi < 8 && ggi > 6) {
        stick.style.backgroundImage = "url('./three.png')";
        stick.style.backgroundSize = "contain";
        stick.style.height = "100%";
        stick.style.width = "100%";
        stick.style.borderRadius = "6px";
      }
      if (ggi < 7 && ggi > 5) {
        stick.style.backgroundImage = "url('./four.png')";
        stick.style.backgroundSize = "contain";
        stick.style.height = "100%";
        stick.style.width = "100%";
        stick.style.borderRadius = "6px";
      }
      if (ggi < 6 && ggi > 4) {
        stick.style.backgroundImage = "url(./five.png)";
        stick.style.backgroundSize = "contain";
        stick.style.height = "100%";
        stick.style.width = "100%";
        stick.style.borderRadius = "6px";
      }
      if (ggi < 5 && ggi > 3) {
        stick.style.backgroundImage = "url('./six.png')";
        stick.style.backgroundSize = "contain";
        stick.style.height = "100%";
        stick.style.width = "100%";
        stick.style.borderRadius = "6px";
      }
      if (ggi < 4 && ggi > 2) {
        stick.style.backgroundImage = "url('./seven.png')";
        stick.style.backgroundSize = "contain";
        stick.style.height = "100%";
        stick.style.width = "100%";
        stick.style.borderRadius = "6px";
      }
      if (ggi < 3 && ggi > 1) {
        stick.style.backgroundImage = "url('./eight.png')";
        stick.style.backgroundSize = "contain";
        stick.style.height = "100%";
        stick.style.width = "100%";
        stick.style.borderRadius = "6px";
      }
      if (ggi < 2 && ggi > 0) {
        stick.style.backgroundImage = "url('./nine.png')";
        stick.style.backgroundSize = "contain";
        stick.style.height = "100%";
        stick.style.width = "100%";
        stick.style.borderRadius = "6px";
      }
      if (ggi < 1 && ggi > -1) {
        stick.style.backgroundImage = "url('./ten.png')";
        stick.style.backgroundSize = "contain";
        stick.style.height = "100%";
        stick.style.width = "100%";
        stick.style.borderRadius = "6px";
      }
      if (result.innerText.replace(/\s/g, "") === utga.toString()) {
        alert("You won, young man");
        if (
          confirm(
            "Wanna play again?, click yes if wanna play again, press no if you wanna quit"
          ) === true
        ) {
          hi();
        } else {
          alert("Bye");
        }
      }
    });
  }
}
function hi() {
  clear();
  restore();
}
restart.onclick = hi;
