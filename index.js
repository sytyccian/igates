const menuBtn = document.getElementById("menu")
const closeBtn = document.querySelector(".close")
const navBar = document.querySelector("nav")
const logo = document.querySelector("#logo")
const links = document.querySelectorAll(".modal div a")

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(".modal").classList.remove("show-modal")
    const id = e.currentTarget.getAttribute("href").slice(1)
    const element = document.getElementById(id)
    console.log(id)

    // calculate the heights
    const navHeight = navBar.getBoundingClientRect().height
    console.log(navHeight)
    const fixedNav = navBar.classList.contains("fixed-navbar")
    let position = element.offsetTop - navHeight
    if (!fixedNav) {
      position = position - navHeight
    }

    window.scrollTo({
      left: 0,
      top: position,
    })
  })
})

menuBtn.addEventListener("click", () => {
  document.querySelector(".modal").classList.add("show-modal")
})

closeBtn.addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("show-modal")
})

window.addEventListener("scroll", (e) => {
  e.preventDefault()
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
