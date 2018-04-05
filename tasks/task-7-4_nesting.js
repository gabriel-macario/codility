function solution(S) {
  
    var stack = [];

    for (var i = 0; i < S.length; i++) {
        stack.push(S[i]);
        if (stack.length > 1) {
            if (stack[stack.length - 2] === "(" && stack[stack.length - 1] === ")") {
                stack.pop();
                stack.pop();
            }
        }
    }

    if (stack.length === 0) {
        return 1;
    } else {
        return 0;
    }
}
