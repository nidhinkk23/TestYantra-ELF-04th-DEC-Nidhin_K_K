const body = document.getElementById("body")
body.style.backgroundColor = 'rgb(255,0,0)'


const button = document.getElementById("btn")
button.addEventListener('click', changeColor)

function changeColor() {
    console.log(body.style.backgroundColor);
    if (body.style.backgroundColor === 'rgb(255,0,0)') {
        body.style.backgroundColor = 'rgb(0,0,255)'
    }
    if (body.style.backgroundColor === 'rgb(0,0,255)') {
        body.style.backgroundColor = 'rgb(0,0,255)'
    }
   

}