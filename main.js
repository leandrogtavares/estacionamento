import { Estacionamento } from "./model/estacionamento.js"
import { Guarita } from "./model/guarita.js"

console.log(`iniciando programa`)

// Mundo Html - Entrada (conexão) de elementos
const inputPlacaEntrada = document.querySelector("#inputPlacaEntrada")
const buttonEntrar = document.querySelector("#buttonEntrar")

buttonEntrar.addEventListener('click', entrar)

const inputPlacaSaida = document.querySelector("#inputPlacaSaida")
const buttonSair = document.querySelector("#buttonSair")

const preBilhete = document.querySelector("#preBilhete")
const tbodyControle = document.querySelector('#tbodyControle')

buttonSair.addEventListener('click', sair)


// Mundo js
const estacionamento = new Estacionamento('Meier1', tbodyControle)
const guarita = new Guarita('Ala leste', estacionamento)

function entrar() {
    const placa = inputPlacaEntrada.value
    console.log('iniciando estadia para placa: ', placa)
    guarita.iniciarEstadia(placa)
}

function sair() {
    console.log('encerrando estadia')
    const placa = inputPlacaSaida.value
    const messagem = guarita.encerrarEstadia(placa)
    preBilhete.textContent = messagem
}