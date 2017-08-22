
/*
 题目：

 计算两个数组的交数组

 注意：理解题意（不是找出在两数组中都存在的元素）
 例如：nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2, 2].
 */
'use strict';
let num1=[1,2,2,1];
let num2=[2,2];
console.log('num1： ');console.log(num1)
console.log('num2： ');console.log(num2)
console.log('返回：')
main(num1,num2)


function main(collectionA,collectionB){
    let result =collectionA.filter((item) => collectionB.includes(item))
    console.log(result)
}
