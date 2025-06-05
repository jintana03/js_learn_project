//การแปลงข้อมูลใน javaScript
//1. String เป็น Number
let aa = "10";
let bb = "20.50";

console.log(Number(aa)+Number(bb));
console.log('---------------------------------');
console.log(`${aa} + ${bb} = ${Number(aa)+Number(bb)}`);
console.log('---------------------------------');
console.log(parseInt(aa) + parseFloat(bb));
console.log('---------------------------------');
console.log(`${aa} + ${bb} = ${parseInt(aa)+parseFloat(bb)}`);
console.log('---------------------------------');

//2. Number เป็น String 
let cc = 10;
let dd = 20.55548487;
console.log(String(cc));
console.log(String(dd));
console.log(cc.toString);
console.log(dd.toString);
console.log(cc.toFixed(2)); //แสดงทศนิยม2ตำแหน่ง
console.log(dd.toFixed(4)); //แสดงทศนิยม4ตำแหน่ง