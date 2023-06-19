import { Estacionamento } from "./model/estacionamento.js"
import { Guarita } from "./model/guarita.js"
import {Pagamento} from "./model/pagamento.js"

console.log(`iniciando programa`)

// Mundo Html - Entrada (conexão) de elementos
const inputPlacaIniciar = document.querySelector("#inputPlacaIniciar")
const buttonIniciar = document.querySelector("#buttonIniciar")

buttonIniciar.addEventListener('click', iniciarEstadia)

const inputPlacaFiltro = document.querySelector("#inputPlacaFiltro")
const buttonFiltrar = document.querySelector("#buttonFiltrar")
const buttonZerarFiltro = document.querySelector("#buttonZerarFiltro")

buttonFiltrar.addEventListener('click', filtrar)
buttonZerarFiltro.addEventListener('click', zerarFiltro)

//TODO limitar escopo
const preBilhete = document.querySelector("#preBilhete")
const buttonEncerrar = document.querySelector("#buttonEncerrar")
const tbodyControle = document.querySelector('#tbodyControle')


buttonEncerrar.addEventListener('click', encerrarEstadia)


// Mundo js
const estacionamento = new Estacionamento('Meier1', tbodyControle, preBilhete)
const guarita = new Guarita('Ala leste', estacionamento)

function iniciarEstadia() {
    const placa = inputPlacaIniciar.value
    console.log('iniciando estadia para placa: ', placa)
    guarita.iniciarEstadia(placa)
}

function encerrarEstadia() {
    console.log('encerrando estadia')
    const placa = estacionamento.bilheteSelecionado.placa
    if (placa) {
        preBilhete.textContent = guarita.encerrarEstadia(placa)
    }
}

function filtrar() {
    const placa = inputPlacaFiltro.value
    //1 - pegar bilhete vinculado à placa
    const bilhete = estacionamento.buscarBilhetePorPlaca(placa)
    console.log('resultado da busca: ', bilhete)
    //2 - atualizar conteúdo do tbody da tabela controle
    //com o resultad do filtro
    estacionamento.atualizarTbodyControleResultadoFiltro(bilhete)
}

function zerarFiltro() {
    console.log('zerando filtros')
    // 1 - recarregar o conteúdo do controle na tabela
    estacionamento.carregarTabelaControle()
}