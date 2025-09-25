//LOGICAL OPERATORS
//AND &&
//OR ||
//NOT !

//123456789.......,TRUE,OK,COMFIRM=trues
//NULL,NaN,UNDEFINED,CANCEL,0
//boolean = true / false

// ORreturns the first tru value and ignores the rest 
// alert(3||56)
// alert(0||3||8)
// alert(0||false||undefined)

// let hour = prompt("what is the time");

// if(hour <=10 || hour >= 18){
//     alert('The office is closed')
// }else(
//     alert('Office is open')
// )

//AND 
// alert(23 && 27)
// alert(0 && null)
// alert(0 && false)
// alert(0&&5)

// let hour = 12;
// let minutes = 30;

// if (hour === 12 && minutes === 30) {
//     alert('12:30')
// }else(
//     alert(null)
// )

//NOT

// alert(!0)

// whats is the output
alert(12 || 0 || 13)= 12
alert(0 || null || undefined)=undefined
alert(12 && 0 && 13 )=0
alert(0 && null && undefined)=0
alert(12 || 13 && 0 || false)=0
alert(null && 6 || undefined && 75) = undefined
alert(null && 6 || undefined || 19)=19
alert(true || 6 && undefined || 19)=true