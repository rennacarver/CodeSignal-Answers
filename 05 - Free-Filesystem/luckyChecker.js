/**
 * A number is lucky when it is divisible by 7 or when it contains a 7.
 */
const isLucky = (x) => {
    // TODO
    return x % 7 === 0 || (x.toString().includes('7'))
};

module.exports = {
    isLucky,
};