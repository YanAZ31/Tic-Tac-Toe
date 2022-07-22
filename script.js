var jogador = null
var jogadorSelecionado = document.getElementById("jogador-selecionado")
var vencedorSelecionado = document.getElementById("vencedor-selecionado")
var vencedorAtual = null
var quadrados = document.getElementsByClassName("quadrado")
var arr = Array.from(quadrados)
var pontoX = 0
var pontoY = 0
var placar = document.querySelector(".live-placar")
function mudarJogador(valor){

    let jogadorA = valor;
     jogadorSelecionado.innerHTML = jogadorA
    jogador = jogadorA    
 
 }

mudarJogador("X")

function selecao (id){

    if (vencedorAtual !== null){
        return
    }
    var quadrado = document.getElementById(id)

    if (quadrado.innerHTML !="Y"){
        return  
    }

    quadrado.innerHTML = jogador
    quadrado.style.color = "black"


    if (jogador == "X"){

        jogador = "O"
    }

    else{

        jogador = "X"
    }
  
    mudarJogador(jogador)  
    vitoria()
    
   
}


function vitoria (){
   if(checaSequencia(arr[0],arr[1],arr[2])){
       mudaCor(arr[0],arr[1],arr[2])
       vencedor(arr[0])
       return 
   }
   else if(checaSequencia(arr[3],arr[4],arr[5])){
    mudaCor(arr[3],arr[4],arr[5])
    vencedor(arr[3])
    
    return 
}
else if(checaSequencia(arr[6],arr[7],arr[8])){
    mudaCor(arr[6],arr[7],arr[8])
    vencedor(arr[6])
    return 
}
else if(checaSequencia(arr[0],arr[3],arr[6])){
    mudaCor(arr[0],arr[3],arr[6])
    vencedor(arr[6])
    return 
}
else if(checaSequencia(arr[1],arr[4],arr[7])){
    mudaCor(arr[1],arr[4],arr[7])
    vencedor(arr[7])
    return 
}
else if(checaSequencia(arr[2],arr[5],arr[8])){
    mudaCor(arr[2],arr[5],arr[8])
    vencedor(arr[5])
    return 
}

else if(checaSequencia(arr[2],arr[4],arr[6])){
    mudaCor(arr[2],arr[4],arr[6])
    vencedor(arr[2])
    return 
}
else if(checaSequencia(arr[0],arr[4],arr[8])){
    mudaCor(arr[0],arr[4],arr[8])
    vencedor(arr[0])
}





}

function checaSequencia(quadrado1, quadrado2, quadrado3){
    var igual = false

    if(quadrado1.innerHTML !== "Y"){

        if( quadrado1.innerHTML == quadrado2.innerHTML && quadrado2.innerHTML == quadrado3.innerHTML){
            igual = true
            return igual
         }
    
    }
  
    }
 
function vencedor (quadrado){
    vencedorSelecionado.innerHTML = quadrado.innerHTML
    vencedorAtual = quadrado.innerHTML
    
    if(vencedorAtual === "X"){
        pontoX += 1
    }
    else if(vencedorAtual ==="O"){
        pontoY += 1
    }

    arr.forEach((item)=>{
        item.classList.remove("animated")
        item.classList.remove("flip")
    })
  
   
    placar.innerHTML = ` <i class="fa-solid fa-x"></i> ${pontoX} x ${pontoY} <i class="fa-solid fa-circle-dot"></i></i> `
    placar.classList.add("animated")
    placar.classList.add("fadeInUp")
}



function mudaCor(quadrado1, quadrado2, quadrado3){
    quadrado1.style.backgroundColor = "#0f0"
    quadrado2.style.backgroundColor = "#0f0"
    quadrado3.style.backgroundColor = "#0f0"
}

function restart(){
    vencedorAtual = null
    vencedorSelecionado.innerHTML = ""
    arr.forEach(function(item,index){
        item.innerHTML = "Y"
        item.style.color = "#eee"
        item.style.backgroundColor = "#eee"
        placar.classList.remove("animate")
        placar.classList.remove("fadeInUp")
        arr.forEach((item)=>{
            item.classList.add("animated")
            item.classList.add("flip")
        })


    })
}


