const mouth = document.querySelector("#mouth");
const eyes = document.querySelector("#eyes");
const shirt = document.querySelector("#shirt");
const hat = document.querySelector("#hat");
const mouthImg = document.querySelector("#mouth-img");
const shirtImg = document.querySelector("#shirt-img");
const eyesImg = document.querySelector("#eyes-img");
const hatImg = document.querySelector("#hat-img");

const numOfBodyParts = 2;

let currBodyParts = { Mouth: 1, Eyes: 1, Shirt: 1, Hat: 1 };

function cycleThrough(curr) {
  let newNum = curr + 1;
  let returnVal;
  newNum > numOfBodyParts ? (returnVal = 1) : (returnVal = newNum);
  return returnVal;
}

function cycleBodyPart(partEl, bodyPart) {
  console.log(currBodyParts);
  currBodyParts[bodyPart] = cycleThrough(currBodyParts[bodyPart]);
  partEl.src = `./${bodyPart}s/${bodyPart}${currBodyParts[bodyPart]}.png`;
}

mouth.addEventListener("click", () => {
  cycleBodyPart(mouthImg, "Mouth");
});

eyes.addEventListener("click", () => {
  cycleBodyPart(eyesImg, "Eyes");
});

shirt.addEventListener("click", () => {
  cycleBodyPart(shirtImg, "Shirt");
});

hat.addEventListener("click", () => {
  cycleBodyPart(hatImg, "Hat");
});
