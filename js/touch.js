const navBurger= document.querySelector(".navbar-burger")
const projectDescriptions = document.querySelectorAll(".projects-description")


//Projects for mobile view
projectDescriptions.forEach(description => {
    description.addEventListener("touchstart", pressingDown, false)
    description.addEventListener("touchend", notPressingDown, false)
})

function pressingDown(e) {
    e.preventDefault()
    e.target.classList.add("projects-description-touch")
}

function notPressingDown(e) {
  e.preventDefault();  e.target.classList.remove("projects-description-touch")
}

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


