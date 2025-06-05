//ตัวแปรในjava สร้างได้3แบบ
//1. Var แก้ไขได้ กำหนดค่าทีหลังได้  เป็นGobal ใช้ที่ไหนก็ได้
var aa = 10;
var xx;
xx =100;

//2. let แก้ไขได้ กำหนดค่าทีหลังได้  เป็นLocal
let bb =20;
let yy;
yy =200;

//3. const แก้ไขไม่ได้ กำหนดค่าทีหลังไม่ได้ ต้องกำหนดเลย เป็นLocal
const cc =30;
// const zz; Error จร้า
//-------------------------------
{
    var a = 10; //Gobal
    let b = 20; //Local
    const c = 30; //Local
    {
        var d = 40; //Gobal
        let e = 50; //Local
        const f = 60; //Local
        {
        var g = 70; //Gobal
        let h = 80; //Local
        const i = 90; //Local
        }
        console.log(b);
        console.log(e);
        console.log(h);
    }
}