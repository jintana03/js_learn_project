//callback Funtion ********** เป็นฟังก์ชั่นที่ถูกเรียกใช้ทีหลัง

let aa =() => console.log('Wow Wow.....');

let bb = (x,y) => x * y;

function test01(v1,v2){
    v1(); //call back function
    console.log(' Hi...test01');
    console.log(v2(10,20)); //call back function



}

test01(aa,bb)//call funtion

console.log('+++++++++++++++++++++++++++++++++++++++');

test01(bb , (m,n) =>{
    console.log('1111');
    console.log('222');
    console.log('333');
    return m + n;
});