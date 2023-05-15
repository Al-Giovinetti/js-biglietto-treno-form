const inputKm =document.getElementById("user-km");
const inputAge =document.getElementById("user-age");

const button = document.querySelector("button");

console.log(inputKm)
console.log(inputAge)

button.addEventListener("click",
    function(){
        let price =inputKm.value * 0.233

        if (inputAge.value < 18){
            price=price - (( price / 100) * 19.4)
            console.log(price)
            console.log("minorenne")
        }else if(inputAge.value > 65){
            price=price - (( price / 100) * 37.7)
            console.log(price)
            console.log("over 65")
        }else{
            console.log(price)
            console.log("normale")
            
        }
    }

);
