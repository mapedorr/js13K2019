// strong palette: https://lospec.com/palette-list/fuzzyfour
var raf = require('./raf');
var rng = require('./rng');
var kbd = require('./keyboard');
var canvas = document.querySelector('#game');
var ctx = canvas.getContext('2d');
var seed = 1;
var rand = rng(seed);
var colors = {
  S:'#000E14', // 000E14
  B:'#302387', // 00303b
  P:'#ff3796', // ff7777
  Y:'#00faac', // ffce96
  W:'#fffdaf'  // f1f2da
};
var txt = 'Ctrl + ◄ (go back)\nCtrl + ► (go forward)\n▲ or ► (next)\n▼ or ◄ (previous)\nEnter (select)'.split('\n');
var dt = 0;

function draw_desktop () {
  ctx.fillStyle = colors.B;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw_browser () {
  ctx.fillStyle = colors.B;
  ctx.fillRect(16, 16, 560, 538);
  ctx.strokeStyle = colors.W;
  ctx.lineWidth = 4;
  ctx.strokeRect(16, 16, 560, 538);
  ctx.strokeStyle = colors.S;
  ctx.strokeRect(580, 20, 1, 538);
  ctx.strokeRect(20, 558, 561, 1);
  ctx.fillStyle = colors.W;
  ctx.fillRect(18, 10, 556, 26);
  ctx.fillStyle = colors.B;
  ctx.fillRect(513, 28, 16, 4);
  ctx.fillRect(533, 16, 16, 16);
  ctx.fillStyle = colors.W;
  ctx.fillRect(535, 24, 12, 6);
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.moveTo(553, 17);
  ctx.lineTo(567, 31);
  ctx.moveTo(553, 31);
  ctx.lineTo(567, 17);
  ctx.strokeStyle = colors.B;
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function draw_controls (x, y) {
  ctx.beginPath();
  ctx.fillStyle = colors.Y;
  ctx.fillRect(x, y, 183, 113)
  ctx.fillStyle = colors.B;
  txt.forEach(function (text, index) {
    ctx.fillText(text, x + 2, y + index * 18);
  });
}

function check_input () {
  dt += 1/60;
  if (dt > 0.25) {
    if (kbd.keyPressed('left')) {
      dt = 0;
      console.log('left');
    }

    if (kbd.keyPressed('right')) {
      dt = 0;
      console.log('right');
    }

    if (kbd.keyPressed('up')) {
      dt = 0;
      console.log('up');
    }

    if (kbd.keyPressed('down')) {
      dt = 0;
      console.log('down');
    }
  }
}

function init() {
  kbd.init();

  // font formal syntax >> font-style font-weight font-stretch font-size/line-height font-family
  ctx.font = 'bold 14px/18px Courier New';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';

  raf.start(function(elapsed) {
    // Clear the screen
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // check keyboard events
    check_input();
  
    // render the game objects
    draw_browser();
    draw_controls(600, 228);
  });
}

init();
