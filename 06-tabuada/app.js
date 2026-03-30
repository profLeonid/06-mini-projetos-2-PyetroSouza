'use strict'



function definirLista() {
    let lista = []

    for (let i = 1; i <= 10; i++)
        lista.push(i)

    return lista
}


function calcularAdicao(numero) {
    let listaAdicao = []

    for (let i = 1; i <= 10; i++)
        listaAdicao.push(numero + i)

    return listaAdicao
}

function calcularSubtracao(numero){
    let listaSubtracao = []

    for(let i = 1; i <= 10; i++)
        listaSubtracao.push(numero - i)

    return listaSubtracao
}

function calcularMultiplicacao(numero){
    let listaMultiplicacao = []

    for(let i = 1; i <= 10; i++)
        listaMultiplicacao.push(numero * i)

    return listaMultiplicacao
}

function calcularDivisao(numero){
    let listaDivisao = []

    for(let i = 1; i <= 10; i++)
        listaDivisao.push((numero / i).toFixed(2))

    return listaDivisao
}

function criarLinha(num, adicao, subtracao, multiplicar, divisao){
    const tbody = document.getElementById('tbody')
    const tr = document.createElement('tr')

    const tdNum = document.createElement('td')
    const tdAdicao = document.createElement('td')
    const tdSubtracao = document.createElement('td')
    const tdMultiplicacao = document.createElement('td')
    const tdDivisao = document.createElement('td')

    tdNum.textContent = num
    tdAdicao.textContent = adicao
    tdSubtracao.textContent = subtracao
    tdMultiplicacao.textContent = multiplicar
    tdDivisao.textContent = divisao

    if (subtracao < 0) {
        tdSubtracao.style.color = 'red'
    } 

    tr.appendChild(tdNum)
    tr.appendChild(tdAdicao)
    tr.appendChild(tdSubtracao)
    tr.appendChild(tdMultiplicacao)
    tr.appendChild(tdDivisao)

    tbody.appendChild(tr)
}



function gerarLista(){
    const numero = Number(document.getElementById('numero').value)

    const listaNum = definirLista(numero)
    const listaAdicao = calcularAdicao(numero)
    const listaSubtracao = calcularSubtracao(numero)
    const listaMultiplicacao = calcularMultiplicacao(numero)
    const listaDivisao = calcularDivisao(numero)


    document.getElementById('tbody').replaceChildren()

    for (let i = 0; i < 10; i++){
        criarLinha(listaNum[i],listaAdicao[i],listaSubtracao[i],listaMultiplicacao[i],listaDivisao[i])
    }
}


