function init(){
    const preload = document.querySelector(".preloader");
    const body = document.querySelector("body");
    setTimeout(() => {
        preload.style.opacity = 0;
        preload.style.zIndex = -30;
        body.style.overflowY = 'visible';
    }, 5000);
}
init();
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


function langClick(){
    document.getElementById('lang-button').classList.toggle('active-lang');
    document.getElementById('vn-button').classList.toggle('langdown');
    
}
