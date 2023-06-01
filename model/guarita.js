import { Bilhete } from "./bilhete.js"

export class Guarita {
    tarifaPorSegundo = 10 / 3600

    constructor(nome, estacionamento) {
        this.nome = nome
        this.estacionamento = estacionamento
    }

    iniciarEstadia(placa) {
        this.estacionamento.adicionarBilhete(new Bilhete(placa, new Date()))
    }

    encerrarEstadia(placa) {
        const bilhete = this.estacionamento.buscarBilhetePorPlaca(placa)
        
        if (!bilhete) return `Placa não encontrada`

        const saida = new Date().getTime() + 10 * 60 * 1000
        const total = this._calcularTotal(bilhete.entrada, saida)

        return `encenrrando para placa ${placa} 
        \n entrada: ${bilhete.entrada}
        \n saida: ${saida}
        \n total: ${total}`
    }

    _calcularTotal(entrada, saida) {
        return ((saida - entrada) / 1000) * this.tarifaPorSegundo
    }
}