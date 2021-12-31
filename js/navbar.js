const navSlide = () => {
    const burger = document.querySelector('.navbar-burger');
    const navMenu = document.querySelector('.navbar-menu');
    
    const navbarLinks = document.querySelectorAll('.navbar-menu li');
    const navbar = document.querySelector('nav');

    let showMenu = false 

    burger.addEventListener('click', () => {
       if (!showMenu) {
            navMenu.classList.add ('navbar-active');
            animateLinks(navbarLinks);
            burger.classList.add('toggle');
            //navbar.classList.add('show-bg');
            showMenu = true 

            // Close menu using links
            navbarLinks.forEach((link)  => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove ('navbar-active');
                    burger.classList.remove('toggle');
                    //navbar.classList.remove('show-bg');
                })
            })
        }else{
            navMenu.classList.remove ('navbar-active');
            animateLinks(navbarLinks);
            burger.classList.remove('toggle');
           // navbar.classList.remove('show-bg');
            showMenu =false
        }
    })
}

function animateLinks (navbarLinks) {
    navbarLinks.forEach((link, index)  => {
        if(link.style.animation) {
            link.style.animation =''
        }
        else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
        }
    })
}

navSlide();