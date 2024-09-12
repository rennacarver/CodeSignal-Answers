function pyramid(N) {
    for (let i = 1; i <= N; i++) {
        console.log(`${' '.repeat((N - i))}${'*'.repeat((2 * i - 1))}${' '.repeat((N - i))}`)
    }
}

pyramid(10)
