//ชนิดข้อมูลต่างๆ(data type)ใน java 
//1.String
let aa ='Hello....'
let bb ="Hi...."
let cc =`Hey....` 

//2.Number
let dd =1234 //Integer
let ee =12.34 //Float

//3.Boolean
let ff = true
let gg = false

//4.Null
let hh = null //มีค่าแต่ไม่รู้ว่าค่าคืออะไร

//5.Undefined
let ii //Undefined (ไม่ได้กําหนดค่าให้ตัวแปร)

//6.Object จะเป็น key-value ภายใต้ ปีกกา{} ใช้บ่อย**
let xx = {
    stuName: 'john',
    stuAge: 20,
    stuAddress: {
        noHome: '1/123',
        Street : 'sukhumvit',
        city : 'bangkok'
    },
    stusubject: ['Math','English','Science'],
}

//7.Array
let jj = [1234,12.34] //Array of Number
let kk = [1234,12.34,true,false,null,undefined] //Mixd Array
let ll =[
    { name: 'John', age: 20 },
    { name: 'Jeff', age: 22 },
    { name: 'Jill', age: 25 },
]