// Input filling verification block

function Verify()
{
    let user = document.getElementById("loginEmail").value;
    let pswr = document.getElementById("loginSenha").value;

    if (!user || !pswr){
        alert("Campos de preenchimento obrigatório. Favor preencher!");
    }
    else{
        window.location.href = "aula2.html";
    }
}

/*Função para criar a lista de usuários*/

/*
-->Cria o Array par amazernar os usuários
*/

var dadosListas = [];

function salvarUser(){
    let nomeUser = document.getElementById("nomeUser").value;

    if(nomeUser){
        dadosListas.push(nomeUser);
        crialista();
        //console.log(dadosListas);
    }
}

function crialista(){
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>"

    for(let i=0; i <= (dadosListas.length-1); i++){
        tabela += "<tr><td>" + dadosListas[i] + "</td><td><button class='btn btn-success' onclick=''>Editar</Button><button class='btn btn-danger' onclick=''>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}
