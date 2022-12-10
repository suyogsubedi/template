const hamburger = document.querySelector(".hamburger")
const navItems = document.querySelector(".navLinks")
const auth = document.querySelector(".auth")

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active")
    navItems.classList.toggle("active")
    auth.classList.toggle("active")
})