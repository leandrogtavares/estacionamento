import { Estacionamento } from "./model/estacionamento.js"
import { Guarita } from "./model/guarita.js"

console.log(`iniciando programa`)

// Mundo Html - Entrada (conexão) de elementos
const inputPlacaEntrada = document.querySelector("#inputPlacaEntrada")
const buttonEntrar = document.querySelector("#buttonEntrar")

buttonEntrar.addEventListener('click', entrar)

const inputPlacaFiltro = document.querySelector("#inputPlacaFiltro")
const buttonFiltrar = document.querySelector("#buttonFiltrar")

buttonFiltrar.addEventListener('click', filtrar)

//TODO limitar escopo
const preBilhete = document.querySelector("#preBilhete")
const buttonSair = document.querySelector("#buttonSair")
const tbodyControle = document.querySelector('#tbodyControle')

buttonSair.addEventListener('click', sair)


// Mundo js
const estacionamento = new Estacionamento('Meier1', tbodyControle, preBilhete)
const guarita = new Guarita('Ala leste', estacionamento)

function entrar() {
    const placa = inputPlacaEntrada.value
    console.log('iniciando estadia para placa: ', placa)
    guarita.iniciarEstadia(placa)
}

function sair() {
    console.log('encerrando estadia')
    const placa = BilheteSelecionado.placa //todo definir BilheteSelecionado
    const messagem = guarita.encerrarEstadia(placa)
    preBilhete.textContent = messagem
}

function filtrar() {
    const placa = inputPlacaFiltro.value
    console.log('aplicando filtros')
}

