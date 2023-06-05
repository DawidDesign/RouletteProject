const roulette: HTMLElement = document.querySelector(".roulette");
const spinBtn: HTMLImageElement = document.querySelector(".spin-btn");
const result: HTMLElement = document.querySelector("#result");
const finalNumber: HTMLElement = document.querySelector(".final-number");

let deg: number = 0;

const spinRulette: () => void = () => {
  finalNumber.style.display = "none";
  spinBtn.style.pointerEvents = "none";
  deg = Math.floor(5000 + Math.random() * 5000);

  roulette.style.transition = "all 10s ease";

  roulette.style.transform = `rotate(${deg}deg)`;
};

spinBtn.addEventListener("click", spinRulette);
roulette.addEventListener("transitionend", () => {
  const currentDeg = deg % 360;

  finalNumber.style.display = "flex";

  spinBtn.style.pointerEvents = "auto";

  switch (true) {
    case currentDeg >= 0 && currentDeg < 10:
      result.textContent = "26 BLACK";
      finalNumber.style.backgroundColor = "black";
      break;
    case currentDeg >= 10 && currentDeg < 20:
      result.textContent = "3 RED";
      finalNumber.style.backgroundColor = "red";
      break;
    case currentDeg >= 20 && currentDeg < 30:
      result.textContent = "35 BLACK";
      finalNumber.style.backgroundColor = "black";
      break;
    case currentDeg >= 30 && currentDeg < 39:
      result.textContent = "12 RED";
      finalNumber.style.backgroundColor = "red";
      break;
    case currentDeg >= 39 && currentDeg < 49:
      result.textContent = "28 BLACK";
      finalNumber.style.backgroundColor = "black";
      break;
    case currentDeg >= 49 && currentDeg < 59:
      result.textContent = "7 RED";
      finalNumber.style.backgroundColor = "red";
      break;
    case currentDeg >= 59 && currentDeg < 69:
      result.textContent = "29 BLACK";
      finalNumber.style.backgroundColor = "black";
      break;
    case currentDeg >= 69 && currentDeg < 78:
      result.textContent = "18 RED";
      finalNumber.style.backgroundColor = "red";
      break;
    case currentDeg >= 78 && currentDeg < 88:
      result.textContent = "22 BLACK";
      finalNumber.style.backgroundColor = "black";
      break;
    case currentDeg >= 88 && currentDeg < 98:
      result.textContent = "9 RED";
      finalNumber.style.backgroundColor = "red";
      break;
    case currentDeg >= 98 && currentDeg < 107:
      result.textContent = "31 BLACK";
      finalNumber.style.backgroundColor = "black";
      break;
    case currentDeg >= 107 && currentDeg < 117:
      result.textContent = "14 RED";
      finalNumber.style.backgroundColor = "red";
      break;
    case currentDeg >= 117 && currentDeg < 127:
      result.textContent = "20 BLACK";
      finalNumber.style.backgroundColor = "black";
      break;
    case currentDeg >= 127 && currentDeg < 137:
      result.textContent = "1 RED";
      finalNumber.style.backgroundColor = "red";
      break;
    case currentDeg >= 137 && currentDeg < 146:
      result.textContent = "33 BLACK";
      finalNumber.style.backgroundColor = "black";
      break;
    case currentDeg >= 146 && currentDeg < 156:
      result.textContent = "16 RED";
      finalNumber.style.backgroundColor = "red";
      break;
    case currentDeg >= 156 && currentDeg < 166:
      result.textContent = "24 BLACK";
      finalNumber.style.backgroundColor = "black";
      break;
    case currentDeg >= 166 && currentDeg < 176:
      result.textContent = "5 RED";
      finalNumber.style.backgroundColor = "red";
      break;
    case currentDeg >= 176 && currentDeg < 185:
      result.textContent = "10 BLACK";
      finalNumber.style.backgroundColor = "black";
      break;
    case currentDeg >= 185 && currentDeg < 195:
      result.textContent = "23 RED";
      finalNumber.style.backgroundColor = "red";
      break;
    case currentDeg >= 195 && currentDeg < 205:
      result.textContent = "8 BLACK";
      finalNumber.style.backgroundColor = "black";
      break;
    case currentDeg >= 205 && currentDeg < 215:
      result.textContent = "30 RED";
      finalNumber.style.backgroundColor = "red";
      break;
    case currentDeg >= 215 && currentDeg < 224:
      result.textContent = "11 BLACK";
      finalNumber.style.backgroundColor = "black";
      break;
    case currentDeg >= 224 && currentDeg < 234:
      result.textContent = "36 RED";
      finalNumber.style.backgroundColor = "red";
      break;
    case currentDeg >= 234 && currentDeg < 244:
      result.textContent = "13 BLACK";
      finalNumber.style.backgroundColor = "black";
      break;
    case currentDeg >= 244 && currentDeg < 253:
      result.textContent = "21 RED";
      finalNumber.style.backgroundColor = "red";
      break;
    case currentDeg >= 253 && currentDeg < 263:
      result.textContent = "6 BLACK";
      finalNumber.style.backgroundColor = "black";
      break;
    case currentDeg >= 263 && currentDeg < 273:
      result.textContent = "34 RED";
      finalNumber.style.backgroundColor = "red";
      break;
    case currentDeg >= 273 && currentDeg < 283:
      result.textContent = "17 BLACK";
      finalNumber.style.backgroundColor = "black";
      break;
    case currentDeg >= 283 && currentDeg < 292:
      result.textContent = "25 RED";
      finalNumber.style.backgroundColor = "red";
      break;
    case currentDeg >= 292 && currentDeg < 302:
      result.textContent = "2 BLACK";
      finalNumber.style.backgroundColor = "black";
      break;
    case currentDeg >= 302 && currentDeg < 312:
      result.textContent = "21 RED";
      finalNumber.style.backgroundColor = "red";
      break;
    case currentDeg >= 312 && currentDeg < 322:
      result.textContent = "4 BLACK";
      finalNumber.style.backgroundColor = "black";
      break;
    case currentDeg >= 322 && currentDeg < 331:
      result.textContent = "19 RED";
      finalNumber.style.backgroundColor = "red";
      break;
    case currentDeg >= 331 && currentDeg < 341:
      result.textContent = "15 BLACK";
      finalNumber.style.backgroundColor = "black";
      break;
    case currentDeg >= 341 && currentDeg < 350:
      result.textContent = "32 RED";
      finalNumber.style.backgroundColor = "red";
      break;
    case currentDeg >= 350 && currentDeg < 360:
      result.textContent = "0 GREEN";
      finalNumber.style.backgroundColor = "green";
      break;
  }
});
