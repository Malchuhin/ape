const header= document.querySelector("header")
const body= document.querySelector("body")
const img= document.querySelector(".logo__theme-pic_light")
const button= document.querySelector(".buy_btn")
let body_color=""
let header_color=""
let button_color=""
let img_color=""
localStorage.clear()

if(localStorage.getItem("body_color") !== null){
    
    body_color= localStorage.getItem("body_color") 
    body.style.background=body_color
    console.log(body_color)
}
if(localStorage.getItem("header_color") !== null){

    header_color= localStorage.getItem("header_color")
    header.style.background=header_color
    console.log(header_color)
}
if(localStorage.getItem("button_color") !== null){

    button_color= localStorage.getItem("button_color")
    button.style.background=button_color
    console.log(button_color)
}
if(localStorage.getItem("img_color") !== null){

    img_color= localStorage.getItem("img_color")
    img.src=img_color
    console.log(img_color)
}

function dark_theme(){
    console.log("dffsf")
    // header.style.background="white"
    img.src = "img/icons8-солнце-50.png"
    body.style.background="black"
    body.style.color="white"
    header.style.color="black"
    button.style.background="white"
    localStorage.setItem("body_color", "black" )
    localStorage.setItem("header_color", "white")
    localStorage.setItem("button_color", "white")
    localStorage.setItem("img_color", "img/icons8-солнце-50.png")
}
function light_theme(){
    console.log("dffsf2")
    // header.style.background="#494848"
    img.src = "img/icons8-солнце-60.png"
    body.style.background="white"
    body.style.color="black"
    button.style.background="#C70039"
    localStorage.setItem("body_color", "white" )
    localStorage.setItem("header_color", "#494848")
    localStorage.setItem("button_color", "#C70039")
    localStorage.setItem("img_color", "img/icons8-солнце-60.png")
}
localStorage