// SNEAK PEEK //

// CONSTANTES
const imgAll = [
    ['media/story_one.jpg', 'media/webdesign_two.jpg', 'media/story_three.jpg', 'media/story_four.jpg', 'media/webdesign_one.jpg'],
    ['media/creative_one.jpg', 'media/creative_six.jpg', 'media/creative_three.jpg', 'media/creative_four.jpg', 'media/creative_five.jpg'],
    ['media/branding_one.jpg', 'media/branding_two.jpg', 'media/branding_three.jpg']
];

const loadingTime = 3000;
const carousels = document.getElementsByClassName('carousel');

// VARIABLES + FUNCIONES + ASIGNACIONES
for (let i = 0; i < carousels.length; i++) {
    
    // VARIABLES
    let carousel = carousels[i];
    let img = imgAll[i]; 
    let imgNow = 0;
    let interval = undefined;

    // FUNCIONES
    function imgChange() {
        carousel.style.opacity = '0';
        setTimeout(imgChangeHandler, 300);
    }

    function imgChangeHandler() {
        imgNow++;
        if (imgNow >= img.length) {
            imgNow = 0;
        }
        carousel.style.backgroundImage = `url(${img[imgNow]})`;
        carousel.style.opacity = '1';
    }

    function startInterval() {
        interval = setInterval(intervalHandler, loadingTime);
    }

    function intervalHandler() {
        imgChange();
    }

    function imgStop() {
        clearInterval(interval);
    }

    function mouseEnterHandler() {
        imgStop();
    }

    function mouseLeaveHandler() {
        startInterval();
    }

    // ASIGNACIONES
    carousel.style.backgroundImage = `url(${img[imgNow]})`;

    carousel.addEventListener('mouseenter', mouseEnterHandler);
    carousel.addEventListener('mouseleave', mouseLeaveHandler);

    startInterval();
}

// ------- //

//Menu - PopUp//

// CONSTANTES
const menuDisplay = document.getElementById('menu');
const menuPopup = document.getElementById('menu-popup');

// FUNCIONES
function menuClickHandler() {
    menuPopup.classList.add('open');
    menuPopup.innerHTML = `
        <button onclick="closeMenu()" class="btn"><i class="ri-close-line"></i></button>
        <nav>
            <ul class="flex-column">
                <li>
                    <a href="index.html">
                        <img class="logo" src="media/logo_color.svg" alt="Ojira logo" loading="lazy">
                    </a>
                </li>
                <li><a class="link" href="index.html">HOME</a></li>
                <li><a class="link" href="#about">ABOUT</a></li>
                <li><a class="link" href="portfolio.html">PORTFOLIO</a></li>
                <li><a class="link" href="#contact">CONTACT</a></li>
            </ul>
        </nav>
    `;
}

function closeMenu() {
    menuPopup.classList.remove('open');
    menuPopup.innerHTML = "";
}

// ASIGNACIONES
menuDisplay.addEventListener('click', menuClickHandler);

//----------//