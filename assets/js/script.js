// Criando array usuarios com conceitos de Objeto (cada index do array é um objeto)
var usuarios = [
    {
        email: "antony@base.com",
        senha: "antonysenha"
    },
    {
        email: "caioba@base.com",
        senha: "caiobasenha"
    },
    {
        email: "vitor@base.com",
        senha: "vitorsenha"
    }
]

function login(){
    var userEmail = document.getElementById("email").value;
    var userSenha = document.getElementById("senha").value;
    
    for (let index = 0; index < usuarios.length; index++) {
        var verifier = false; 
        if (usuarios[index].email == userEmail && usuarios[index].senha == userSenha){
            verifier = true;
            window.alert("Login aprovado");
            break;
        }

    }
    if (!verifier)
        window.alert("Login inválido: Email e/ou senha inválidos!");
}

