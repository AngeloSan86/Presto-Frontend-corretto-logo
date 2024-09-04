let opener = document.querySelector(`.opener`);
let circle = document.querySelector(`.circle`);

let staff = [
    {name: `Daenerys I Targaryen`,
        description: `La Regina Daenerys I Targaryen è la sorella minore di Rhaegar e Viserys Targaryen.`,
        url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpiQPv7GojxjWCQKtMl8b_PkSkxGr3qajqQ&s`
    },
    {name: `Jon Snow`,
        description: `Jon Snow, nato Aegon VI Targaryen, è il figlio di Lyanna Stark e Rhaegar Targaryen, Principe di Roccia del Drago e legittimo erede del Trono di Spade.`,
        url: `https://hips.hearstapps.com/elleit.h-cdn.co/assets/15/37/768x768/768x768-no-di-spade-jon-snow-19119027-1-ita-it-game-of-thrones-6-il-trono-di-spade-jon-snow-vivo-morto-o-jpg.jpg?resize=1200:*`
    },
    {name: `Sansa Stark`,
        description: `La Regina Sansa Stark è il capo della Casa Stark, lady di Grande Inverno e Regina del Nord.`,
        url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbqHnRgW6P0GSnbKEzXtxk6zCK2F-n1iAXZg&s`
    },
    {name: `Tyrion Lannister`,
        description: `Lord Tyrion Lannister è il terzogenito di lord Tywin Lannister e sua moglie Joanna, che morì di parto dandolo alla luce.`,
        url: `https://i.pinimg.com/736x/8b/6c/32/8b6c320d602f7fb4f565156fd1a1ce0c.jpg`
    },
];



staff.forEach( (character)=> {
    let div = document.createElement(`div`);
    div.classList.add(`moved`);
    div.style.backgroundImage = `url(${character.url})`;
    circle.appendChild(div);
    
});

let movedDivs = document.querySelectorAll(`.moved`);

let check = false;

opener.addEventListener(`click`, ()=>{
    
    if(check == false){
        check = true
        opener.style.transform = `rotate(405deg)`;
        
        movedDivs.forEach( (moved, i)=> {
            let angle = (360 * i) / movedDivs.length; 
            moved.style.transform = `rotate(${angle}deg) translate(150px) rotate(-${angle}deg`;
            
        });
    }else{
        let flipCard = document.querySelector(`.flip-card`);

            flipCard.classList.add(`d-none`);

        opener.style.transform = `rotate(0deg)`;
        
        
        
        movedDivs.forEach( (moved)=> {
            moved.style.transform = `rotate(0deg) translate(0px)`;
            
        });
        check = false;
    }
    
    let innerFace = document.querySelector(`.inner-face`); 
    let cardName = document.querySelector(`#cardName`); 
    let cardDescription = document.querySelector(`#cardDescription`); 

    
    movedDivs.forEach( (moved, i)=> {
        moved.addEventListener(`click`, ()=>{

            let flipCard = document.querySelector(`.flip-card`);

            flipCard.classList.remove(`d-none`);

            let char = staff[i];
            innerFace.style.backgroundImage = `url(${char.url})`;
            cardName.innerHTML = char.name;
            cardDescription.innerHTML = char.description;
        });
    });
});