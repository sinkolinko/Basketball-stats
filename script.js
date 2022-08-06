'use strict';

// Clear player selection
function clearPlayers() {
  document.querySelectorAll('.player').forEach(item => {
    item.classList.remove('selected');
    console.log('Players Cleared');
  })
}

// Clear points selection
function clearPoints() {
  document.querySelectorAll('.point').forEach(item => {
    item.classList.remove('selected');
    console.log('points Cleared');
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
    console.log(uidNumber);
  })
})

// Selecting points
document.querySelectorAll('.point').forEach(item => {
  item.addEventListener('click', function () {
    clearPoints();
    this.classList.add('selected');
    const pointsID = item.getAttribute('id'); 
    // 1 point clicked
    if(pointsID === 'point-1') {
      let pointsSelector = document.querySelector(`#player-${uid.textContent}-points`).textContent;
      let currentPoints = Number(pointsSelector);
      currentPoints = currentPoints + 1;
      document.querySelector(`#player-${uid.textContent}-points`).textContent = currentPoints;
      console.log('Point 1 clicked and player', uid.textContent, 'selected');
      console.log(`Current points are ${currentPoints}`);
    }
  })
})