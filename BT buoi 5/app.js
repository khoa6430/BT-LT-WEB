
//SS1:
//Khai báo biến 
// Global scope - function Scope
// "",'',``

//SS2:
//If-else
//loop for - while

//SS3: Array
// Khai báo
// Cách sử dụng
// C/R/U/D

//SS4 : Object
// Khai báo
// Cách sử dụng
// C/R/U/D
// Function

// {
//     let a =10   //ko nhận (biến cục bộ)
// }
// {
//     var a =10   // nhận (biến toàn cục)
// }
// console.log(a)


//let có thể gán lại nhưng không dc khai báo lại
//const không thể gán lại và cũng không được khai báo lại

// let a = 10;
// console.log(`Hello world ${a}`) // quan trong

// If - else

// a = 5;
// a = ++a + a-- + a++ - --a + a++ + a;
// // 6 + 6 + 6 - 5 + 5 + 5
// // 6 + 6 +5 - 5 +5 6
// console.log (a);

//toLowerCase or toUpperCase
// Các đặt tên biến :
// camelCase

// Array 
// C/R/U/D

// Readone

// arr = [1,2,3,4];

//CREATE FIRST ==> PUSH

//DELETE == > SHIFT

// DELETE LAST ==> POP

// XÓA PHẦN TỬ KHI BIẾT INDEX == > SPLICE(INDEX,AMOUNT)


// for (let prop in ['a', 'b', 'c']) 
//   console.log(prop);            // 0, 1, 2 (array indexes)

// for (let val of ['a', 'b', 'c']) 
//     console.log(val);            // a, b, c (array values

//== FOR IN TRẢ VỀ INDEX CÒN FOR OF TRẢ VỀ GIÁ TRỊ INDEX


// BÀI TẬP BUỔI 5

//1.Viết hàm kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không 

// nhapchuoi = prompt("NHAP CHUOI");

// function kt(chuoikt){
//     a = chuoikt.startsWith("Java");
//     return a;
// }
// b = kt(nhapchuoi);
// if(b == true){
//     console.log("Chuỗi này bắt đầu bằng 'java'");
// }
// else{
//     console.log("Chuỗi này không bắt đầu bằng 'java'");
// }

// - Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
// - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
// - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
// Example: 
// [1, -10, 5, 18, -9, 5] => 27

const a = [1, -10, 5, 18, -9, 5];
function kt(mang){
    
    max = Math.abs(mang[0]-mang[1]);
    for(i=0;i<mang.length - 1;i++){
         max = max < Math.abs(mang[i]-mang[i+1])? 
         max = Math.abs(mang[i]-mang[i+1]):
         max;
    }
    return max;
}
 b = kt(a);
console.log(b);

// 2.
// viết hàm first trả về giá trị đầu tiên của mảng, nếu n được truyền vào thì trả về 1 mảng chứa n giá trị đầu tiên của mảng 
// (hoặc cả mảng nếu n lớn hơn số phần tử của mảng). Nếu n <= 0 thì trả về mảng trống.
// Tham số:
// - array: mảng gốc
// - n: số phần tử trả về

// const a = [100,1,1, -10, 5, 18, -9, 5,30,100];
// function first(array,n){
//     new_array= [];
//     if(n > array.length){
//         n = array.length;
//     }
//     for(i=0;i<n;i++){
//         new_array[i] = array[i];
//     }
//     console.log(new_array);
// }
// first(a,50);

// BÀI 3
// Viết hàm checkInt để kiểm tra hai số nguyên được nhập vào. 
//  Nếu có 1 số âm và một số dương thì trả về true. 
// Các trường hợp khác trả về false. 
// Số 0 là số không âm cũng không dương
// Tham số:
//  - number1: số nguyên thứ nhất
// - number2: số nguyên thứ hai

// x = -2
// y = 6
// function checkInt(a,b){
//     if(a*b < 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(checkInt(x,y));

//BÀI 4
// Viết một hàm JavaScript có 1 tham số n trả về tuyệt đối của hiệu số đó và 13, 
// nếu số đó lớn hơn 13 trả về gấp đôi tuyệt đối của hiệu 2 số.
// Example: 
// n = 20 // return 14
// n = 5 // return 8

// function checkabs(n){

//     if(n>13){
        
//         return (2*(Math.abs(n-13)));
//     }
//     else{
//         return  Math.abs(13-n);
//     }
// }

// console.log(checkabs(20));

// BAI 5
// Hãy viết một hàm để tìm giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số

// Input: là một dãy số.
// Output: giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số.

// Ví dụ:
// Input: [1, 2, 3, 8, 9]
// Output: 8 (là hiệu của 9 và 1)


// a = [-10, 5, 18, -9,-100,200];
// function findmax(mang){
//     max = Math.abs(a[0]-a[1]);
//     for(i = 0 ; i<mang.length-1; i++){
//         for(j=i+1;j<mang.length;j++){
//             hieu = Math.abs(a[i]-a[j]);
//             if(hieu > max ){
//                 max = hieu;
//             }
//         }
//     }
//     console.log(max);
// }
// findmax(a);

