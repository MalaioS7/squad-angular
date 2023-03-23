var text: string = "minha variável";

function minhaFunction(x: number,y: number){
  return x + y;
}

let num = 2;
const PI = 3.14;

var numeros = [1,2,3,4,5,6,7,8,9,10]
numeros.map(function(valor){
  return valor*2;
});
numeros.map(valor => valor*2);

class Matematica{
  soma(x: number,y: number){
    return x+y;
  }
}
