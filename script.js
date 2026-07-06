const botao = document.getElementById ("curtidas")
botao.addEventListener("click", aumentarcurtidas )

function aumentarcurtidas(){
    let curtida = document.querySelector("span") 
    curtida.textContent++
}



