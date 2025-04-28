/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let end = nums.length
    for(let i = 0; i<end; i++){
        if(nums[i] === 0){
            nums.push(0)
            nums.splice(i,1)
            i--
            end--
        }
    }
};