const loginAccount = document.getElementById("loginAccount")
loginAccount.addEventListener('click', loginpage)

const divL1 = document.createElement("div")
const divL2 = document.createElement("div")
const divL3 = document.createElement("div")

const formL = document.createElement("form")

const h3L = document.createElement("h3")

const inputL1 = document.createElement("input")
const inputL2 = document.createElement("input")

const buttonL = document.createElement("button")

const pTagL1 = document.createElement("p")
const pTagL2 = document.createElement("p")

divL1.classList = "col-md-4 col-sm-12 offset-4 card card-body mt-5 mb-5"
divL2.classList = "form-group"
divL3.classList = "offset-5 mt-3"
buttonL.addEventListener('click', validateloginForm)

formL.name = "form"
buttonL.id = "login"
buttonL.type = "submit"

button.classList = "btn btn-outline-dark"

h3L.textContent = "Input Form"
label1.textContent = "Name:"
label2.textContent = "Password.:"

buttonL.textContent = "LoginAccount"


div1L.appendChild(form)
formL.appendChild(div2)
div2L.appendChild(h3L)
div2L.appendChild(label1L)
div2L.appendChild(input1L)
div2L.appendChild(pTag1L)
div2L.appendChild(label2L)
div2L.appendChild(input2L)
div2L.appendChild(pTag2L)




div2L.appendChild(div3L)

div3L.appendChild(buttonL)

function loginpage() {
    id1.innerHTML = ""
    id1.appendChild(div1L)
}

function validateloginForm() {
    if (input1L.value.trim() === "" && input2L.value.trim() === "") {
        input1L.style.border = "1px solid red"
        pTag1L.style.color = "red"
        pTag1L.style.fontSize = "10px"
        pTag1L.innerHTML = "Username is required"

        input2L.style.border = "1px solid red"
        pTag2L.style.color = "red"
        pTag2L.style.fontSize = "10px"
        pTag2L.innerHTML = "Mobno. is required"

      
        return false

    } if (input1.value.trim().length < 3) {
        input1L.style.border = "1px solid red"
        pTag1L.style.color = "red"
        pTag1L.style.fontSize = "10px"
        pTag1L.innerHTML = "Username is invalid"
        return false


    } if (input2.value.trim().length == "") {
        input2L.style.border = "1px solid red"
        pTag2L.style.color = "red"
        pTag2L.style.fontSize = "10px"
        pTag2L.innerHTML = "Mobno. is required"

        pTag1.innerHTML = "please Enter Password"
        return false


    }  
    
    
    
   
    form.reset()

}


















