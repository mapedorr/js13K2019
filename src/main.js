// strong palette: https://lospec.com/palette-list/fuzzyfour
var game_state = {};
var raf = require('./raf');
var rng = require('./rng');
var kbd = require('./keyboard');
var brw = require('./browser');

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

function draw_controls (x, y) {
  ctx.beginPath();
  ctx.fillStyle = colors.Y;
  ctx.fillRect(x, y, 183, 113)
  ctx.fillStyle = colors.B;
  ctx.textAlign = 'left';
  txt.forEach(function (text, index) {
    ctx.fillText(text, x + 2, y + index * 18);
  });
}

function check_input () {
  dt += 1/60;
  if (dt > 0.25) {
    game_state.action = null;
    if (kbd.keyPressed('ctrl')) {
      dt = 0;
      if (kbd.keyPressed('left')) {
        dt = 0;
        game_state.action = 'back';
      } else if (kbd.keyPressed('right')) {
        dt = 0;
        game_state.action = 'forward';
      }
    } else {
      if (kbd.keyPressed('up') || kbd.keyPressed('left')) {
        dt = 0;
        game_state.action = 'prev';
      } else if (kbd.keyPressed('down') || kbd.keyPressed('right')) {
        dt = 0;
        game_state.action = 'next';
      }
    }
  }
}

function init() {
  game_state = {
    ctx: ctx,
    colors: colors,
    dft_fnt_styl: 'bold 14px/18px Courier New',
    page: 13,
    action: null
  };
  var game_objects = [];

  kbd.init();

  // font formal syntax >> font-style font-weight font-stretch font-size/line-height font-family
  ctx.textBaseline = 'top';

  // init the browser and the pages
  game_objects.push(brw(game_state));

  raf.start(function(elapsed) {
    // Clear the screen
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // set default font values
    ctx.font = game_state.dft_fnt_styl;
    ctx.textAlign = 'left';
    // check keyboard input
    check_input();
    // render the game objects
    draw_desktop();
    draw_controls(600, 228);
    for (i = 0; i < game_objects.length; i++) {
      game_objects[i].render(game_state);
    }
  });
}

init();
