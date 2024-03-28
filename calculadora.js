const calculadora = {
    soma: function (num1, num2) {
        return num1 + num2;
    },

    subtracao: function (num1, num2) {
        return num1 - num2;
    },

    multiplicacao: function (num1, num2) {
        return num1 * num2;
    },

    divisao: function (num1, num2) {
        return num1 / num2;
    }
}

console.log(calculadora.soma(1, 2));
console.log(calculadora.subtracao(5, 2));
console.log(calculadora.multiplicacao(7, 2));
console.log(calculadora.divisao(9, 3));

calculadora.calcularMedia = function (array) {
    const somaNum = array.reduce((acumulador, nota) => acumulador + nota, 0);
    const media = somaNum / array.length;
    return media;
}

const listaNum = [3, 7, 9, 1]
console.log(calculadora.calcularMedia(listaNum));
