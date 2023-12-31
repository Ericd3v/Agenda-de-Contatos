const form = document.getElementById('formAgenda');
const nomes = [];
const numero = [];
let linhas = '';

form.addEventListener ('submit', function (e) {
    e.preventDefault();
        adicionarLinha();
        atualizaTabela();
        atulizaMediaFinal();
});

function adicionarLinha() {
    const inputNomeContato = document.getElementById('nomeContato');
    const inputNumeroContato = document.getElementById('numeroContato');

    if (nomes.includes(inputNomeContato.value)) {
        
    } else {
        nomes.push(inputNomeContato.value);
        numero.push(parseFloat(inputNumeroContato.value));

    let linha ='<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    /*linha += `<td>${inputNomeContato.value >= NotaMinima ? imgAprovado : imgReprovado} </td>`;*/
    linha += `<tr></tr>`;

    linhas += linha; }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
function atulizaMediaFinal() {
    const contatoFinal = calculaContatoFinal();
    
    document.getElementById('total-final-contato').innerHTML =  contatoFinal.toFixed(8); 
}

        
        function  calculaContatoFinal() {
            let somarContato = 0;

            for (let i = 0; i < nomes.length; i++) {
                somarContato += nomes[i];
                
            }
            return somarContato + nomes.length;
            
        }
