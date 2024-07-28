function dientich (a){
    console.log(a*a)
}
dientich(3)
dientich(4)
const nam = 360
if (nam%400==0){
    console.log("khong phai nam nhuan")
}
else{
    if (nam%4==0){
        if (nam%100==0){
            console.log("khong phai nam nhuan")
        }
    }
}
let x=3
if (x>0){
    document.body.style.backgroundColor = "red"
}
else{
    document.body.style.backgroundColor = "blue"
}