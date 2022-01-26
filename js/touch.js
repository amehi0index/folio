const navBurger= document.querySelector(".navbar-burger")
const projectDescriptions = document.querySelectorAll(".projects-description")

//Nav-burger
navBurger.addEventListener("touchstart", touchStart)
navBurger.addEventListener("touchmove", touchMove)
navBurger.addEventListener("touchend", touchEnd)

function touchStart() {
   navBurger.classList.add("navbar-burger-touch")
}

function touchEnd() {
   navBurger.classList.remove("navbar-burger-touch")
   console.log("remove")
}

function touchMove() {
    console.log("move")
}


