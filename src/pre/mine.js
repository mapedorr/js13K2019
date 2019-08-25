// color palette: https://lospec.com/palette-list/ayy4
kontra.init();

var colors = {S:'#000E14',B:'#00303b',P:'#ff7777',Y:'#ffce96',W:'#f1f2da'}
var canvasTxt = window.canvasTxt.default;
var txt = "Ctrl + ◄ (go back)\nCtrl + ► (go forward)\n▲ or ► (next)\n▼ or ◄ (previous)\nEnter (select)";
var browser_frame = kontra.sprite({
  render () {
    this.context.fillStyle = colors.B;
    this.context.fillRect(16, 16, 560, 538)
    this.context.strokeStyle = colors.W;
    this.context.lineWidth = 4;
    this.context.strokeRect(16, 16, 560, 538)
    this.context.strokeStyle = colors.S;
    this.context.strokeRect(580, 20, 1, 538)
    this.context.strokeRect(20, 558, 561, 1)
    this.context.fillStyle = colors.W;
    this.context.fillRect(18, 10, 556, 26)
    this.context.fillStyle = colors.B;
    this.context.fillRect(513, 28, 16, 4)
    this.context.fillRect(533, 16, 16, 16)
    this.context.fillStyle = colors.W;
    this.context.fillRect(535, 24, 12, 6)
    this.context.beginPath()
    this.context.lineWidth = 4;
    this.context.moveTo(553, 17);
    this.context.lineTo(567, 31);
    this.context.moveTo(553, 31);
    this.context.lineTo(567, 17);
    this.context.strokeStyle = colors.B
    this.context.fill()
    this.context.stroke()
    this.context.closePath()
  }
});
var text = kontra.sprite({
  x: 551,
  y: 120,
  // track how much time has passed
  dt: 0,
  render() {
    this.context.beginPath()
    this.context.fillStyle = colors.P
    this.context.fillRect(600, 228, 183, 113)
    this.context.fillStyle = colors.B;
    canvasTxt.drawText(this.context, txt, 602, 237, 178, 84);
  },
  update() {
    this.dt += 1/60;
    if (kontra.keys.pressed('left') && this.dt > 0.25) {
      this.dt = 0;
      // TODO: ???
    }
  }
})

canvasTxt.font = "Courier";
canvasTxt.align = "left";
canvasTxt.textSize = 14;
canvasTxt.lineHeight = 18;
canvasTxt.debug = false;

var loop = kontra.gameLoop({
  update() {
    text.update();
  },
  render() {
    browser_frame.render();
    text.render();
  }
});

loop.start();