console.log('sw running...');

function work() {
  console.log('time: ' + new Date().toISOString());
  var s = 0;
  for (var i = 0; i < 5e9; i++) {
    s += i;
  }
}

function task() {
  var sw = self.registration.active;
  sw.postMessage(1);
  work();
}

self.onmessage = function(e) {
  e.waitUntil(new Promise(y => {
    setTimeout(_ => {
      task();
      y();
    }, 1000);
  }));
};

this.onactivate = function() {
  task();
};
