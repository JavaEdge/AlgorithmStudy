/**
 * 并归排列
 * 1. 把数组分左右两部分
 * 2. 排列左部分.
 * 3. 排列右部分.
 * 4. 并归左右部分.
 * 
 * 时间复杂度最优 O(nlogn) 最坏 O(nlogn) 平均 O(nlogn)
 * 空间复杂度 O(n)
 * 稳定
 */

var mergesort = function(arr, left, right){
    if (right > left) {
        var mid = parseInt((left + right) / 2);
        console.log("mid => " + mid);
        console.log("left => " + left);
        console.log("right => " + right);
        mergesort(arr, left, mid);
        mergesort(arr, mid+1, right);
        merge(arr, left, mid, right);
    }
    return arr;
};

var merge = function(arr, left, mid, right){
    var j = mid+1;
    var i = left;
    var current = left;
    var tmp_left = [];
    var tmp_i = 0;
    
    for(; i <= mid; i++){
        tmp_left[tmp_i] = arr[i];
        tmp_i++;
    }

    var tmp_i = 0;
    while(tmp_i <= ( mid - left ) && j <= right) {
        if(tmp_left[tmp_i] < arr[j]){
            arr[current] = tmp_left[tmp_i];
            tmp_i++;
        }else{
            arr[current] = arr[j];
            j++;
        }
        current++;
    }

    while(tmp_i <= (mid - left) ) {
        arr[current] = tmp_left[tmp_i];
        tmp_i++;
        current++;
    }
};

var a = [ 1, 3, 4, 8, 9, 11, 24, 2, 5, 6, 8, 11, 23, 52, 118, 59];
mergesort(a, 0, a.length - 1);