console.log("Bem vindo ao Gerador de Senhas!");
const incluirNumeros = true; // Altere para false se não quiser incluir números
const incluirSimbolos = true; // Altere para false se não quiser incluir símbolos
const comprimentoSenha = 12; // Altere para o comprimento desejado da senha

function gerarSenha() {
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let caracteres = letras;

    if (incluirNumeros) {
        caracteres += numeros;
    }

    if (incluirSimbolos) {
        caracteres += simbolos;
    }

    let senha = "";
    for (let i = 0; i < comprimentoSenha; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }

    return senha;
}

const senhaGerada = gerarSenha();
console.log("Senha Gerada: " + senhaGerada);