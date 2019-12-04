const div = document.createElement("div")



function addCard(msg,image) {
    const div1 = document.createElement("div")


    const div2 = document.createElement("div")
    const div3 = document.createElement("div")

    const img = document.createElement("img")
    const p = document.createElement("p")


    div1.classList = " float-left mr-5 m-3"
    div2.classList = "card col-md-12  "
    div3.className = "card-body"

    div2.style.width = "18rem"

    img.className = "card-img-top"
    p.className = "card-text"

    div3.appendChild(p)
    div2.appendChild(img)
    div2.appendChild(div3)

    div1.appendChild(div2)
    div.appendChild(div1)
    img.src = image
    p.textContent = msg
    document.body.appendChild(div)



}

fetch('http://www.omdbapi.com/?s=%27america%27&apikey=7a488851')
.then(response => response.json())
.then(json => {
    let arr = []
    for (let i = 0; i < 9; i++) {
        console.log(json);
        console.log(json.Search);
        
        arr.push(json.Search[i])
        console.log(arr);


    }
    return arr
})
.then(json => {

    for (let i = 0; i < 9; i++) {

        addCard(json[i].Title,json[i].Poster)
    }

    const input = document.getElementById('input')
    input.addEventListener('keyup', search)

    function search() {



        for (let i = 0; i < 9; i++) {
           
            if (json[i].Title.startsWith(input.value.trim()) && input.value.trim().length != 0) {
                console.log(json[i].title,json[i].Poster);

                div.innerHTML = ""


                addCard(json[i].Title,json[i].Poster)

                

            }else if(input.value.trim().length == 0){
                
                div.innerHTML = "Type the Letter"

                
            }
            

        }
    }




}).catch(err => err)












