console.log('sw running...');

setInterval(_ => {
  var s;
  for (var i = 0; i < 1e9; i++) {
    s += i;
  }
}, 100);
