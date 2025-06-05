//Funtion Expression คือ การสร้างฟังก์ชันด้วยการสร้างฟังก์ชันแบบ (นิพจน์) โดยใช้ Function Expression และเก็บไว้ในตัวแปร
//1. Anonymous Function (ฟังชั่นไม่มีชื่อ) 
let aa = function () {
    console.log('Anonymous Function');
}

let bb = function (a, b) {
    return a + b ;

}

aa()
aa()
console.log(bb(10, 20));

//2. Arrow Function **** (ฟังชั่นที่มีการใช้เครื่องหมาย =>(เครื่องหมาย arrow) ในการรับพารามิเตอร์)
let cc = () => {
    console.log('Arrow Function');
}

let dd = (a, b) => {
    return a + b ;
    
}

cc()
cc()
console.log(dd(10, 20));