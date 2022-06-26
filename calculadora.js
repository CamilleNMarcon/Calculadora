const multiplicar =  require('./contas/multiplicar');
const somar =  require('./contas/somar');
const subtrair =  require('./contas/subtrair');
const dividir =  require('./contas/dividir');


const calculadoraSomar = (X,Y) => console.log("Resulatdo Soma : " + somar(X,Y));
calculadoraSomar(2,4);

const calculadoraSubtrair = (X,Y) => console.log("Resultado Subtração : " + subtrair(X,Y));
calculadoraSubtrair(7,4);

const calculadoraMultiplicar = (X,Y) => console.log("Resultado Multiplicação : " + multiplicar(X,Y));
calculadoraMultiplicar(0,4);

const calculadoraDividir = (X,Y) => console.log("Resultado Divisão : " + dividir(X,Y));
calculadoraDividir(0,0);