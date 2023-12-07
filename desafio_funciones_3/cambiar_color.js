/**  guarde dentro de una variable global
un color dependiendo de la letra del teclado 
presionada. */
var color;

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        /* Cambiar a pink */
        color= document.getElementById('key').style.backgroundColor ='pink'
    
        } else if (event.key === 's') {
        /* Cambiar a orange */
        color= document.getElementById('key').style.backgroundColor ='orange'
    
        } else if(event.key ==='d'){
        /* Cambiar a blueLight */
        color= document.getElementById('key').style.backgroundColor ='aqua'
        }  
        
    })

const container = document.getElementById("container");
const newDiv = document.createElement("div")

document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
        /* Cambiar a purple */
        newDiv.style="background-color: purple; border: solid 5px black; height: 200px; width: 200px"
        
    } else if (event.key === 'w') {
        /* Cambiar a grey */
        newDiv.style="background-color: grey; ; border: solid 5px black;height: 200px; width: 200px"

    } else if(event.key ==='e'){
        /* Cambiar a brown */
        newDiv.style="background-color: brown;; border: solid 5px black; height: 200px; width: 200px"
    }  
    })

container.appendChild(newDiv)