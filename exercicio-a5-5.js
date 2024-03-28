const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        funcionarios: [
            { id: 101, nome: "Ana", cargo: "Vendedor" },
            { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [
            { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
            { id: 202, nome: "João", cargo: "Analista de sistemas" }
        ]
    }
]

let funcionarioEncontradoPorId;

function encontrarFuncionarioPorId(id) {
    for (const elemento of departamentos) {
       if (funcionarioEncontradoPorId = elemento.funcionarios.find((funcionario) => funcionario.id === id)){
         return funcionarioEncontradoPorId;
       }
    }
    return `O funcionário com id ${id} não existe.`
}

console.log(encontrarFuncionarioPorId(201));

