function solution(S) {

    var symStack = [];

    for (var i = 0; i < S.length; i++) {
      symStack.push(S[i]);
      if(symStack.length >  1) {
        if (isMatch(symStack[symStack.length-2], symStack[symStack.length-1])) {
          symStack.pop();
          symStack.pop();
        }
      }
    }

    if (symStack.length === 0) {
      return 1;
    } else {
      return 0;
    }
}

function isMatch(char1, char2) {
    if (char1 === "{" && char2 ==="}") {
        return true;
    } else if (char1 === "[" && char2 ==="]") {
        return true;
    } else if (char1 === "(" && char2 ===")") {
        return true;
    } else {
        return false;
    }
}
