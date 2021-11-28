const hamburgerBtn = document.querySelector(".hamburgerBtn")
const overlay = document.querySelector(".overlay")
const active = document.querySelector(".active")
const navLinks = document.querySelectorAll(".nav-link")
const lockscreen = document.querySelector('.lockscreen')
const btnX = document.querySelector('.btnX')
const reset = document.querySelector('.reset')
const backToTop = document.querySelector('.back-to-top')


hamburgerBtn.addEventListener("click", () => {
  overlay.classList.toggle("active")
  document.body.classList.toggle("lockscreen")
  document.body.classList.toggle("btnX")
})

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    overlay.classList.remove("active");
    document.body.classList.remove("lockscreen")
    document.body.classList.remove("btnX")
  })
})

reset.addEventListener("click", () => {
  overlay.classList.remove("active")
  document.body.classList.remove("lockscreen")
  document.body.classList.remove("btnX")
})

backToTop.addEventListener("click", () => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
});






