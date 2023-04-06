const form = document.getElementById('form-exercicio_html_js');

function validaform() {    
    const valorA = document.getElementById('ValorA').value;
    const valorB = document.getElementById('ValorB').value;
    if (valorB > valorA) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const valorA = document.getElementById('ValorA').value;
    const valorB = document.getElementById('ValorB').value;
    if (valorB > valorA) {
        document.getElementById("mensagem").innerHTML = "O valor B é maior que o valor A - Enviado com sucesso!";
        return true;
    } else {
        document.getElementById("mensagem").innerHTML = "O valor B é menor que o valor A - Não pôde ser enviado!";
        return false;
    }
});