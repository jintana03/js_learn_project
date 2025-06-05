//Function คือ การทำงานหนึ่งๆ ***จะไม่ทำงานหากไม่เรียกใช้งาน (call funtion)***
//มี 4 ประเภท
//1. no parameter(ไม่มีอะไรในวงเล็บ) , no return
function sauFunc1(){
    console.log('wow.....')
}

//2. have patametets(มีข้อมูลในวงเล็บ), no return
function sauFunc2(aa,bb){
    console.log(aa);
    console.log(bb);
}

//3. no parameter(ไม่มีอะไรในวงเล็บ),has return
function sauFunc3(){
    console.log('woo.....')
    return 123456;
}

//4. have parameter(มีข้อมูลในวงเล็บ), has return
function sauFunc4(aa,bb,cc,dd){
    return aa+bb+cc+dd
}

//-----------------------------------
sauFunc1();
sauFunc1();
sauFunc2(10, 20); //ข้อมูลที่ส่งให้พารามิเตอร์ เรียกว่า argument
sauFunc2(5, 10);
sauFunc1();
//-----------------------------------
console.log('________________________________________');
let x1 = sauFunc3();
console.log( sauFunc3() );
const x2 = sauFunc4(10,20,30,40);
console.log( sauFunc4(11,22,33,44) );
console.log(`x1 = ${x1}` ); //console.log(x1);
console.log(`x2 = ${x2}` );