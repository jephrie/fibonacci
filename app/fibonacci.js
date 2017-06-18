define(function(require) {
  var bigInt = require("big-integer");

  document.getElementById("submit").addEventListener('click', function(event) {
    var nStr = document.getElementById("n").value;

    var result = "";
    var n = parseInt(nStr);
    if (!nStr) {
      result = "Please enter something in to the text box!";
    } else if (isNaN(nStr)) {
      result = "Only numbers please!";
    } else if (n < 0) {
      result = "Only numbers > or = 0 please!";
    } else {
      result = fib(n);
    }
    document.getElementById("result").innerHTML = result;
  });

  // Generate the fibonacci sequence from 0 to the xth element. Only returns the xth element.
  // Optimised memory usage by implementing a sliding window and will calculate fibonacci from 0 every time.
  function fib(x) {
    var fibs = [bigInt(0), bigInt(1)];
    if (x == 0) {
      return fibs[0];
    }

    for (var i=2; i <= x; i++) {
      if (i >= fibs.length) {
        var f = fibs.shift().add(fibs[0]);
        fibs.push(f);
      }
    }
    return fibs[1];
  }
});
