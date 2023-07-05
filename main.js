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
        console.log(dadosListas);
    }
}