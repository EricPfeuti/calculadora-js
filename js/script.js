// EXPLICAÇÃO REALIZADA POR MIM para ENTENDIMENTO FUTURO

// Obtém o elemento HTML com o ID "history" e armazena na variável `historyField`.
// Este campo exibirá o histórico das operações.
let historyField = document.getElementById("history");

// Obtém o elemento HTML com o ID "result" e armazena na variável `resultField`.
// Este campo será usado para mostrar os números digitados e o resultado da operação.
let resultField = document.getElementById("result");

// Função para limpar todos os dados dos campos de histórico e resultado.
function clearAll() {
    // Define o valor do campo de histórico como uma string vazia.
    historyField.value = "";
    // Define o valor do campo de resultado como uma string vazia.
    resultField.value = "";
}

// Função para apagar o último caractere do campo de resultado.
function deleteLast() {
    resultField.value = resultField.value.slice(0, -1);
}

// Função para adicionar um valor ao campo de resultado.
function appendValue(value) {
    // Concatena o valor recebido como argumento ao final do valor atual do campo de resultado.
    resultField.value += value;
}

// Função para calcular o resultado da expressão digitada no campo de resultado.
function calculateResult() {
    try {
        // Obtém a expressão atual do campo de resultado.
        const expression = resultField.value;
        // Usa a função `eval` para avaliar a expressão (exemplo: "2+2" será avaliado como 4).
        const result = eval(expression);
        // Define o campo de histórico para mostrar a expressão digitada, seguida de um sinal de "=".
        historyField.value = expression + " =";
        // Exibe o resultado da expressão no campo de resultado.
        resultField.value = result;
    } catch (error) {
        // Se ocorrer algum erro (ex.: expressão inválida), exibe uma mensagem de erro no campo de resultado.
        resultField.value = "Algo deu errado...";
    }
}
