//
// Created by tim on 29-08-20.
//

#include <vector>

using namespace std;

class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        int sum = 0;
        vector<int> result;
        int i = 0;
        for (int it = nums.begin(); it != nums.end(); ++it) {
            sum += *it;
            vector[i] = sum;
            i++;
        }
    }
};
