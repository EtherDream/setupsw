console.log('sw running...');

function work() {
  console.log('time: ' + new Date().toISOString());
  var s = 0;
  for (var i = 0; i < 5e8; i++) {
    s += i;
  }
}

function task() {
  var sw = registration.active;
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

self.onactivate = function() {
  task();
};
