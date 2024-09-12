const { isLucky } = require('./luckyChecker.js');

for (let i = 1; i <= 100; i++) {
    if (isLucky(i)) {
        console.log(`Lucky!`)
    } else {
        console.log(i);
    }
}
