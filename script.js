"use strict";

// Clear quarter selection
function clearQuarters() {
  document.querySelectorAll(".quarter").forEach((item) => {
    item.classList.remove("selected");
  });
}

// Clear points selection
function clearPoints() {
  document.querySelectorAll(".point").forEach((item) => {
    item.classList.remove("selected");
  });
}

// Substitute selection
document.getElementById("sub").addEventListener("click", function () {
  const substitutionState = this.getAttribute("data-sub");
  if (substitutionState === "sub-disabled") {
    this.setAttribute("data-sub", "sub-enabled");
    this.innerHTML = "SUB ENABLED";
    substitutionsEnabled();
  } else {
    if (document.querySelectorAll(".playing").length === 5) {
      this.setAttribute("data-sub", "sub-disabled");
      this.innerHTML = "SUB DISABLED";
      substitutionsDisabled();
    } else {
      alert("5 players are required on court");
    }
  }
});

function substitutionsDisabled() {
  document.querySelectorAll(".bench").forEach((item) => {
    item.classList.remove("substitute");
  });
}

function substitutionsEnabled() {
  document.querySelectorAll(".bench").forEach((item) => {
    item.classList.add("substitute");
  });
}

// the event listener should be on from the start, not called through fuction, just like all other buttons.

//When substitutionDisabled is called check if there are 5 players with playing class
//If not the the the substitution list wont close
//If there are 5 players the substitution list closes

document.querySelectorAll(".player-name").forEach((item) => {
  item.addEventListener("click", function () {
    const playerBox = item.parentNode;
    if (
      document.getElementById("sub").getAttribute("data-sub") === "sub-enabled"
    ) {
      if (playerBox.classList.contains("playing")) {
        playerBox.classList.remove("playing");
        playerBox.classList.add("bench", "substitute");
        console.log("Player on bench", this);
      } else {
        playerBox.classList.remove("bench", "substitute");
        playerBox.classList.add("playing");
        console.log("Player playing", this);
      }
    } else {
    }
  });
});

// Quarter selection
document.querySelectorAll(".quarter").forEach((item) => {
  item.addEventListener("click", function () {
    clearQuarters();
    this.classList.add("selected");
  });
});

// Points selection
document.querySelectorAll(".point").forEach((item) => {
  item.addEventListener(
    "click",
    function () {
      this.classList.add("selected");
      setTimeout(clearPoints, 1000);
      const pointsID = item.getAttribute("data-action");

      // 1 point clicked
      if (pointsID === "point-1") {
        let currentPointsElement =
          item.parentNode.querySelector(".player-points");
        let currentPoints = Number(currentPointsElement.textContent);
        currentPoints = currentPoints + 1;
        currentPointsElement.textContent = currentPoints;
        addToTotal(1);
      }

      // 2 points clicked
      else if (pointsID === "point-2") {
        let currentPointsElement =
          item.parentNode.querySelector(".player-points");
        let currentPoints = Number(currentPointsElement.textContent);
        currentPoints = currentPoints + 2;
        currentPointsElement.textContent = currentPoints;
        addToTotal(2);
      }

      // 3 points clicked
      else if (pointsID === "point-3") {
        let currentPointsElement =
          item.parentNode.querySelector(".player-points");
        let currentPoints = Number(currentPointsElement.textContent);
        currentPoints = currentPoints + 3;
        currentPointsElement.textContent = currentPoints;
        addToTotal(3);
      }

      // Fouls clicked
      else if (pointsID === "foul") {
        let currentFoulsElement =
          item.parentNode.querySelector(".player-fouls");
        let currentFouls = Number(currentFoulsElement.textContent);
        if (currentFouls === 5) {
          console.log("Player is already out");
          console.log(currentFouls);
        } else if (currentFouls === 4) {
          currentFouls = currentFouls + 1;
          currentFoulsElement.textContent = currentFouls;
          console.log("Player is out");
          item.parentNode.querySelector(".player-fouls").classList.add("alert");
          console.log(currentFouls);
        } else {
          currentFouls = currentFouls + 1;
          currentFoulsElement.textContent = currentFouls;
          console.log(currentFouls);
        }
      } else if (pointsID === "rebound") {
        let currentReboundsElement =
          item.parentNode.querySelector(".player-rebounds");
        let currentRebounds = Number(currentReboundsElement.textContent);
        currentRebounds = currentRebounds + 1;
        currentReboundsElement.textContent = currentRebounds;
        console.log(currentRebounds);
      }
    }
    // Save points to the database
    // console.log("3pt button clicked");
    // let currentTime = new Date().getTime();
    // firebase
    //   .database()
    //   .ref("game-id/team-id/" + currentTime)
    //   .set({
    //     "player-id": "Player unique ID",
    //     points: "How many points scored",
    //     quarter: "Current quarter",
    //   });
  );
});

// Total points
function addToTotal(howManyScored) {
  let totalPoints = document.querySelector("#total-points").textContent;
  let totalAdded = Number(totalPoints);
  totalAdded = totalAdded + howManyScored;
  document.querySelector("#total-points").textContent = totalAdded;
}
