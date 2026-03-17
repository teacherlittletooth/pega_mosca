//Mapeamento dos componentes de tela
const mosca = document.querySelector("#mosca")
const tempo = document.querySelector("#tempo")
const acertos = document.querySelector("#acertos")
const gameOver = document.querySelector("#game-over")
const btnIniciar = document.querySelector("#btn-iniciar")
const telaInicio = document.querySelector("aside")
const telaJogo = document.querySelector("main")
const root = document.documentElement

//Variáveis de início
var qtdAcertos = 0, velocidade = 1000
var minutos = 2, segundos = 0
var min = 5, max = 95
var movimento, timer

//Controle do tempo
timer = setInterval(()=>{
    segundos--
    if( segundos == -1 ) {
        minutos--
        segundos = 59
    }

    tempo.innerHTML = (segundos < 10)
                    ? minutos + ":0" + segundos
                    : minutos + ":" + segundos

    if( minutos == 0 && segundos == 0 ) {
        mosca.style.pointerEvents = "none"
        clearInterval(movimento)
        clearInterval(timer)
        gameOver.style.display = "block"
    }
}, 1000)

//Evento de clique na mosca
mosca.addEventListener("click", ()=>{
    mosca.style.pointerEvents = "none"
    mosca.src = "../img/mosca-hit.png"

    setTimeout(()=>{
        mosca.style.pointerEvents = "all"
        mosca.src = "../img/mosca.png"
    }, 1500)
    
    qtdAcertos++
    acertos.innerHTML = qtdAcertos
    velocidade-=20

    clearInterval(movimento)

    root.style.setProperty("--velocidade", velocidade/1000 + "s")
    
    movimento = setInterval(moveMosca, velocidade)
})

function moveMosca() {
    let vertical = Math.floor( Math.random() * (max - min + 1) ) + min
    let horizontal = Math.floor( Math.random() * (max - min + 1) ) + min
    let giro = Math.floor( Math.random() * (180 - (-180) + 1) ) + -180

    root.style.setProperty("--vertical", vertical + "%")
    root.style.setProperty("--horizontal", horizontal + "%")
    root.style.setProperty("--giro", giro + "deg")

    console.log("Y = " + vertical)
    console.log("X = " + horizontal)
    console.log("Giro = " + giro)
    console.log("Velocidade = " + velocidade)
}

btnIniciar.addEventListener("click", ()=>{
    movimento = setInterval(moveMosca, velocidade)
    telaInicio.style.display = "none"
    telaJogo.style.display = "block"
})
