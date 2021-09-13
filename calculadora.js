let valor;
let resultado;
function botao(num){
   valor = document.calc.visor.value += num;
   console.log(valor)
}

function reseta(){
    document.calc.visor.value = "";
}

function calcula(){
    resultado = eval(valor)
    document.calc.visor.value = resultado.toLocaleString('pt-br');
}


