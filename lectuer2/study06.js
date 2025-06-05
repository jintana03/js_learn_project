//Operator เครื่องหมายในการทำ Process ต่างๆ
//1. Arithmetic Operator
//+, - ,*, /, %,**,++,--
console.log(50% 20); //10 หารเอาเศษmod
console.log(2 ** 4); //16 ยกกําลัง


//2. comparison Operator
//==, ===, !=, !== ,>, <, >=, <=
console.log('Sombat' > 'Somjai'); //false 
console.log('Bangna' <= 'Banana'); //false
console.log('Thailand' == 'thailand'); //false ตัวอักษรพิมพ์ใหญ่และพิมพ์เล็กไม่เหมือนกัน T มีค่ามากกว่า t
console.log('20' == 20); //false สนใจแค่ตัวอักษรตัวเดียวกันมั้ย ไม่สนใจชนิดข้อมูล
console.log('20' === 20); //false สนใจชนิดข้อมูลและตัวอักษรตัวเดียวกันมั้ย

//3. Logical Operator (ผลลัพธ์เป็น boolean)
//&&, ||, !

//4. Ternary Operator
// condition ? expressionIfTrue : expressionIfFalse
console.log(20 > 100 ? 'Wow...' : 'Oh...No!!');
console.log('sau' === 'SAU' ? 'Hi...' : 'Hay...');
