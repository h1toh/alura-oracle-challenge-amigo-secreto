const caixaDeTexto = document.getElementById("caixaDeTexto")
const btnAdicionar = document.getElementById("btnAdicionar")
const btnSortear = document.getElementById("btnSortear")
const btnApagar = document.getElementById("btnApagar")
const ul = document.getElementById("lista")
const main = document.querySelector("main")
const nomeEscolhido = document.querySelector(".escolhido")
const aviso = main.appendChild(document.createElement("p"))
aviso.style.color = "red"

let listaDeNomes = []

function mostrarAvisoCasoTextoVazio(nome) {
    if (!nome) {
        aviso.textContent = "Digite um ou mais nomes."
    }
}

function removerAviso() {
    aviso.textContent = ""
}

function ativarBotoesSortearApagar() {
    if (listaDeNomes.length >= 2) {
        btnSortear.removeAttribute("hidden") // Aparece btn sortear
        btnApagar.removeAttribute("hidden") // Aparece btn apagar
    }
}

function adicionarNomeNaLista() {
    mostrarAvisoCasoTextoVazio(caixaDeTexto.value)
    if (caixaDeTexto.value) {
        aviso.textContent = ""
        let nomes = caixaDeTexto.value.split(",") // Recebe os nomes e cria um array com eles

        for (let i = 0; i < nomes.length; i++) {
            if (listaDeNomes.length >= 1) {
                ul.appendChild(document.createElement("hr"))
            }
            let li = ul.appendChild(document.createElement("li")) // Cria um li dentro do ul
            li.append(nomes[i]) // Adiciona os nomes no li
            listaDeNomes.push(nomes[i]) // Coloca os nomes dentro de um array
        }
        caixaDeTexto.value = "" // Limpa a caixa de texto
    }
    ativarBotoesSortearApagar()
}

function sortearNome() {
    let i = Math.floor(Math.random() * listaDeNomes.length) // Indice aleatorio
    nomeEscolhido.innerHTML = listaDeNomes[i] // Aqui mostra o nome escolhido na tela
    removerAviso()
}

function apagarTudo() {
    removerAviso()
    nomeEscolhido.innerHTML = ""
    btnSortear.setAttribute("hidden", null)
    btnApagar.setAttribute("hidden", null)
    ul.textContent = ""
    listaDeNomes = []
}

btnAdicionar.addEventListener("click", () => {
    adicionarNomeNaLista() // Clicando no botao adicionar
})

caixaDeTexto.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        adicionarNomeNaLista() // Pressionando a tecla Enter
    }
})

btnSortear.addEventListener("click", () => {
    if (!listaDeNomes.length) {
        return
    }
    sortearNome()
})

btnApagar.addEventListener("click", () => { // Limpa tudo
    apagarTudo()
})
