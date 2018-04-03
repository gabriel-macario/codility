function solution(S, P, Q) {
    var prefA = [0];
    var prefC = [0];
    var prefG = [0];
    var prefT = [0];
    var impacts = [];

    for (var i = 0; i < S.length; i++) {
        prefA.push(prefA[i]);
        prefC.push(prefC[i]);
        prefG.push(prefG[i]);
        prefT.push(prefT[i]);

        if (S[i] === 'A') {
            prefA[i + 1] += 1;
        } else if (S[i] === 'C') {
            prefC[i+1] += 1;
        } else if (S[i] === 'G') {
            prefG[i+1] += 1;
        } else if (S[i] === 'T') {
            prefT[i+1] += 1;
        }
    }

    for (var i = 0; i < P.length; i++) {
        if(prefA[Q[i] +1] > prefA[P[i]]) {
            impacts.push(1);
        } else if (prefC[Q[i] + 1] > prefC[P[i]]) {
            impacts.push(2);
        } else if (prefG[Q[i] + 1] > prefG[P[i]]) {
            impacts.push(3);
        } else if (prefT[Q[i] + 1] > prefT[P[i]]) {
            impacts.push(4);
        } else if (P[i] === Q[i]) {
            if (S[P[i]] === 'A') {
                impacts.push(1);
            } else if (S[P[i]] === 'C') {
                impacts.push(2);
            } else if (S[P[i]] === 'G') {
                impacts.push(3);
            } else if (S[P[i]] === 'T') {
                impacts.push(4);
            }
        }
    }

    return impacts;
}
