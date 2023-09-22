// TO DO LIST (CRUD)

class Atividade {
    constructor(nome, descricao, responsavel) {
        this.nome = nome;
        this.descricao = descricao;
        this.responsavel = responsavel;
    }
}

let listaDeAtividades = [];

//EXIBIR LISTA DE ATIVIDADES:
const exibirLista = () =>
{
    atualizarLista(listaDeAtividades);
}

const atualizarLista = (array) => {
    let data = '';

    array.map( (atv, index) => {
        data += 
        `
        <li class="card-atv">
            <div class="card-header">
                <h3 class="atv-nome">${atv.nome}</h3>
                <div class="card-commands">
                    <button class="btn-remover" onclick="removerAtividade(${index})"><span class="material-symbols-outlined">delete</span></button>
                    <button class="btn-editar" onclick="editarDescricaoAtividade(${index})"><span class="material-symbols-outlined">edit</span></button>
                </div>
            </div>
            <p class="atv-desc">${atv.descricao}</p>
            <p class="atv-resp"><b>${atv.responsavel}</b></p>
        </li>
        `
    });
    document.getElementById('List').innerHTML = data;
}

//ADICIONAR UMA ATIVIDADE
const adicionarAtividade = () => {
    //logica de adicionar uma nova atividade
    let nome = prompt('Informe o nome:');
    let descricao = prompt('Informe a descricao:');
    let responsavel = prompt('Informe o responsavel:');
    let novaAtividade = new Atividade(nome ? nome : "Atividade sem Nome", descricao ? descricao : "Atividade sem Descrição", responsavel ? responsavel : "Atividade sem Responsavel");

    listaDeAtividades.push(novaAtividade);
    exibirLista();
}

//REMOVER UMA ATIVIDADE
const removerAtividade = (index) => {
    //logica de remover atividade
    listaDeAtividades.splice(index, 1);
    exibirLista();
}

//PESQUISAR UMA ATIVIDADE
const buscarAtividade = () => {
    //logica de buscar atividade
    let termoBuscado = prompt("Informe o nome da atividade a ser buscada:")
    let resultadoBusca = listaDeAtividades.filter(item => item.nome.toUpperCase() == termoBuscado.toUpperCase());
    atualizarLista(resultadoBusca);
}

//EDITAR DESCRICAO DE UMA ATIVIDADE
const editarDescricaoAtividade = (index) => {
    //logica para editar descricao da atividade
    let atv = listaDeAtividades[index];
    atv.descricao = prompt('Informe a nova descricao:');
    exibirLista();
}