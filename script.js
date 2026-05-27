function mostrarMensagem(){
    alert("A sustentabilidade garante um futuro melhor para o planeta!");
}

function quiz(resposta){

    const resultado = document.getElementById("resultado");

    if(resposta === "b"){
        resultado.innerHTML = "✅ Correto! Plantar árvores ajuda o meio ambiente.";
        resultado.style.color = "green";
    }else{
        resultado.innerHTML = "❌ Errado! Precisamos preservar a natureza.";
        resultado.style.color = "red";
    }
}

let total = 0;

function plantar(){

    total++;

    document.getElementById("contador").innerHTML = total;
}
