function solution(n) {
    const tensDigit = `${n}`.split('')[0]
    const onesDigit = `${n}`.split('')[1]

    return parseInt(tensDigit) + parseInt(onesDigit)
}
