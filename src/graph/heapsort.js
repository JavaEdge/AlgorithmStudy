/**
 * 堆排列
 *
 * 1. 把数组最大堆化（当降序排的时候最小堆）
 * 2. 堆首与堆尾互换
 * 3. 把最大堆的大小减1，进行堆化
 * 4. 反复2~3过程
 */

var heapify = function(arr, size){

    for( var i = (parseInt(size/2) - 1); i >= 0; i--) {
        downheap(arr, i, size);
    }
 };


 var downheap = function(arr, cur, size){
    var p, left, right;

    while( cur < size ){
        left = 2 * cur + 1;
        right = 2 * cur + 2;
        
        if( left >= size && right >= size ) break;
        
        p = cur;
        if( left < size && arr[p] < arr[left]){
            p = left;
        }

        if( right < size && arr[p] < arr[right]) {
            p = right;
        }

        if ( p === cur) break;

        swap(arr, cur, p);

        cur = p;
    }
 };

 var swap = function( arr, idx1, idx2) {
     var tmp = arr[idx1];
     arr[idx1] = arr[idx2];
     arr[idx2] = tmp;
 };


 var heapsort = function(arr){

    var size = arr.length;

    // 힙 생성
    heapify(arr, size);

    // 힙 정렬
    for(var k = size -1; k > 0; k--){
        swap(arr, 0, k);
        downheap(arr, 0, k);
    }

    return arr;
 };

var a = [ 1,4,3,5,7,6,8];

heapsort(a);