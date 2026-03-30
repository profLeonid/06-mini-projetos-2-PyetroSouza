'use strict'

const quantidade = document.getElementById('quantidade')

function criarListaNumeros(quantidade) {
    let listaNumeros = []

    for (let i = 1; i <= quantidade; i++) {
        listaNumeros.push(i)
    }
    return listaNumeros
}

function criarListaNumerosPares(quantidade) {
    let listaPares = []

    for (let i = 0; i <= quantidade; i++) {
        if (i % 2 === 0)
            listaPares.push(i)
    }
    return listaPares
}
function criarListaNumerosImpares(quantidade) {
    let listaImpares = []

    for (let i = 0; i <= quantidade; i++) {
        if (i % 2 !== 0)
            listaImpares.push(i)
    }
    return listaImpares
}
function criarListaMultiploCinco(quantidade) {
    let listaMultiplosCinco = []
    for (let i = 1; i <= quantidade; i++) {
        if (i % 5 === 0)
            listaMultiplosCinco.push(i)
    }
    return listaMultiplosCinco
}
function criarListaNumerosAoQuadrado(quantidade) {
    let listaNumerosAoQuadrado = []

    for (let i = 0; i <= quantidade; i++) {
        listaNumerosAoQuadrado.push(Math.pow(2, i));
    }
    return listaNumerosAoQuadrado
}
function criarLinha(numero, numeroPar, numeroImpar, numeroMulti, numeroPotencial) {
    const tbody = document.getElementById('tbody')
    const tr = document.createElement('tr')

    const tdNum = document.createElement('td')
    const tdNumPar = document.createElement('td')
    const tdNumImpar = document.createElement('td')
    const tdNumMulti = document.createElement('td')
    const tdNumPoten = document.createElement('td')

    tdNum.textContent = numero
    tdNumPar.textContent = numeroPar
    tdNumImpar.textContent = numeroImpar
    tdNumMulti.textContent = numeroMulti
    tdNumPoten.textContent = numeroPotencial

    tr.appendChild(tdNum)
    tr.appendChild(tdNumPar)
    tr.appendChild(tdNumImpar)
    tr.appendChild(tdNumMulti)
    tr.appendChild(tdNumPoten)
    tbody.appendChild(tr)
}


function gerarLista() {
    const quantidade = Number(document.getElementById('quantidade').value)
    const listaNumeros = criarListaNumeros(quantidade)
    const listaNumeroPares = criarListaNumerosPares(quantidade)
    const listaNumeroImpares = criarListaNumerosImpares(quantidade)
    const listaMultiCinco = criarListaMultiploCinco(quantidade)
    const listaNumeroPontencial = criarListaNumerosAoQuadrado(quantidade)

    document.getElementById('tbody').replaceChildren()

    for (let i = 0; i < quantidade; i++)
        criarLinha(listaNumeros[i],listaNumeroPares[i],listaNumeroImpares[i],listaMultiCinco[i],listaNumeroPontencial[i])

}
