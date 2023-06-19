export class Pagamento {
    constructor(valor, tipo) {
        this.id = crypto.randomUUID()
        this.valor = valor
        this.tipo = tipo
    }
}