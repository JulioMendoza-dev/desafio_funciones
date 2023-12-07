/** Dentro del script agrega el evento para que al hacer click a cada uno de los
divs, este cambie de color al color negro. Utiliza addEventListener para
agregar el evento.
 */
var blue = document.getElementById('bg_blue')
var red = document.getElementById('bg_red')
var green = document.getElementById('bg_green')
var yellow = document.getElementById('bg_yellow')

red.addEventListener("click", () => red.style.backgroundColor = 'black')
blue.addEventListener("click", () => blue.style.backgroundColor = 'black')    
green.addEventListener("click", () => green.style.backgroundColor = 'black')
yellow.addEventListener("click", () => yellow.style.backgroundColor = 'black')

