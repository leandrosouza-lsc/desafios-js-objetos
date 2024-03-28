/* exercícios 3, 4 e 5*/
const carro = {
    marca: 'Ford',
    modelo: 'Ranger Storm',
    ano: 2024,
    cor: 'Azul',
    ligado: true,
    ligar: function (ligado){
        if (ligado){
            console.log('O carro está ligado');
        }else{
            this.ligado = true;
            console.log('O carro está ligado');
        }
    },
    desligar: function (ligado){
        if(ligado === false){
            console.log('O carro está desligado');
        }else{
            this.ligado = false;
            console.log('O carro está desligado');
        }
    },
    obterDetalhes: function (){
        for (let chave in carro){
            
            const tipo = typeof carro[chave];
           
            if(tipo !== 'object' && tipo !== 'function'){
                const resultado = `${chave}: ${carro[chave]}`;
                console.log(resultado);
            }
        }
    }
    }

    //carro.ligar(carro.ligado);
    //carro.desligar(carro.ligado);

    //carro.obterDetalhes();

Object.defineProperty(carro, 'placa', {
    value: 'ATS7K99',
    enumerable: false
});

    //for (let chave in carro){
    // onst resultado = `${chave}: ${carro[chave]}`;
    // console.log(resultado);
    // }

    //const chavesCarro = Object.keys(carro);
    //console.log(chavesCarro);

    //console.log(carro.placa);

const carroNovo = {
    marca: 'Chevrolet',
    modelo: 'Camaro',
    ano: 2024,
    cor: 'Vermelho',
}

const carroComNovosDetalhes = {
    ...carro,
    ...carroNovo
}

console.log(carroComNovosDetalhes);

carroComNovosDetalhes.ano = 2023;

console.log(carroComNovosDetalhes);

