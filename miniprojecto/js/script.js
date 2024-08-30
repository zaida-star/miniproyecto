let carros = ["bmw", "volvo","saab","ford","fiat","audi"]
let text = "";
for(let i = 0;i < carros.length; i++){
    text += '<img src = "img/' + carros[i] + '.png" width="100"></img>';   
}
document.getElementById("logos").innerHTML = text; 

let b1= document.getElementById("botonPush");
b1.onclick = funcionPush;
function funcionPush(e){
          carros.push("lexus");
          let text = "";
          for(let i = 0;i < carros.length; i++){
            text += '<img src = "img/' + carros[i] + '.png" width="100"></img>';   
        }
        document.getElementById("logos").innerHTML = text; 
}
