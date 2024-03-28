const pitaya = {
    especie: 'Palora',
    fileira: 1,
    autoFertil: 'Sim',
    pesoFrutos: '250g',
    mudasDisponiveis: 300,
}

console.log(pitaya);

pitaya.ultimaAdubacao = '01.02.2024';
console.log(pitaya);
pitaya.mudasDisponiveis = 100;
console.log(pitaya);
delete pitaya.pesoFrutos;
console.log(pitaya);

function acessandoObj (obj, info){
    return obj[info];
}

console.log(acessandoObj(pitaya, 'ultimaAdubacao'));