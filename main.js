"use strict";

const wrapper = document.querySelector(".wrapper");
const mainTitle = document.querySelector(".main_title");
const mainBtn = document.querySelector(".main_btn");
const mainTitleColor = document.querySelector(".main_title_color");

let color = "#0000ff";

wrapper.style.background = color;
mainTitleColor.style.color = color;
mainTitleColor.innerText = color;

const HEX_DATA = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateHexColor = (dataColor) => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += dataColor[getRandomInt(0, 15)];
  }

  return color;
};

mainBtn.addEventListener("click", () => {
  color = generateHexColor(HEX_DATA);

  mainTitleColor.innerText = color;
  mainTitleColor.style.color = color;
  wrapper.style.background = color;
});
