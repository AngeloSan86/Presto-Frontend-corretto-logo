fetch(`./annunci.json`).then((response)=> response.json() ).then((data)=> {

    data.sort( (a,b) => a.price - b.price );
    
    let radioWrapper= document.querySelector(`#radioWrapper`);

    let cardWrapper= document.querySelector(`#cardWrapper`);
    
    function radioCreate(){
        let categories = data.map( (annuncio)=> annuncio.category );
        
        let uniqueCategories = Array.from(new Set(categories));
        
        uniqueCategories.forEach( (category)=>{
            let div = document.createElement(`div`);
            div.classList.add(`form-check`);
            div.innerHTML = `
            <input class="form-check-input" type="radio" name="categories" id="${category}">
            <label class="${category}" for="flexRadioDefault1">
                ${category}
             </label>
             `;
            radioWrapper.appendChild(div);
        });
        
        
    }
    
    radioCreate();

    function truncateWord(string){
        if(string.length > 10){
            return string.split(` `)[0] + `\n...`;
        }else{
            return string;
        }

    }


    function showCards(array){
        cardWrapper.innerHTML = ``;
        array.forEach( (annuncio)=>{
            let div = document.createElement(`div`);
            div.classList.add(`card-custom`);
            div.innerHTML = `
                <p class="h2 text-center mt-2" title="${annuncio.name}">${truncateWord(annuncio.name)}</p>
                <p class="h4 text-center">${annuncio.category}</p>
                <img src="${annuncio.img}" alt="${annuncio.altDescription}" class="img-fluid img-card">
                <p class="lead text-center">€ ${annuncio.price}</p>
            `;
            cardWrapper.appendChild(div);

        } );
    }

    showCards(data);

    let radioButtons = document.querySelectorAll(`.form-check-input`);

    function filterByCategory(array){

        let categoria = Array.from( radioButtons ).find( (button)=> button.checked).id;

        if(categoria != `All`){
            let filtered = array.filter( (annuncio)=> annuncio.category == categoria );

            return filtered;
        }else{
            return array;
        }



    }

    

    radioButtons.forEach( (button)=> {
        button.addEventListener(`click`, ()=>{
            setPriceInput();
            globalFilter();

        })

    });


    let priceInput = document.querySelector(`#priceInput`);
    let priceValue = document.querySelector(`#priceValue`);
    


    function setPriceInput(){
        let prices = filterByCategory(data).map( (annuncio)=> +annuncio.price );
        prices.sort( (a,b)=> a-b );
        let maxPrice = Math.ceil(prices.pop());

        priceInput.max = maxPrice;
        priceInput.value = maxPrice;
        priceValue.innerHTML = maxPrice;

    
    }

    setPriceInput();

    function filterByPrice(array){
        let filtered = array.filter( (annuncio)=> +annuncio.price <= priceInput.value );
        return filtered
    }

    priceInput.addEventListener( `input` , ()=>{
        priceValue.innerHTML = priceInput.value;
        globalFilter();
    } );


    let wordInput = document.querySelector(`#wordInput`);

    function filterByWord(array){
        let filtered = array.filter( (annuncio)=> annuncio.name.toLowerCase().includes(wordInput.value.toLowerCase()) );

        return filtered;

    }

    wordInput.addEventListener(`input`, ()=>{
        globalFilter();

    })


    function globalFilter(){
        
        let filteredByCategory = filterByCategory(data);
        let filteredByPrice = filterByPrice(filteredByCategory);
        let filteredByWord = filterByWord(filteredByPrice);

        showCards(filteredByWord);

    }
    
});