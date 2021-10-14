
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    
    const memoization = new Array(n + 1);
    memoization.fill(0);
    
    for (let i = 1; i <= n; i++) {
        memoization[i] = i;

        for (let j = 1; j * j <= i; j++) {
            memoization[i] = Math.min(memoization[i], memoization[i - (j * j)]);
        }
        memoization[i]++;
    }

    return memoization[n];
};
