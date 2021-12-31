const links = document.querySelectorAll(".hero ul a");
const pItems = document.querySelectorAll(".projects-item");
const descriptions = document.querySelectorAll(".projects-description");
const sections = document.querySelectorAll("section");
const scrollToTopBtn = document.querySelector("#top")
const mainMenu = document.querySelector('.menu-main');
const mainMenuLinks = document.querySelectorAll('.menu-main li')
const contactForm = document.querySelector('.contact-form')
let selected;

scrollToTopBtn.addEventListener('click', scrollToTop)
contactForm.addEventListener('submit', clearContactForm)

//Add or remove current class from menu item
for (const link of mainMenuLinks) {

  link.addEventListener("click", () => {
    for (const link of mainMenuLinks) {
      link.classList.remove('current')
    }

    link.classList.add('current')
  })
}

sections.forEach(section => {
  section.scrollTo(0, 1000)
})

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop

  scroll({
    top: offsetTop
  });
}

function scrollToTop (e) {
  window.scrollTo({
    top: 0,
    left: 100
  })
}

//Clear contact form
function clearContactForm (){
  contactForm.reset()
}

