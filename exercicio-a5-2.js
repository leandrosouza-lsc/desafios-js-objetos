const catalogoFilmes = [
    { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
    { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1993 },
    { id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 }
]

function filtrarFilmesPorAno (ano) {
    return catalogoFilmes.filter((elemento) => elemento.anoLancamento === ano)
}

let filmeFiltradoPorAno = filtrarFilmesPorAno(2010);
console.log(filmeFiltradoPorAno);

filmeFiltradoPorAno = filtrarFilmesPorAno(1993);
console.log(filmeFiltradoPorAno);