const navbar = document.querySelector(".navbar-container .navbar-list")


document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.add("mobile")
    navbar.classList.remove("navbar-list")
}
document.querySelector("#close-btn").onclick = ()=> {
    navbar.classList.remove("mobile")
    navbar.classList.add("navbar-list")
}
