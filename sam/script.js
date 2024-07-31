function Entrar() {
    let valor = document.querySelector("#valor").value;
    let musica = "A sua música é a do perfil 1"
    let musica2 = "A sua música é a do perfil 2"
    switch (valor) {
        case "1":
            let dados = prompt("Vamos começar, insira os dados");

            if (dados === "1") {
                let retorno = document.querySelector("#retorno1").textContent=`${musica}`
            } else {
                alert("Valor diferente de 1");
            }

            break;
            case "2":
            let dados2 = prompt("Vamos começar, insira os dados");

            if (dados2 === "2") {
              let retorno = document.querySelector("#retorno1").textContent=`${musica2}`
            } else {
                alert("Valor diferente de 2");
            }

            break;
        default:
            alert("Valor não reconhecido");
            break;
    }
}
