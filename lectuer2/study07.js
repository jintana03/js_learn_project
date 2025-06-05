//contorl statement คำสั่งควบคุมต่างๆ มี2แบบ การทำงานและลักษณะการเขียนเหมือน PHP
// พิสูจน์-ตรวจสอบ
// if,if-else,if-else-if,switch-case 

// ทำซ้ำ
// for,while,do-while
for(let i = 1 ; i <= 5; i++){
    console.log('Hello...');
}
console.log('---------------------------------');
let j = 1;
while(j <= 5){
    console.log('Hello...');
    j++;
}
console.log('---------------------------------');
let k = 1;
do{
    console.log('Hello...');
    k++;
} while (k <= 5)

//break,continue ใน loop
//break ใช้ในการหยุด loop โดยใช้ตัวแปร index หรือ condition ในการหยุด loop
//continue ใช้ในการหยุด loop โดยใช้ตัวแปร index หรือ condition ในการหยุด loop
//ใช้ในการหยุด loop
//break ใน loop ทำงานเมื่อไหร่ถือว่าจบการทำงานของ loop ทันที
//continue ใน loop ทำงานเมื่อไหร่ถือว่าจบรอบนั้น และจะข้ามการทำงานไปในรอบถัดไปทันที