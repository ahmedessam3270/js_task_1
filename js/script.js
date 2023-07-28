const list = document.querySelectorAll(".card-body button")

const content = document.querySelector("#content")

const btn1 = document.querySelector("#btn1")

const price = document.querySelector("#price")

let totalPrice = 0



list.forEach(function(item){
    item.addEventListener("click" ,function(){
        content.innerHTML += `<p class="col-md-3 phone-name"><i class="fas fa-mobile-alt"></i>&nbsp;${item.value}</p>`
        totalPrice += parseInt(item.getAttribute("price"))
        if (content.innerHTML){
            btn1.style.display = "block"
        }
    } )
})


btn1.addEventListener("click" ,function(){
    price.innerHTML = `<span class="total-price">${totalPrice} LE</span>`
})
