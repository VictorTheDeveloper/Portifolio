var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
     document.querySelector(".container").classList.toggle("show-menu");
});

document.querySelector('#qtde').addEventListener("change", atualizaPreco)
document.querySelector('#js').addEventListener("change", atualizaPreco)
document.querySelector('#layout-sim').addEventListener("change", atualizaPreco)
document.querySelector('#layout-nao').addEventListener("change", atualizaPreco)
document.querySelector('#prazo').addEventListener("change", function () {
     const prazo = document.querySelector('#prazo').value
     document.querySelector("label[for=prazo]").innerHTML = 'Prazo: ' + prazo + ' semanas' 
     atualizaPreco()
})


function atualizaPreco(){
     const qtde = document.querySelector('#qtde').value 
     let preco = qtde * 100;
     //document.querySelector("#preco").innerHTML = "R$ " + preco

     const temJS = document.querySelector('#js').checked 
     if(temJS) preco *= 1.1

     

     const incluiLayout = document.querySelector('#layout-sim').checked
     if(incluiLayout) {
          preco = preco + 500;
     }

     const prazo = document.querySelector('#prazo').value
     let taxaUrgencia = 1 - prazo*0.1;
     preco = preco + (preco*taxaUrgencia)

     document.querySelector('#preco').innerHTML = 'R$ ' + preco.toFixed(2)
}