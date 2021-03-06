// PreLoader Time Out 4s //
function preloadInit(){
    const preload = document.querySelector(".preloader");
    const body = document.querySelector("body");
    const main = document.querySelector(".main");
    setTimeout(() => {
        preload.style.opacity = 0;
        preload.style.zIndex = -30;
        body.style.overflowY = 'visible';
        main.style.opacity = 1;
    }, 40);
}
//-------------------------------------------//

// Click Event for Changing Language //
function langClick(){
    document.getElementById('lang-button').classList.toggle('active-lang');
    document.getElementById('vn-button').classList.toggle('langdown');
}
//-------------------------------------------//

// Click Event for Search Area //
function searchClick(){
    document.querySelector("#input-search").classList.toggle("search-active");
}
//-------------------------------------------//

// Change Product's Price When Change The Options
function onprice(){
    var edition = document.getElementById('edition');
    if(edition.value == 'standard'){
        document.getElementById('bill').value = 39.99 + '$';
    }
    else if(edition.value == 'gold'){
        document.getElementById('bill').value = 69.99 + '$';
    }
    else if(edition.value == 'deluxe'){
        document.getElementById('bill').value = 50.99 + '$';
    }
    else{
        document.getElementById('bill').value = 29.99 + '$'
    }
}
//-------------------------------------------//
AOS.init(); // AOS Initialization
preloadInit(); // Preloader Initialization




        

