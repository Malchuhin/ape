const print_btn = document.getElementById("print_btn")
let state = false
let all_cost = 0
let product_cost = document.querySelector(".cost").innerHTML
product_cost = parseInt(product_cost)
let basket_cost = document.querySelector(".cost__bag")

function transition_btn() {
    if (state === false) {
        console.log("ghghgh")
        print_btn.innerHTML = "в корзине"
        print_btn.style.border = "2px solid black"
        print_btn.style.background = "#BDABA8 "
        state = true
        all_cost = all_cost + product_cost
    } else {
        console.log("ghghgh")
        print_btn.innerHTML = "купить игру"
        print_btn.style.border = "none"
        print_btn.style.background = "#C70039 "
        state = false
        all_cost = all_cost - product_cost
    }
    basket_cost.innerHTML = all_cost
}