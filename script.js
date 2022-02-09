const box1 =document.querySelector(".box1")
const box2 =document.querySelector(".box2")
const box3 =document.querySelector(".box3")

box1.addEventListener("click",show1)
box2.addEventListener("click",show2)
box3.addEventListener("click",show3)

function show1(){
    alert(box1.innerHTML)
}
function show2(){
    alert(box2.innerHTML)
}
function show3(){
    alert(box3.innerHTML)
}