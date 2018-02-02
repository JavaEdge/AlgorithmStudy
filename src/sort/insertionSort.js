/**
 * 插入排序
 * 就像我们排列手中的扑克牌
 * 有N个数据， 我们从 i = 0 开始
 * 1. 我们认为第一个数字到第i个为排列的数组
 * 2. 抽取第i + 1个数字a
 * 3. 对比从0到i，与a，插入到比a大的数字之前
 * 4. 重复1~3
 * 
 * 时间复杂度 最优 O(n) 最坏 O(n2) 平均 O(n2)
 * 空间复杂度 O(1) 
 */

var insertionSort = function(arr){
    var n = arr.length;
    var l = n - 1;
    for(var i = 0; i < n -1; i++) {
        if( arr[i] > arr[i + 1]){
            for(var j = i; j >=  0; j--){
                if( arr[j] > arr[j + 1] ) {
                    var tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }else{
                    break;
                }
            }
        }
    }
    
    return arr;
};

var a = [ 1, 3, 4, 8, 9, 11, 24, 2, 5, 6, 8, 11, 23, 52, 118, 59];
insertionSort(a, 0, a.length - 1);