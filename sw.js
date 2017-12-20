console.log('sw running...');

function work() {
  console.log('work');
  var s = 0;
  for (var i = 0; i < 9e9; i++) {
    s += i;
  }
}

self.onmessage = function(e) {
  e.waitUntil(new Promise(y => {
    setTimeout(_ => {
      var sw = self.registration.active;
      sw.postMessage(1);
      work();
      y();
    }, 1000);
  }));
};
