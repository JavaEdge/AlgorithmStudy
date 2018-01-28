/**
 * 插入排序
 * 就像我们排列手中的扑克牌
 * 有N个数据， 我们从 i = 0 开始
 * 1. 我们认为第一个数字到第i个为排列的数组
 * 2. 抽取第i + 1个数字a
 * 3. 对比从0到i，与a，插入到比a大的数字之前
 * 4. 重复1~3
 * 
 * 时间复杂度 最优 O(n2) 最坏 O(n2) 平均 O(n2)
 * 空间复杂度 O(1) 
 */

var insertSort = function(arr){
    var n = arr.length;
    var l = n - 1;
    for(var i = 0; i < n; i++) {
        if( i + 1 < n ) {
            for(var j = 0; j <= i; j++){
                if( arr[i + 1] < arr[j] ) {
                    var tmp = arr[i + 1];
                    arr.copyWithin(j + 1, j, i + 1);
                    arr[j] = tmp;
                    break;
                }
            }
        }
    }
    
    return arr;
};

var a = [ 1, 3, 4, 8, 9, 11, 24, 2, 5, 6, 8, 11, 23, 52, 118, 59];
insertSort(a, 0, a.length - 1);