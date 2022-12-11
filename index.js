const menuBtn = document.getElementById("menu")
const closeBtn = document.querySelector(".close")
const navBar = document.querySelector("nav")
const logo = document.querySelector("#logo")

menuBtn.addEventListener("click", () => {
  document.querySelector(".modal").classList.add("show-modal")
})

closeBtn.addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("show-modal")
})

window.addEventListener("scroll", () => {
  const navHeight = navBar.getBoundingClientRect().height
  const scrollHeight = window.pageYOffset
  if (scrollHeight > navHeight) {
    navBar.classList.add("fixed-navbar")
    logo.style.visibility = "hidden"
  } else {
    navBar.classList.remove("fixed-navbar")
    logo.style.visibility = "visible"
  }
})
