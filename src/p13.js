module.exports = function (g) {
  var opts = [
    'everyone will die someday',
    'i don\'t know, please don\'t',
    'life is meaningless',
    'i want to work at a callcenter, everyone does',
    'if this is life...wtf',
    'why are you doing this to me, Lucy?'
  ];
  var wrn = 'If your answer is incorrect, one of our agents will\nvisit your home to suicide you\n\\(._.)/'.split('\n')
  var pg = {
    page_url: 'https://lospec.com/palette-list/fuzzyfour',
    x: 24,
    y: 146,
    w: 544,
    h: 400,
    sel: 0,
    dt: 0,
    hW: function () {
      return pg.x + pg.w / 2;
    },
    hH: function () {
      return pg.y + pg.h / 2;
    },
    // update: function () {},
    render: function () {
      // draw the window
      pg.bckg();
      // draw the content
      pg.cntt();
    },
    bckg: function () {
      g.ctx.fillStyle = g.colors.W;
      g.ctx.fillRect(pg.x, pg.y, pg.w, pg.h);
    },
    cntt: function () {
      pg.dt += 1/60;
      if (pg.dt > 0.25) {
        pg.dt = 0;
        if (g.action === 'next') {
          pg.sel += 1;
          if (pg.sel > opts.length) pg.sel = opts.length;
        } else if (g.action === 'prev') {
          pg.sel -= 1;
          if (pg.sel < 0) pg.sel = 0;
        }
      }
      g.ctx.font = 'bold 72px/74px Courier New';
      g.ctx.textAlign = 'center';
      g.ctx.fillStyle = g.colors.B;
      // draw the page's title
      g.ctx.fillText('password', pg.hW(), 184);
      // draw the page's warning
      g.ctx.font = g.dft_fnt_styl;
      g.ctx.fillStyle = g.colors.P;
      wrn.forEach(function (t, i) {
        g.ctx.fillText(t, pg.hW(), 474 + i * 18);
      });
      // draw the page's answer options
      g.ctx.fillStyle = g.colors.B;
      g.ctx.textAlign = 'left';
      opts.forEach(function (t, i) {
        g.ctx.fillText(((i === pg.sel) ? '*> ' : '*  ') + t, 98, 294 + i * 18);
      });
    }
  };

  return pg;
};