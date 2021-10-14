
public class Solution {

    public int numSquares(int n) {
        int[] memoization = new int[n + 1];

        for (int i = 1; i <= n; i++) {
            memoization[i] = i;

            for (int j = 1; j * j <= i; j++) {
                memoization[i] = Math.min(memoization[i], memoization[i - (j * j)]);
            }
            memoization[i]++;
        }

        return memoization[n];
    }
}
