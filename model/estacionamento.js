import { Bilhete } from "./bilhete.js"
import { InvalidArgumentValue, InvalidArgumentType } from "../exception/exceptions.js"

export class Estacionamento {
    constructor(nome, tbodyControle, preBilhete) {
        this.nome = nome
        this._controle = [] //vetor de bilhetes. controle: Bilhete[]
        this.tbodyControle = tbodyControle
        this.preBilhete = preBilhete
        this.bilheteSelecionado = null
    }

    adicionarBilhete(bilhete) {
        //TODO adicionar lógica de validação
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
        
        const atualizarPreBilhete = () => {
            this.preBilhete.innerHTML = `
            <section>
                <div>Placa: ${bilhete.placa}</div>
                <div>Entrada: ${bilhete.entrada}</div>
            </section>
            `
            this.bilheteSelecionado = bilhete
        }

        const tdOption = document.createElement('td')
        const tdPlaca = document.createElement('td')
        const tdEntrada = document.createElement('td')

        const inputRowControle = document.createElement('input')
        inputRowControle.type = 'radio'
        inputRowControle.value = bilhete.placa
        inputRowControle.id = bilhete.placa
        inputRowControle.addEventListener('click', atualizarPreBilhete)

        tdOption.appendChild(inputRowControle)

        tdPlaca.textContent = bilhete.placa
        tdEntrada.textContent = bilhete.entrada

        const trBilhete = document.createElement('tr')
        trBilhete.appendChild(tdOption)
        trBilhete.appendChild(tdPlaca)
        trBilhete.appendChild(tdEntrada)

        this.tbodyControle.appendChild(trBilhete)
    }

    atualizarTbodyControleResultadoFiltro(bilhete) {
        // 1- zerar conteúdo
        tbodyControle.innerHTML = null
        // 2- adicionar uma linha que reflita o bilhete
        this._adicionarTBodyRow(bilhete)
    }

    carregarTabelaControle() {
        // 1 - percorrer o array _controle
        // 2 - adicionar uma linha na tabela controle para cada bilhete no array _controle
        for(let bilhete of this._controle) {
            this._adicionarTBodyRow(bilhete)
        }
    }
}