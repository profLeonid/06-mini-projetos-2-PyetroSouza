'use strict'

function gerarListaMeses(quantidadeParcelas) {
    let listaMeses = []

    for (let i = 1; i <= quantidadeParcelas; i++) {
        listaMeses.push(i)
    }

    return listaMeses
}

const calcularValorParcela = (valorTotal, quantidadeParcelas) => {
    return valorTotal / quantidadeParcelas
}

function calcularSaldoDevedor(quantidadeParcelas, valorInicial, valorParcela) {
    let listaSaldoDevedor = []

    for (let i = 0; i < quantidadeParcelas; i++) {
        listaSaldoDevedor.push(valorInicial)
        valorInicial = Math.max(0, valorInicial - valorParcela)
    }

    return listaSaldoDevedor
}

function calcularJurosMensais(listaSaldoDevedor, taxaJuros) {
    let listaJuros = []

    for (let i = 0; i < listaSaldoDevedor.length; i++) {
        let valorJuros = listaSaldoDevedor[i] * (taxaJuros / 100)
        listaJuros.push(valorJuros)
    }

    return listaJuros
}

function calcularTotalMensal(valorParcela, valorJuros) {
    return valorParcela + valorJuros
}

function criarLinhaTabela(mes, valorParcela, valorJuros, totalMes, saldoDevedor) {
    const tbody = document.getElementById('tbody')
    const tr = document.createElement('tr')

    const tdMes = document.createElement("td")
    const tdParcela = document.createElement("td")
    const tdJuros = document.createElement("td")
    const tdTotal = document.createElement("td")
    const tdSaldo = document.createElement("td")

    tdMes.textContent = mes
    tdParcela.textContent = valorParcela.toFixed(2)
    tdJuros.textContent = valorJuros.toFixed(2)
    tdTotal.textContent = totalMes.toFixed(2)
    tdSaldo.textContent = saldoDevedor.toFixed(2)

    tr.appendChild(tdMes)
    tr.appendChild(tdParcela)
    tr.appendChild(tdJuros)
    tr.appendChild(tdTotal)
    tr.appendChild(tdSaldo)

    tbody.appendChild(tr)
}

function gerarFinanciamento() {
    const valorTotal = Number(document.getElementById('valor').value)
    const taxaJuros = Number(document.getElementById('juros').value)
    const quantidadeParcelas = Number(document.getElementById('parcela').value)

    const listaMeses = gerarListaMeses(quantidadeParcelas)

    const valorParcela = calcularValorParcela(valorTotal, quantidadeParcelas)

    const listaSaldoDevedor = calcularSaldoDevedor(
        quantidadeParcelas,
        valorTotal,
        valorParcela
    )

    const listaJuros = calcularJurosMensais(listaSaldoDevedor, taxaJuros)

    const tbody = document.getElementById('tbody')
    tbody.replaceChildren()

    for (let i = 0; i < listaMeses.length; i++) {
        const totalMes = calcularTotalMensal(valorParcela, listaJuros[i])

        criarLinhaTabela(
            listaMeses[i],
            valorParcela,
            listaJuros[i],
            totalMes,
            listaSaldoDevedor[i]
        )
    }
}