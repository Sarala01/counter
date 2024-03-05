//COUNTER PROGRAMM

const decresebtn = document.getElementById("decresebtn");
const increasebtn = document.getElementById("increasebtn");
const resetbtn = document.getElementById("resetbtn");
const countlabel = document.getElementById("countlabel");
let count = 0;
//increase
increasebtn.onclick = function () {
  count++;
  countlabel.textContent = count;
};
//decrease
decresebtn.onclick = function () {
    count--;
    countlabel.textContent = count;
  };
  //Reset
  resetbtn.onclick = function () {
    count = 0;
    countlabel.textContent = count;
  };