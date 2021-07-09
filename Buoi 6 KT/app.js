
//bai 1

// function daonguocchuoi(str){

//     new_str="";
//     for(i=str.length-1;i>=0;i--){
//         new_str = new_str + str[i];
//     }
//    return new_str;
// }

// x = prompt("INPUT STRING");
// str_input = daonguocchuoi(x);
// console.log(str_input);
 
// BAI 2 In ra chuỗi với ký tự đầu được viết hoa.


// function inhoa(str){

 
//     for(i=0;i<str.length;i++){
//         if(str[i] == ' '){
//             console.log("co");
//             if (str[i+1] >= "a" && str[i+1] <= "z") {

//                 f = str.charAt(i+1).toUpperCase();
//                 console.log(f);
//                 stringWithoutFirstLetter = str.slice(i+1,1)
//                 console.log(stringWithoutFirstLetter);
//                 str = str + f + stringWithoutFirstLetter;
//             }
 
//      }
       
//     }
//    return str;
// }

// x = prompt("INPUT STRING");

//str_input = inhoa(x);
// x.slice(,1)
// console.log(x);
//console.log(str_input);

//bai 3 Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả. (2đ)

// function xoapt(arr) {
//     var newArr = []
//     for (var i = 0; i < arr.length; i++) {
//       if (newArr.indexOf(arr[i]) === -1) {
//         newArr.push(arr[i])
//       }
//     }
//     return newArr
//   }

// x = prompt("INPUT STRING");
// str_input = xoapt(x);
// console.log(str_input);

//bai 4 tạo dữ liệu của 3 nhân viên Future Academy(gồm tên, tuổi, mức lương, chức vụ)

// nv = [
//     {
//         ten : "khoa",
//         tuoi : 22,
//         luong : 0,
//         chucvu : "hocsinh"
//     },
//     {
//         ten : "khoa1",
//         tuoi : 22,
//         luong : 0,
//         chucvu : "hocsinh"
//     },
//     {
//         ten : "khoa2",
//         tuoi : 22,
//         luong : 0,
//         chucvu : "hocsinh"
//     }
// ];



// while(true){
//         nhap = prompt("Nhập chữ cái");
//         if(nhap == "c"){
//             n = prompt("Nhập tên, tuổi, mức lương, chức vụ ");
//             a = [];
//             a = n.split(",");
//             //gán
//             nv.push({ten : a[0], tuoi : Number(a[1]),luong : Number(a[2]),chucvu : a[3]});
//         }
//         else if (nhap=="r"){
//             console.table(nv);
//         }
//         else if (nhap=="u"){
//             count = 0;
//             f = prompt("Nhập tên tìm kiếm");
//             for (var i in nv) {
//                 if (nv[i].ten == f) {
//                     g = prompt("Nhập tên cập nhật lại");
//                     nv[i].ten = g;
//                     count = 1;
//                 }
//             }
//             if(count == 0){
//                 console.log("KHÔNG TỒN TẠI")
//             }
//         }
//         else if (nhap=="d"){
//             count = 0;
//             f = prompt("Nhập tên cần xóa");
//             for (var i in nv) {
//                 if (nv[i].ten == f) {
//                     nv.splice(i, 1);
//                     count = 1;
//                 }
//             }
//             if(count == 0){
//                 console.log("KHÔNG TỒN TẠI")
//             }
//         }
//         else if ( nhap=="e"){
//             break;
//         }
//     }
    


//bai 5

ngay = Number(prompt("Nhập ngày"));
thang = Number(prompt("Nhập tháng"));
nam = Number(prompt("Nhập năm"));

if (nam<0 || thang<0 || thang> 12 || ngay<0 || ngay> 31)
{
    console.log("Ngay khong hop le");
 
}
else
{
    switch (thang)
    {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12: 
        if(ng>0 && ng <=30){
            console.log("Ngay hop le");
        }
        else  
            console.log("Ngay khong hop le"); break;
    case 4: case 6: case 9: case 11:
        if(ng>0 && ng<=30){
             console.log("Ngay hop le");
        }
        else  
            console.log("Ngay khong hop le"); break;
    case 2:
        if(ng>0 && ng <=28 || ng<=29){
            console.log("Ngay hop le");
        }
        else  console.log("Ngay khong hop le");
        break;
        default:  console.log("Ngay khong hop le");
        break;
}
}





































