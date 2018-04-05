function solution(A, B) {
    var inRiver = [];
    var safety = [];

    for (var i = 0; i < A.length; i++) {
        if (B[i] === 1) {
            inRiver.push(A[i]);
        } else {
            while (inRiver.length > 0 && A[i] > inRiver[inRiver.length - 1]) {
                    inRiver.pop();
            }

            if (inRiver.length === 0) {
                safety.push(A[i]);
            }
        }
    }

    return safety.length + inRiver.length;
}
