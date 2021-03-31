"use-strict";

///////////////////////////
//
// Code for Digital Clock
//
//////////////////////////

const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const members = document.querySelector("#members");

setInterval(() => {
  setTime();
}, 1000);

function setTime() {
  let d = new Date();
  let sec = d.getSeconds();
  let min = d.getMinutes();
  let hr = d.getHours();

  seconds.innerHTML = appendZero(sec);
  minutes.innerHTML = appendZero(min);
  hours.innerHTML = appendZero(hr);
}

function appendZero(num) {
  if (num <= 9) {
    num = "0" + num;
  }
  return num;
}

///////////////////////////////////
//
// Code for getting members count
//
//////////////////////////////////

let numMembers = 0;
setInterval(() => {
  setMembers();
  updateMembers();
}, 1000);

// check if value is stored in local storage, or else, make new
if (localStorage.length != 0) {
  numMembers = +localStorage.getItem("members");
} else {
  let num = randomNumber(1000000);
  numMembers = num;
  localStorage.setItem("members", num);
}

function setMembers() {
  let strMembers = numMembers.toString();

  for (let i = 0; i <= strMembers.length - 1; i++) {
    const memberCard = document.querySelector(`#card-${i + 1}`);
    memberCard.innerHTML = strMembers[i];
  }
}

function updateMembers() {
  if (numMembers <= 999999) {
    numMembers += randomNumber(10);
  }
}

function randomNumber(x) {
  return Math.floor(Math.random() * x);
}
