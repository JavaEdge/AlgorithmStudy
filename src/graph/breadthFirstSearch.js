/**
 * Breadth First Search 
 * 
 * 解题过程:
 *  1. 把0节点添加到queue
    2. 读取queue的第一个节点
    3. 并把当前节点的左右节点添加到queue
    4. 重复2~3， 直到queue没有任何节点
 * 
 */

var queue = [];

var breadth_first_search = function( search_data ){
    var node = queue.shift();
    console.log(node.value);

    if(node.value === search_data ){
        console.log("已找到。结束程序。");
        return;
    }

    if(node.left) {
        queue.push(node.left);
    }

    if(node.right) {
        queue.push(node.right);
    }

    if(queue.length === 0){
        console.log("没有结果， 结束程序");
        return;
    }

    breadth_first_search( search_data );

};

var a = {
    value: 10
};

var b = {
    value: 8
};
var c = {
    value: 7
};
var d = {
    value: 5
};

var e = {
    value: 11
};

var f = {
    value: 12
}

a.left = b;
a.right = c;
b.left = d;
b.left = e;
c.right = f;

queue.push(a);
var path = breadth_first_search(31);