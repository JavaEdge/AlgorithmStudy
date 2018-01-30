/**
 * 给定一个非负数的数组，代表一个容器。例如数组[0,1,0,2,1,0,1,3,2,1,2,1]，就是 以下图形中黑色的部分。如果用这个容器接水的话，请问可以接多少水？还以这个数组为例，可以接6格水，就是以下图形中蓝色的部分。 
 * 要求：实现时间复杂度O(N)，额外空间复杂度O(1)的解法。
 * 
 * 
 * 1. 双指针问题。
 * 2. 从左右相互出发，如果一方的最大值小于等于另一方的最大值，就从小的一方为基准，把指针移动中的差异累计，直到中间遇到比大的一方大或相同的数为止。
 * 3. 遇到的更大或相同的数为更新的最大值，再与另一方比较。
 * 4. 重复 2 ~ 3过程， 直到左右两个指针不换位。
 */

var fn_water = {
    max_water: 0,
    arr_water: [],
    set_array: (arr) => {
        fn_water.arr_water = arr;
    },
    get_max_water: () => {
        let arr = fn_water.arr_water;
        console.log(JSON.stringify(arr));
        if(arr.length <= 2) {
            return 0;
        }
        let max_l = arr[0];
        let max_r = arr[arr.length - 1];
        let l = 1;
        let r = arr.length - 2;
        let total = fn_water.max_water;

        while(l < r) {
            if( max_l <= max_r) {
                total += Math.max(0, max_l - arr[l]);
                if( max_l < arr[l]){
                    max_l = arr[l];
                }
                l++;
            } else {
                total += Math.max(0, max_r - arr[r]);
                if( max_r < arr[r]){
                    max_r = arr[r];
                }
                r--;
            }
        }
        
        return total;
    }
};

var arr = [0,1,0,2,1,0,1,3,2,1,2,1];
fn_water.set_array(arr);
var max = fn_water.get_max_water();

console.log(max);