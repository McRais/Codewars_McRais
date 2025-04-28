function countSubarrays(nums: number[], k: number): number {
    let len = nums.length
    let counter= 0,
        sum = 0
        for(let i = 0, j = 0; j < len; j++){
            sum+=nums[j]
            while (i <= j && sum * (j - i + 1) >= k){
                sum-=nums[i]
                i++
            }
            counter += j-i+1
        }
        return counter
};