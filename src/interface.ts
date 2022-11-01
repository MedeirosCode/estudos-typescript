interface Transporte {
    tipo:  string
    descricao: string
    tamanho: number
}

interface Rodoviario extends Transporte {
    paradas: number,
    numeroDeLugar: number
}

interface Aereo extends Transporte{
servicoDeBordo: string
}
function cadastroDeTransporte ( transporte: Transporte) {
    console.log("TRANSPORTE: " + JSON.stringify(transporte))
}

const aereo : Aereo = {
    tipo: 'avião cobalto',
    descricao: "transporte para longas viagens",
    tamanho: 30,
    servicoDeBordo: "Possui serviço de bordo"
}

const rodoviario : Rodoviario = {
    tipo:  "onibus",
    descricao: "onibus com 30 pessoas",
    tamanho: 12,
    paradas: 4,
    numeroDeLugar: 45
    
}
cadastroDeTransporte(aereo)
console.log("===============")
cadastroDeTransporte(rodoviario)