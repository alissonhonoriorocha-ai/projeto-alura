// Captura dos elementos da interface via DOM
const selectIrrigacao = document.getElementById('select-irrigacao');
const selectPragas = document.getElementById('select-pragas');
const selectSolo = document.getElementById('select-solo');

const txtFinanceiro = document.getElementById('txt-financeiro');
const txtSustentavel = document.getElementById('txt-sustentavel');
const mensagemFeedback = document.getElementById('mensagem-feedback');

// Função principal que calcula o equilíbrio do ecossistema agrícola
function calcularImpacto() {
    // Valores iniciais padrão
    let lucro = 60000;
    let sustentabilidade = 50;

    // 1. Verificação da Irrigação
    if (selectIrrigacao.value === 'sustentavel') {
        lucro += 15000;         // Economia a longo prazo
        sustentabilidade += 20;  // Preservação de recursos hídricos
    } else {
        lucro -= 5000;          // Desperdício gera custos operacionais altos
        sustentabilidade -= 10;
    }

    // 2. Verificação do Controle de Pragas
    if (selectPragas.value === 'sustentavel') {
        lucro += 10000;         // Valorização do produto limpo no mercado
        sustentabilidade += 20;  // Proteção de polinizadores (abelhas)
    } else {
        lucro += 5000;          // Resultado imediato, mas esgota biodiversidade
        sustentabilidade -= 15;
    }

    // 3. Verificação do Manejo de Solo
    if (selectSolo.value === 'sustentavel') {
        lucro += 20000;         // Solo rico produz mais sacas por hectare
        sustentabilidade += 10;  // Evita erosão e sequestra carbono
    } else {
        lucro -= 10000;         // Degradação gera gastos futuros com fertilizantes
        sustentabilidade -= 15;
    }

    // Garantir limites lógicos para exibição na tela
    if (sustentabilidade > 100) sustentabilidade = 100;
    if (sustentabilidade < 0) sustentabilidade = 0;

    // Atualização dos dados no painel visual
    txtFinanceiro.textContent = `R$ ${lucro.toLocaleString('pt-BR')}`;
    txtSustentavel.textContent = `${sustentabilidade}%`;

    // Atualização do diagnóstico textual da banca
    atualizarFeedback(sustentabilidade);
}

// Função auxiliar que gera as mensagens com base no desempenho ecológico
function atualizarFeedback(nivelSustentabilidade) {
    if (nivelSustentabilidade >= 90) {
        mensagemFeedback.textContent = "Excelente! Sua fazenda ating
