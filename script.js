"use strict";

// Clear quarter selection
function clearQuarters() {
  document.querySelectorAll(".quarter").forEach((item) => {
    item.classList.remove("selected");
  });
}

// Clear player selection
function clearPlayers() {
  document.querySelectorAll(".player").forEach((item) => {
    item.classList.remove("selected");
  });
}

// Clear points selection
function clearPoints() {
  document.querySelectorAll(".point").forEach((item) => {
    item.classList.remove("flash");
  });
}

// Quarter selection
document.querySelectorAll(".quarter").forEach((item) => {
  item.addEventListener("click", function () {
    clearQuarters();
    this.classList.add("selected");
  });
});

// Player selection
let uid = 0;
document.querySelectorAll(".player").forEach((item) => {
  item.addEventListener("click", function () {
    clearPlayers();
    // Highlighting the selected player
    this.classList.add("selected");

    // Get player uid
    uid = this.querySelector(".uid");
    let uidNumber = uid.textContent;
  });
});

// Points selection
document.querySelectorAll(".point").forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.add("flash");
    setTimeout(clearPoints, 2000);
    const pointsID = item.getAttribute("id");
    // 1 point clicked
    if (pointsID === "point-1") {
      let pointsSelector = document.querySelector(
        `#player-${uid.textContent}-points`
      ).textContent;
      let currentPoints = Number(pointsSelector);
      currentPoints = currentPoints + 1;
      document.querySelector(`#player-${uid.textContent}-points`).textContent =
        currentPoints;
      addToTotal(1);
    }
    // 2 points clicked
    else if (pointsID === "point-2") {
      let pointsSelector = document.querySelector(
        `#player-${uid.textContent}-points`
      ).textContent;
      let currentPoints = Number(pointsSelector);
      currentPoints = currentPoints + 2;
      document.querySelector(`#player-${uid.textContent}-points`).textContent =
        currentPoints;
      addToTotal(2);
    }
    // 3 points clicked
    else if (pointsID === "point-3") {
      let pointsSelector = document.querySelector(
        `#player-${uid.textContent}-points`
      ).textContent;
      let currentPoints = Number(pointsSelector);
      currentPoints = currentPoints + 3;
      document.querySelector(`#player-${uid.textContent}-points`).textContent =
        currentPoints;
      addToTotal(3);
    }
  });
});

// Total points
function addToTotal(howManyScored) {
  let totalPoints = document.querySelector("#total-points").textContent;
  let totalAdded = Number(totalPoints);
  totalAdded = totalAdded + howManyScored;
  document.querySelector("#total-points").textContent = totalAdded;
}

// Firebase Testing
var dbRef = firebase.database().ref('Test 01').child('Banana');

// Using 3 Point button for testing purpose
document.querySelector('#point-3').addEventListener('click', () => {
  console.log('button clicked');
  dbRef.push('This is a test 01');
});