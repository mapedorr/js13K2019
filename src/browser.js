var p13 = require('./p13');

module.exports = function (g) {
  var pgs = {
    13: p13(g)
  };
  var browser = {
    width: 560,
    height: 538,
    // update: function () {},
    render: function () {
      // draw the window
      browser.wndw();
      // draw the buttons bar
      browser.btns();
      browser.nvbr();
      // render the page
      browser.page();
    },
    wndw: function () {
      g.ctx.fillStyle = g.colors.B;
      g.ctx.fillRect(16, 16, browser.width, browser.height);
      // draw the border
      g.ctx.strokeStyle = g.colors.W;
      g.ctx.lineWidth = 4;
      g.ctx.strokeRect(16, 16, browser.width, browser.height);
      // draw the shadow
      g.ctx.strokeStyle = g.colors.S;
      g.ctx.strokeRect(580, 20, 1, browser.height);
      g.ctx.strokeRect(20, 558, 561, 1);
      // draw the title bar
      g.ctx.fillStyle = g.colors.W;
      g.ctx.fillRect(18, 10, 556, 26);
      // draw the minimize, maximize and close buttons
      g.ctx.fillStyle = g.colors.B;
      g.ctx.fillRect(513, 28, 16, 4);
      g.ctx.fillRect(533, 16, 16, 16);
      g.ctx.fillStyle = g.colors.W;
      g.ctx.fillRect(535, 24, 12, 6);
      g.ctx.beginPath();
      g.ctx.lineWidth = 4;
      g.ctx.moveTo(553, 17);
      g.ctx.lineTo(567, 31);
      g.ctx.moveTo(553, 31);
      g.ctx.lineTo(567, 17);
      g.ctx.strokeStyle = g.colors.B;
      g.ctx.fill();
      g.ctx.stroke();
      g.ctx.closePath();
    },
    btns: function () { // 236, 49
      g.ctx.fillStyle = g.colors.W;
      g.ctx.strokeStyle = g.colors.W;
      g.ctx.textAlign = 'center';
      g.ctx.lineWidth = 1;
      // the back button
      g.ctx.beginPath();
      g.ctx.moveTo(243, 65);
      g.ctx.lineTo(252, 49);
      g.ctx.lineTo(252, 58);
      g.ctx.lineTo(262, 58);
      g.ctx.lineTo(262, 72);
      g.ctx.lineTo(252, 72);
      g.ctx.lineTo(252, 81);
      g.ctx.lineTo(243, 65);
      if (g.action === 'back') {
        g.ctx.fill();
      }
      g.ctx.stroke();
      g.ctx.fillText('back', 252, 88);
      // the forward button
      g.ctx.beginPath();
      g.ctx.moveTo(338, 65);
      g.ctx.lineTo(328, 49);
      g.ctx.lineTo(328, 58);
      g.ctx.lineTo(319, 58);
      g.ctx.lineTo(319, 72);
      g.ctx.lineTo(328, 72);
      g.ctx.lineTo(328, 81);
      g.ctx.lineTo(338, 65);
      if (g.action === 'forward') {
        g.ctx.fill();
      }
      g.ctx.stroke();
      g.ctx.fillText('forward', 328, 88);
    },
    nvbr: function () { // 16, 103
      g.ctx.strokeStyle = g.colors.W;
      g.ctx.lineWidth = 1;
      g.ctx.strokeRect(16, 108, browser.width, 1);
      g.ctx.strokeRect(16, 138, browser.width, 1);
      g.ctx.textAlign = 'left';
      g.ctx.fillText('address:', 24, 117);
      // draw the current page URL
      g.ctx.fillRect(92, 116, 476, 16);
      g.ctx.fillStyle = g.colors.B;
      g.ctx.fillText(pgs[g.page].page_url, 100, 117);
    },
    page: function () {
      pgs[g.page].render();
    }
  };

  return browser;
};