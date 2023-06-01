import { Bilhete } from "./bilhete.js"
import { InvalidArgumentValue, InvalidArgumentType } from "../exception/exceptions.js"

export class Estacionamento {
    constructor(nome, tbodyControle) {
        this.nome = nome
        this._controle = [] //vetor de bilhetes. controle: Bilhete[]
        this.tbodyControle = tbodyControle
    }

    adicionarBilhete(bilhete) {
        //todo adicionar lógica de validação
        if (!bilhete) throw new InvalidArgumentValue('Bilhete não pode ser nulo')
        if (!(bilhete instanceof Bilhete)) throw new InvalidArgumentType('Objeto deve ser um bilhete')
        this._controle.push(bilhete)
        this._adicionarTBodyRow(bilhete)
    }

    buscarBilhetePorPlaca(placa) {
        console.log(`buscando bilhete com a placa ${placa}`)
        return this._controle.find(bilhete => bilhete.placa === placa)
    }

    _adicionarTBodyRow(bilhete) {
        const tdPlaca = document.createElement('td')
        const tdEntrada = document.createElement('td')

        tdPlaca.textContent = bilhete.placa
        tdEntrada.textContent = bilhete.entrada

        const trBilhete = document.createElement('tr')
        trBilhete.appendChild(tdPlaca)
        trBilhete.appendChild(tdEntrada)

        tbodyControle.appendChild(trBilhete)
    }
}