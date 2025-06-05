//Arrow Function (ฟังชั่นที่มีการใช้เครื่องหมาย =>(เครื่องหมาย arrow) ในการรับพารามิเตอร์)
let aa =() =>{
    console.log('Hello Arrow Function.....');

}
//หากคำสั่งใน { } มีเพียง 1 คําสั่ง ไม่จำเป็นต้องใส่ {}
let bb = () => console.log('Arrow Function2....');
//---------------------------------------------------------
let cc = () => {
    return 'wow wow wow'
}
//หากคำสั่งใน { } มีเพียง 1 คําสั่ง และเป็นคำสั่ง return หากไม่ใส่ {} ไม่จำเป็นต้องใส่ return
let dd = () => 'ho ho ho'

aa();
aa();
bb();
aa();
console.log(cc());
console.log(dd());