const IntegerContainerInterface = require('./integerContainerInterface');

class IntegerContainer extends IntegerContainerInterface {
    constructor() {
        super();
        // TODO: implement
        this.container = []
    }

    // TODO: implement interface methods here
    /**
       * Adds the specified value to the container
       *
       * @param {number} value
       */
    add(value) {
        this.container.push(value)
        return this.container.length
    }

    /**
     * Attempts to delete one item of the specified value from the container
     *
     * @param {number} value
     * @return {boolean} true, if the value has been deleted, or
     *                   false, otherwise.
     */
    delete(value) {
        const index = this.container.findIndex((element) => element === value)
        if (index > -1) {
            this.container.splice(index, 1);
            return true
        } else
            return false
    }


    /**
    * Should return the median integer - the integer in the middle
    * of the sequence after all integers stored in the container
    * are sorted in ascending order.
    * If the length of the sequence is even, the leftmost integer
    * from the two middle integers should be returned.
    * If the container is empty, this method should return `null`.
    *
    * @returns {number | null}
    */
    getMedian() {
        this.container.sort((a, b) => a - b)
        if (this.container.length === 0)
            return null
        else if (this.container.length % 2 === 1) {
            return this.container[Math.floor(this.container.length / 2)]
        } else {
            return this.container[(this.container.length / 2) - 1]
        }
    }
}

module.exports = IntegerContainer;
