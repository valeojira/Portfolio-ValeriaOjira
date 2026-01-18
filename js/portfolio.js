//Design - Social Media Portfolio//

const imgAll = [
    ['media/story_one.jpg', 'media/story_two.jpg', 'media/story_three.jpg', 'media/story_four.jpg', 'media/story_five.jpg', 'media/story_six.jpg'],   // Fotos primer carousel
    ['media/post_one.jpg', 'media/post_three.jpg', 'media/post_five.jpg'], // Fotos segundo carousel
    ['media/post_two.jpg', 'media/post_four.jpg', 'media/post_six.jpg']    // Fotos tercer carousel
];

const loadingTime = 3000;

const carousels = document.getElementsByClassName('carousel');

for (let i = 0; i < carousels.length; i++) {

    let carousel = carousels[i];
    let img = imgAll[i];
    let imgNow = 0;
    let interval = undefined;


    carousel.style.backgroundImage = `url(${img[imgNow]})`;

    function imgChange() {
        carousel.style.opacity = '0';

        setTimeout(() => {
            imgNow++;
            if (imgNow >= img.length) {
                imgNow = 0;
            }
            carousel.style.backgroundImage = `url(${img[imgNow]})`;
            carousel.style.opacity = '1';

        }, 300);
    }

    function startInterval() {
        interval = setInterval(() => {
            imgChange();
        }, loadingTime);
    }

    function imgStop() {
        clearInterval(interval);
    }


    carousel.addEventListener('mouseenter', () => {
        imgStop();
    });

    carousel.addEventListener('mouseleave', () => {
        startInterval();
    });


    startInterval();
}

//----------//

//Marketing and Communication - Branding//

const brandingGrid = document.getElementById('branding__grid')

const brandingPopup = document.getElementById('branding-popup')

const branding = [
    { img: 'media/caradeltiempo.jpg', imgwebp:'media/caradeltiempo.webp', name: 'La Cara del Tiempo', description: 'Transmedia project, for the promotion of a documentary about 3 women of different ages embracing their bodies. Project included the design of the visual aspects of the project in multiple platforms.' },
    { img: 'media/netflix.jpg', imgwebp:'media/netflix.webp', name: 'Dare to explore', description: 'Marketing strategy and campaign proposal to make Netflix viewers engage with mmore foreign content. Selected for the "D&AD Blood Awards"' },
    { img: 'media/pingringo.jpg', imgwebp:'media/pingringo.webp', name: 'Pinche Gringo', description: 'Marketing strategy for "Pinche Gringo" a BBQ restaurant. Proposal included the creation of web banners and content.' },
    { img: 'media/penguin.jpg', imgwebp:'media/penguin.webp', name: 'Penguin x Google Maps', description: 'Product proposal for "Penguin Books Challenge". The proposal included a collaboration between Penguin & Google Maps to help and encourage the user to go outside and find new spots to read' }
]

branding.forEach(project => {
    let createProject = document.createElement('div')
    createProject.innerHTML = `<img src="${project.img}"> <span></span>`

    createProject.addEventListener('click', () => {
        brandingPopup.classList.add('open')
        
        brandingPopup.innerHTML = `
        <button onclick="closePopup()" class="btn"><i class="ri-close-line"></i></button>
    
        <section class="design section">

            <div class="design__block flex-column">

                <div class="web-design__content flex-row">

                    <div class="web-design__text flex-column">
                        <h4 class="text--sm">${project.name}</h4>
                        <p class="body">${project.description}</p>
                    </div>

                    <picture>
                               <picture>
                               <source srcset="${project.imgwebp}" type="image/webp">
                               <img src="${project.img}" alt="${project.name}">
                               </picture>
                    </picture>

                </div>

            </div>
        </section>
    `

    })
    brandingGrid.appendChild(createProject)
})

function closePopup() {
    brandingPopup.classList.remove('open')
    brandingPopup.innerHTML = "";
}

//----------//

//Menu - PopUp//

const menuDisplay = document.getElementById('menu')

const menuPopup = document.getElementById('menu-popup')

menuDisplay.addEventListener('click', () => {

    menuPopup.classList.add('open')
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
                <li><a class="link" href="index.html#about">ABOUT</a></li>
                <li><a class="link" href="portfolio.html">PORTFOLIO</a></li>
                <li><a class="link" href="index.html#contact">CONTACT</a></li>
            </ul>
        </nav>
    </div>
    `

})

function closeMenu() {
    menuPopup.classList.remove('open')
    menuPopup.innerHTML = "";
}

//----------//
