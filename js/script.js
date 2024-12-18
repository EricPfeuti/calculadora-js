let historyField = document.getElementById("history");
let resultField = document.getElementById("result");

function clearAll() {
    historyField.value = "";
    resultField.value = "";
}

function deleteLast() {
    resultField.value - resultField.value.slice(0, -1);
}

function appendValue(value) {
    resultField.value += value;
}

function calculateResult() {

    try {
        const expression = resultField.value;
        const result = eval(expression);
        historyField.value = expression + " =";
        resultField.value = result;
    } catch (error) {
        resultField.value = "Algo deu errado...";
    }

}