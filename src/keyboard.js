var callbacks = {};
var pressedKeys = {};
var keyMap = {
  // named keys
  13: 'enter',
  27: 'esc',
  32: 'space',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  17: 'ctrl'
};

function keydownEventHandler (evt) {
  var key = keyMap[evt.which];
  pressedKeys[key] = true;

  if (callbacks[key]) {
    callbacks[key](evt);
  }
}

function keyupEventHandler (evt) {
  pressedKeys[ keyMap[evt.which] ] = false;
}

function blurEventHandler() {
  pressedKeys = {};
}

function bindKeys (keys, callback) {
  // smaller than doing `Array.isArray(keys) ? keys : [keys]`
  [].concat(keys).map(function(key) {
    callbacks[key] = callback;
  });
}

function unbindKeys (keys) {
  // 0 is the smallest falsy value
  [].concat(keys).map(function(key) {
    callbacks[key] = 0;
  });
}

module.exports = {
  init: function() {
    var i;

    // alpha keys
    // @see https://stackoverflow.com/a/43095772/2124254
    for (i = 0; i < 26; i++) {
      // rollupjs considers this a side-effect (for now), so we'll do it in the
      // initKeys function
      // @see https://twitter.com/lukastaegert/status/1107011988515893249?s=20
      keyMap[65+i] = (10 + i).toString(36);
    }

    // numeric keys
    for (i = 0; i < 10; i++) {
      keyMap[48+i] = ''+i;
    }

    window.addEventListener('keydown', keydownEventHandler);
    window.addEventListener('keyup', keyupEventHandler);
    window.addEventListener('blur', blurEventHandler);
  },
  keyPressed: function(key) {
    return !!pressedKeys[key];
  }
};