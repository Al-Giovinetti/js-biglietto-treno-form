const inputKm = document.getElementById("user-km");
const inputAge = document.getElementById("user-age");

const inputName = document.getElementById("user-name")
const inputMail = document.getElementById("user-mail")

const button = document.querySelector("button");

button.addEventListener("click",
    function(){
        let price =inputKm.value * 0.233
        const outputPrice = document.querySelector('p');

        if (inputAge.value < 18){
            price= price - (( price / 100) * 19.4)
            console.log(price + " minorenne")
        }else if(inputAge.value > 65){
            price= price - (( price / 100) * 37.7)
            console.log(price + " over 65")
        }else{
            console.log(price + " normale")
        }

        outputPrice.innerHTML = "€" +  price.toFixed(2);
        document.getElementById("bis-username").innerHTML = " Nominativo passeggero : " + inputName.value
        document.getElementById("bis-km").innerHTML = "Il biglietto è per : " + inputKm.value+" km"
        document.getElementById("bis-age").innerHTML =  " L' età del passereo è :" + inputAge.value
        document.getElementById("bis-mail").innerHTML =  "L' email inserita è : " + inputMail.value


    }
);


