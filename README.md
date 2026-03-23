[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/imudYGEZ)
# Exercícios de JavaScript — Módulo 2
## Estruturas de Repetição

Projeto com exercícios práticos para aprender estruturas de repetição em JavaScript puro (`for` e `while`).

---

## 📁 Estrutura do Projeto

```
/
├── index.html                  ← Página inicial com os exercícios
├── style.css
├── README.md
│
├── 05-contador/
│   ├── index.html
│   └── style.css
├── 06-tabuada/
│   ├── index.html
│   └── style.css
└── 07-financiamento/
    ├── index.html
    └── style.css
```

---

## 📌 Regras Gerais

- **Não edite** nenhum arquivo `index.html` nem `style.css`
- Cada exercício precisa de um arquivo `script.js` criado por você
- O `script.js` deve ser criado dentro da pasta do exercício
- Após criar o arquivo, **referencie-o no HTML** com a tag `<script>`
- Os elementos HTML precisam receber **IDs** para que o JS consiga acessá-los
- Leia com atenção o layout de cada exercício antes de começar

---

## 🟡 05 — Contador

**O que fazer:**
Criar o `script.js` com uma função que lê a quantidade informada e usa um loop
para gerar uma tabela com 7 colunas, cada uma representando uma sequência diferente.

**Fórmulas de cada coluna:**
- **Contagem** → 1, 2, 3, 4... (o próprio índice)
- **Pares** → 2, 4, 6, 8... (índice × 2)
- **Ímpares** → 1, 3, 5, 7... (índice × 2 - 1)
- **Múltiplos de 5** → 5, 10, 15... (índice × 5)
- **Potências de 2** → 1, 2, 4, 8... (2 ^ (índice - 1))

**Passos:**
1. Adicionar `id` no input e no `<tbody>` da tabela no HTML
2. Referenciar o `script.js` no HTML
3. Criar a função e conectá-la ao botão
4. Pegar o valor do input (quantidade de termos)
5. Limpar o `<tbody>` antes de gerar
6. Criar o loop de 1 até a quantidade informada
7. Calcular cada coluna dentro do loop e montar a `<tr>`

**Conceitos praticados:**
- `for` com quantidade variável
- Múltiplas expressões matemáticas dentro do loop
- Operador `%` (módulo) para verificar múltiplos
- Operador `**` para potenciação

---

## 🟡 06 — Tabuada Estendida

**O que fazer:**
Criar o `script.js` com uma função que lê um número e usa um loop de 1 a 10
para gerar uma tabela com as quatro operações.

**Fórmulas de cada coluna:**
- **Adição** → número + N
- **Subtração** → número - N
- **Multiplicação** → número × N
- **Divisão** → número ÷ N (usar `.toFixed(2)`)

**Passos:**
1. Adicionar `id` no input e no `<tbody>` da tabela no HTML
2. Referenciar o `script.js` no HTML
3. Criar a função e conectá-la ao botão
4. Pegar o valor do input
5. Limpar o `<tbody>` antes de gerar
6. Criar o loop de 1 a 10
7. Calcular cada operação e montar a `<tr>`
8. Destacar em vermelho quando a subtração resultar em número negativo

**Conceitos praticados:**
- `for` com intervalo fixo
- Quatro operações matemáticas no mesmo loop
- `toFixed(2)` para formatação de decimais
- `if` para destaque visual de resultado negativo

---

## 🟡 07 — Simulador de Financiamento

**O que fazer:**
Criar o `script.js` com uma função que lê os três dados do financiamento e usa um loop
para simular mês a mês com juros compostos, gerando uma linha para cada mês.

**Fórmulas:**
- **Parcela** = valor total ÷ número de parcelas (calculada antes do loop, é fixa)
- **Juros do Mês** = saldo devedor × (taxa ÷ 100)
- **Total do Mês** = parcela + juros do mês
- **Saldo Devedor** = saldo devedor - parcela

**Por que o loop é obrigatório?**
Os juros incidem sobre o saldo devedor restante — cada mês depende do resultado
do mês anterior. Sem o loop não é possível calcular.

**Passos:**
1. Adicionar `id` nos três inputs e no `<tbody>` da tabela no HTML
2. Referenciar o `script.js` no HTML
3. Criar a função e conectá-la ao botão
4. Pegar os três valores dos inputs
5. Calcular a parcela fixa antes do loop
6. Inicializar o saldo devedor com o valor total
7. Criar o loop do mês 1 até o número de parcelas
8. Calcular juros, total e novo saldo a cada iteração
9. Montar a `<tr>` com cinco `<td>` e adicionar ao `<tbody>`
10. Atualizar o saldo devedor ao final de cada iteração

**Conceitos praticados:**
- `for` com lógica acumulativa
- Variável de estado que muda a cada iteração (saldo devedor)
- `toFixed(2)` para formatação monetária
- Juros compostos na prática

---

## 🚀 Como executar

Basta abrir o arquivo `index.html` no seu navegador.
Não é necessário instalar nada.
