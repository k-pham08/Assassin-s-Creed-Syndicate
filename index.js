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

