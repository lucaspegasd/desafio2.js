let Name = prompt("Dígite o seu nome: ")
let gradeOne = prompt("Dígite a sua primeira nota: ")
let gradeTwo = prompt("Dígite a sua segunda nota: ")

function average(gradeOne, gradeTwo) {
    return ((Number(gradeOne) + Number(gradeTwo)) / 2).toFixed(2)
}

if (average(gradeOne, gradeTwo) >= 7.00) {
    alert(`a média do aluno ${Name} é de: ${average(gradeOne, gradeTwo)}
    parabéns ${Name}, você foi aprovado`)
} else {
    alert(`a média do aluno ${Name} é de: ${average(gradeOne, gradeTwo)}
    infelismente ${Name} você foi reprovado`)
}