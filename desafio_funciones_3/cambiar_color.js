/**  guarde dentro de una variable global
un color dependiendo de la letra del teclado 
presionada. */
var color = document.getElementById('#key')

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    /* Cambiar a pink */
    key.addEventListener.style.backgroundColor='pink'

    } else if (event.key === 's') {
    /* Cambiar a orange */
    document.key.style.backgroundColor='orange';

    } else if(event.key ==='d'){
    /* Cambiar a blueLight */
    document.key.style.backgroundColor='blueLight';
    }        
})


var key = document.getElementById('#key') = color;