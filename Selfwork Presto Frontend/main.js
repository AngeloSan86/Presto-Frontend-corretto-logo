let navbar = document.querySelector(`#navbar`);
let links = document.querySelectorAll(`.nav-link`);

let logosx = document.querySelector(`#logosx`);
let logodx = document.querySelector(`#logodx`);

let nav = document.querySelector(`#navbar`);
let collapse = document.querySelector(`#collapse`);

let menuText = document.querySelector(`#menuCascata`);

let check = false;

let menuAperto = false;

let prodottiVendutiNumber = document.querySelector(`#prodottiVendutiNumber`);

let clientiSoddisfattiNumber = document.querySelector(`#clientiSoddisfattiNumber`);

let consegneGiornaliereNumber = document.querySelector(`#consegneGiornaliereNumber`);

let confirm = true;

let observer = new IntersectionObserver((entries)=>{
    
    entries.forEach((entry)=> {
        if(entry.isIntersecting && confirm == true){
            confirm = false;
            createInterval(prodottiVendutiNumber, 1526, 10);
            createInterval(clientiSoddisfattiNumber, 256, 40);
            createInterval(consegneGiornaliereNumber, 250, 30);
        }
    });
    
});

window.addEventListener(`scroll`, ()=>{
    
    let scrolled = window.scrollY;
    
    if(scrolled > 0){ 
        
        navbar.classList.remove(`bg-marrone`);
        navbar.classList.add(`bg-beige`);
        
        collapse.classList.remove(`bg-marrone`);
        collapse.classList.add(`bg-beige`);
        
        
        navbar.style.height = `90px`;
        
        links.forEach( (link)=>{
            link.style.color = 'var(--marrone)';
        });
        
        logosx.src = "http://127.0.0.1:5500/media/logoMarrone.png";
        logodx.src = "http://127.0.0.1:5500/media/logoMarroneFlip.png";
        
        logosx.style.transform = `scale(${1})`;
        logodx.style.transform = `scale(${1})`;
        logodx.style.margin = '0px';
        logosx.style.margin = '0px';
        
    }else{   
        
        navbar.classList.remove(`bg-beige`);
        navbar.classList.add(`bg-marrone`);
        
        collapse.classList.remove(`bg-beige`);
        collapse.classList.add(`bg-marrone`);
        
        navbar.style.height = `180px`;
        
        links.forEach( (link)=>{
            link.style.color = 'var(--beige)';
        });
        
        logosx.src = "http://127.0.0.1:5500/media/logoBeige.png";
        logodx.src = "http://127.0.0.1:5500/media/logoBeigeFlip.png";
        
        logosx.style.transform = `scale(${1.7})`;
        logodx.style.transform = `scale(${1.7})`;
        logodx.style.margin = '30px';
        logosx.style.margin = '30px';
        
        
        
    }
    
} );

menuText.addEventListener(`click`, ()=>{
    
    menuAperto = !menuAperto;
    if(menuAperto == true)
        {
        menuText.textContent = "X";
    }
    else {
        menuText.textContent = "";
        setTimeout(() => {
            menuText.textContent = "Menu";
        }, 300); // Cambia il testo a "Menu" dopo 500 millisecondi (0.5 secondi)
    }
});

function createInterval(element, maxNumber, intervalTime){
    let counter =0;
    
    let interval = setInterval(() => {
        if(counter < maxNumber){
            counter++;
            element.innerHTML = counter;
        }else{
            clearInterval(interval);
        }
    }, intervalTime);
    
    setTimeout(() => {
        confirm = true;
    }, 18000);
    
}

observer.observe(consegneGiornaliereNumber);


let reviews = [
    {user : `Pippo`, description: `Sito bellissimissimo!!!`, rank : 5},
    {user : `Iano`, description: `Sito fatto male...`, rank : 2},
    {user : `Carmelo`, description: `Bello ma non troppo`, rank : 4},
    {user : `Ciccia`, description: `Sito numero 1! Infatti lascio 1 stella!`, rank : 1},
    {user : `Pina`, description: `Non so che sito sia...`, rank : 0},
    {user : `Ugo`, description: `Vendete anche patate?`, rank : 5}
]

let swiperWrapper = document.querySelector(`.swiper-wrapper`);

reviews.forEach((recensione)=>{
    let div = document.createElement(`div`);
    div.classList.add(`swiper-slide`);
    div.innerHTML = `
    <div class="card-review">
        <p class="lead text-center">
           ${recensione.description}
        </p>
        <p class="h4 text-center">${recensione.user}</p>
        <div class="d-flex justify-content-center star">
            
         </div>
    </div>`;
    swiperWrapper.appendChild(div);
});

/*
<i class="fa-solid fa-star" style="color: #f5f5dc;"></i>
<i class="fa-solid fa-star" style="color: #f5f5dc;"></i>
<i class="fa-solid fa-star" style="color: #f5f5dc;"></i>
<i class="fa-solid fa-star" style="color: #f5f5dc;"></i>
<i class="fa-regular fa-star" style="color: #ffffdc;"></i>
*/ 

let stars = document.querySelectorAll(`.star`);

stars.forEach((star,index)=> {
    for(let i = 1; i <= reviews[index].rank; i++ ){
        let icon = document.createElement(`i`);
        icon.classList.add(`fa-solid`, `fa-star`);
        star.appendChild(icon);
    }
    
    let difference = 5-reviews[index].rank;
    
    for(let i = 1; i <= difference; i++ ){
        let icon = document.createElement(`i`);
        icon.classList.add(`fa-regular`, `fa-star`);
        star.appendChild(icon);
    }
    
})

//Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        
    },

    autoplay: {
        delay: 3000,
    },
});