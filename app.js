const soma = (a, b) => {
    return a + b
}

const divisao = (a, b) => {
    return a / b
}

const multiplicacao = (a, b) => {
    return a * b
}

const subtracao = (a, b) => {
    return a - b
}

const parseMethod = method => {
    switch (method) {
      case 'multiplicacao':
        return 'Multiplicação'
      case 'subtracao':
        return 'Subtração'
      case 'divisao':
        return 'Divisão'
      case 'soma':
        return 'Soma'
    }
    return 'Sem operação'
}

const calcular = (a, b, method) => {
    return `O resultado para ${parseMethod(method.name)} é ${method(a, b)}`
}

calcular(10,2, multiplicacao)
console.log(calcular(10,2, multiplicacao))