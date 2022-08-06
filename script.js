'use strict';

// Clear player selection
function clearPlayers() {
  document.querySelectorAll('.player').forEach(item => {
    item.classList.remove('selected');
  })
}

// Clear points selection
function clearPoints() {
  document.querySelectorAll('.point').forEach(item => {
    item.classList.remove('flash');
  })
}
  
// Player selection
let uid = 0;
document.querySelectorAll('.player').forEach(item => {
  item.addEventListener('click', function () {
    clearPlayers();
    // Highlighting the selected player
    this.classList.add('selected');

    // Get player uid
    uid = this.querySelector('.uid');
    let uidNumber = uid.textContent;
  })
})

// Selecting points
document.querySelectorAll('.point').forEach(item => {
  item.addEventListener('click', function () {
    this.classList.add('flash');
    setTimeout(clearPoints, 2000);
    const pointsID = item.getAttribute('id'); 
    // 1 point clicked
    if(pointsID === 'point-1') {
      let pointsSelector = document.querySelector(`#player-${uid.textContent}-points`).textContent;
      let currentPoints = Number(pointsSelector);
      currentPoints = currentPoints + 1;
      document.querySelector(`#player-${uid.textContent}-points`).textContent = currentPoints;
    }
    // 2 points clicked
    else if(pointsID === 'point-2') {
      let pointsSelector = document.querySelector(`#player-${uid.textContent}-points`).textContent;
      let currentPoints = Number(pointsSelector);
      currentPoints = currentPoints + 2;
      document.querySelector(`#player-${uid.textContent}-points`).textContent = currentPoints;
    }
    // 3 points clicked
    else if(pointsID === 'point-3') {
      let pointsSelector = document.querySelector(`#player-${uid.textContent}-points`).textContent;
      let currentPoints = Number(pointsSelector);
      currentPoints = currentPoints + 3;
      document.querySelector(`#player-${uid.textContent}-points`).textContent = currentPoints;
    }
  })
})