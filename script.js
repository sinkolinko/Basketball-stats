'use strict';

// console.log('open');

// Setting the Id and Elements
const player22 = document.getElementById('player-22');
const player15 = document.getElementById('player-15');
const player4 = document.getElementById('player-4');
const player51 = document.getElementById('player-51');
const player13 = document.getElementById('player-13');

const point1 = document.getElementById('point-1');
const point2 = document.getElementById('point-2');
const point3 = document.getElementById('point-3');

const player22Points = document.getElementById('player-22-points');
const player15Points = document.getElementById('player-15-points');
const player4Points = document.getElementById('player-4-points');
const player51Points = document.getElementById('player-51-points');
const player13Points = document.getElementById('player-13-points');

let player22Score = 0;
let player15Score = 0;
let player4Score = 0;
let player51Score = 0;
let player13Score = 0;

function clearPlayers () {
  player22.classList.remove('selected');
  player15.classList.remove('selected');
  player4.classList.remove('selected');
  player51.classList.remove('selected');
  player13.classList.remove('selected');
}

function clearPoints () {
  point1.classList.remove('selected');
  point2.classList.remove('selected');
  point3.classList.remove('selected');
}

// chosenPlayer = chosenplayer === 22 ? 15 ? 4 ? 51 ? 13 : 22

// Selecting the players
player22.addEventListener('click', function() {
  clearPlayers();
  this.classList.add('selected');
})
  
player15.addEventListener('click', function() {
  clearPlayers();
  this.classList.add('selected');
})

player4.addEventListener('click', function() {
  clearPlayers();
  this.classList.add('selected');
})

player51.addEventListener('click', function() {
  clearPlayers();
  this.classList.add('selected');
})

player13.addEventListener('click', function() {
  clearPlayers();
  this.classList.add('selected');
})

// Selecting the points scored by the player

point1.addEventListener('click', function() {
  clearPoints();
  this.classList.add('selected');
  if (player22.classList.contains('selected') && point1.classList.contains('selected')) {
    player22Score++;
    player22Points.textContent = (`${player22Score} points`);
  }

  if (player15.classList.contains('selected') && point1.classList.contains('selected')) {
    player15Score++;
    player15Points.textContent = (`${player15Score} points`)
  }

  if (player4.classList.contains('selected') && point1.classList.contains('selected')) {
    player4Score++;
    player4Points.textContent =  (`${player4Score} points`)
  }

  if (player51.classList.contains('selected') && point1.classList.contains('selected')) {
    player51Score++;
    player51Points.textContent = (`${player51Score} points`);
  }

  if (player13.classList.contains('selected') && point1.classList.contains('selected')) {
    player13Score++;
    player13Points.textContent = (`${player13Score} points`);
  }
})

point2.addEventListener('click', function() {
  clearPoints();
  this.classList.add('selected');
  if (player22.classList.contains('selected') && point2.classList.contains('selected')) {
    player22Score = player22Score + 2;
    player22Points.textContent = (`${player22Score} points`);
  }

  if (player15.classList.contains('selected') && point2.classList.contains('selected')) {
    player15Score = player15Score + 2;
    player15Points.textContent = (`${player15Score} points`);
  }

  if (player4.classList.contains('selected') && point2.classList.contains('selected')) {
    player4Score = player4Score + 2;
    player4Points.textContent =  (`${player4Score} points`)
  }

  if (player51.classList.contains('selected') && point2.classList.contains('selected')) {
    player51Score = player51Score + 2;
    player51Points.textContent = (`${player51Score} points`);
  }

  if (player13.classList.contains('selected') && point2.classList.contains('selected')) {
    player13Score = player13Score + 2;
    player13Points.textContent = (`${player13Score} points`);
  }
})

point3.addEventListener('click', function() {
  clearPoints();
  this.classList.add('selected');
  if (player22.classList.contains('selected') && point3.classList.contains('selected')) {
    player22Score = player22Score + 3;
    player22Points.textContent = (`${player22Score} points`);
  }

  if (player15.classList.contains('selected') && point3.classList.contains('selected')) {
    player15Score = player15Score + 3;
    player15Points.textContent = (`${player15Score} points`)
  }

  if (player4.classList.contains('selected') && point3.classList.contains('selected')) {
    player4Score = player4Score + 3;
    player4Points.textContent =  (`${player4Score} points`);
  }

  if (player51.classList.contains('selected') && point3.classList.contains('selected')) {
    player51Score = player51Score + 3;
    player51Points.textContent = (`${player51Score} points`);
  }

  if (player13.classList.contains('selected') && point3.classList.contains('selected')) {
    player13Score = player13Score + 3;
    player13Points.textContent = (`${player13Score} points`);
  }
})

