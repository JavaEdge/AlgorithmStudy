# 简单算法学习 :octocat:

## 冒泡排序  
原理：     
1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
1. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。 
1. 针对所有的元素重复以上的步骤，除了最后一个。 
1. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

\ | 最坏 | 平均 | 最优
----- | ----- | ----- | ----- 
时间复杂度 | O(n2) | O（n2） | O(n2) | 
空间复杂度 | O(1)

## 插入排序  
原理：  
1. 从第一个元素开始，该元素可以认为已经被排序
1. 取出下一个元素，在已经排序的元素序列中从后向前扫描
1. 如果该元素（已排序）大于新元素，将该元素移到下一位置
1. 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置
1. 将新元素插入到该位置后
1. 重复步骤2~5  

\ | 最坏 | 平均 | 最优
----- | ----- | ----- | ----- 
时间复杂度 | O(n2) | O(n2) | O(n) | 
空间复杂度 | O(1)

## 选择排序  
原理：  
它的工作原理是每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，直到全部待排序的数据元素排完。 选择排序是不稳定的排序方法。

\  | 最坏 | 平均 | 最优
----- | ----- | ----- | ----- 
时间复杂度 | O(n2) | O(n2) | O(n2) | 
空间复杂度 | O(1)

## 快速排序  
原理：  
1. 从数列中挑出一个元素，称为"基准"（pivot），
1. 重新排序数列，所有比基准值小的元素摆放在基准前面，所有比基准值大的元素摆在基准后面（相同的数可以到任何一边）。在这个分区结束之后，该基准就处于数列的中间位置。这个称为分区（partition）操作。
1. 递归地（recursively）把小于基准值元素的子数列和大于基准值元素的子数列排序。

\  | 最坏 | 平均 | 最优
----- | ----- | ----- | ----- 
时间复杂度 | O(n2) | O(nlogn) | O(nlogn) |   
空间复杂度 | O(1)

## 归并排序  

原理如：
递归法（Bottom-up）

1. 将序列每相邻两个数字进行归并操作，形成 {\displaystyle ceil(n/2)} {\displaystyle ceil(n/2)}个序列，排序后每个序列包含两/一个元素
1. 若此时序列数不是1个则将上述序列再次归并，形成 {\displaystyle ceil(n/4)} {\displaystyle ceil(n/4)}个序列，每个序列包含四/三个元素
1. 重复步骤2，直到所有元素排序完毕，即序列数为1

\  | 最坏 | 平均 | 最优
----- | ----- | ----- | ----- 
时间复杂度 | O(nlogn) | O(nlogn) | O(n) |   
空间复杂度 | O(n)

## 堆排序  
原理：
1. 最大堆调整（Max_Heapify）：将堆的末端子节点作调整，使得子节点永远小于父节点
1. 创建最大堆（Build_Max_Heap）：将堆所有数据重新排序
1. 堆排序（HeapSort）：移除位在第一个数据的根节点，并做最大堆调整的递归运算

\ | 最坏 | 平均 | 最优
----- | ----- | ----- | ----- 
时间复杂度 | O(nlogn) | O(nlogn) | O(nlogn)    
空间复杂度 | O(1)

## 数组容器接水问题
1. 双指针问题。
1. 从左右相互出发，如果一方的最大值小于等于另一方的最大值，就从小的一方为基准，把指针移动中的差异累计，直到中间遇到比大的一方大或相同的数为止。
1. 遇到的更大或相同的数为更新的最大值，再与另一方比较。
1. 重复 2 ~ 3过程， 直到左右两个指针不换位。
\ | 最坏 | 平均 | 最优
----- | ----- | ----- | ----- 
时间复杂度 | O(n) | O(n) | O(n)    
空间复杂度 | O(1)

## 2分查找 ( 折半查找 )
前提条件必须采用顺序储蓄结构， 必须按关键字大小有序排列
1. 折半查找
1. 时间复杂度为logn

## 二叉树后续遍历 LRD （Postorder Traversal）
1. 先遍历左子树
1. 然后遍历右子树
1. 最后遍历根节点

## 二叉树中续遍历 LDR （Inorder Traversal）
1. 先遍历左子树
1. 然后遍历根节点
1. 最后遍历右子树

## 二叉树中续遍历 DLR (Preorder Traversal）
1. 先遍历根节点
1. 然后遍历左子树
1. 最后遍历右子树

## 二元查找树： 
它首先要是一棵二元树，在这基础上它或者是一棵空树；或者是具有下列性质的二元树  
1. 若左子树不空，则左子树上所有结点的值均小于它的父结点的值； 
2. 若右子树不空，则右子树上所有结点的值均大于等于它的根结点的值； 
3. 左、右子树也分别为二元查找树

## 红黑树
1. 每个节点为红色或黑色
1. 根节点为黑色
1. 每个空(nil)节点为黑色
1. 每个红色节点的两个子节点为黑色
1. 每个节点到每个叶节点的所有路径都包含相同数量的黑色节点

