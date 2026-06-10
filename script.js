document.getElementById('btn-perguntar').addEventListener('click', enviarPergunta);
document.getElementById('input-pergunta').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') enviarPergunta();
});

function enviarPergunta() {
    const input = document.getElementById('input-pergunta');
    const chatBox = document.getElementById('chat-box');
    const textoUsuario = input.value.trim().toLowerCase();

    if (textoUsuario === "") return;

    // Adiciona a pergunta do usuário na tela
    chatBox.innerHTML += `<p><strong>Você:</strong> ${input.value}</p>`;
    
    // Resposta padrão caso não encontre palavra-chave
    let respostaIA = "Interessante! Para garantir a sustentabilidade no campo, lembre-se de balancear o uso dos recursos hídricos, preferir defensivos biológicos e proteger a estrutura mecânica do solo.";

    // Verificação de palavras-chave para respostas personalizadas
    if (textoUsuario.includes("gotejamento") || textoUsuario.includes("irrigação") || textoUsuario.includes("água")) {
        respostaIA = "O gotejamento inteligente aplica água direto na raiz da planta, reduzindo o desperdício por evaporação em até 50% comparado à aspersão comum!";
    } else if (textoUsuario.includes("rotação") || textoUsuario.includes("solo") || textoUsuario.includes("plantio direto")) {
        respostaIA = "A rotação de culturas e o plantio direto evitam a erosão do solo, mantêm os nutrientes ativos e diminuem a necessidade de adubos químicos pesados.";
    } else if (textoUsuario.includes("pragas") || textoUsuario.includes("defensivos") || textoUsuario.includes("biológico")) {
        respostaIA = "O Manejo Integrado de Pragas (MIP) utiliza predadores naturais e armadilhas tecnológicas, combatendo os insetos nocivos sem agredir polinizadores como as abelhas.";
    }

    // Adiciona a resposta da IA simulada
    setTimeout(() => {
        chatBox.innerHTML += `<p style="color: #1b5e20;"><strong>Agro-IA:</strong> ${respostaIA}</p>`;
        chatBox.scrollTop = chatBox.scrollHeight; // Rola o chat para baixo
    }, 500);

    input.value = ""; // Limpa a barra de texto
}
