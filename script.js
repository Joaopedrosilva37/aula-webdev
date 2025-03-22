/*
console.log("hello world")
console.log("info")
console.log("warning")
console.log("error")

console.table([
    { id: 1, tarefa: 'Estudar' },
    { id: 2, tarefa: 'Praicar' }
]);

console.group('Grupo de logs')
console.log("Log 1")
console.log("Log 2")
console.groupEnd()

console.time('Timer')
// processamento ...

console.timeEnd("Time")


var antigo = "valor da variável"

console.log(antigo)


let variavelMutavel = 1

console.log(variavelMutavel)

const variavelmutavel = 1

console.log(variavelmutavel)
*/

//Tipo de dados primitivos
/*
let txto = "texto"
console.log(typeof texto)


let numero = 0
console.log(typeof numero)

let isCompleted = false
console.log(typeof isCompleted)

let semvalor
console.log(typeof semvalor)

let mulo = null
console.log(typeof nulo)

let Uniqueld = Symbol("id")
console.log(typeof Uniqueld)

let bigNumero = 99999999999999999999999999999999
console.log(typeof bigNumero)
*/

let tarefa = {id: 1, tarefa: "Estudr JS"}
console.log(tarefa)
console.log(tarefa.id)
console.log(tarefa.tarefa)

let tasks = [
    {id: 1, tarefa: "Estuda JS"},
    {id: 2, tarefa: "Praticar código"}
]

console.log(tasks)
console.log(tasks[0])
console.log(tasks[0]['id'])

let hoje = new Date()
console.log(hoje)

let pattern =/^[a-z]+$/i;
console.log(pattern)

