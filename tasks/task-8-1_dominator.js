function solution (A) {
  var stack = [];

  for (var i = 0; i < A.length; i++) {
    stack.push(A[i]);

    if (stack.length > 1) {
      if (stack[stack.length - 1] !== stack[stack.length - 2]) {
        stack.pop();
        stack.pop();
      }
    }
  }

  if (stack.length === 0) {
      return -1;
  } else {
      var candidate = stack[0];
      var count = 0;
      var index = -1;
      for (var j = 0; j < A.length; j++) {
          if (A[j] === candidate) {
              index = j;
              count++;
          }
      }

      if (count > Math.floor(A.length / 2)) {
          return index;
      } else {
          return -1;
      }
  }
}
