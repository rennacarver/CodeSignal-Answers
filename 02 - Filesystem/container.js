/**
 * A container of integers that should support
 * addition, removal, and search for the median integer
 */
class Container {
    constructor() {
      this.container = []
    }
  
    /**
     * Adds the specified value to the container
     *
     * @param {number} value
     */
    add(value) {
      this.container.push(value)
      this.container.sort((a, b) => a - b)
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
     * Finds the container's median integer value, which is
     * the middle integer when the all integers are sorted in order.
     * If the sorted array has an even length,
     * the leftmost integer between the two middle
     * integers should be considered as the median.
     *
     * @return {number} the median if the array is not empty, or
     * @throws {Error} a runtime exception, otherwise.
     */
    getMedian() {
      if (this.container.length === 0)
        throw Error('container is empty')
      else if (this.container.length % 2 === 1){
        return this.container[Math.floor(this.container.length / 2)]
      } else {
        return this.container[(this.container.length / 2) - 1]
      }
    }
  
  }
  
  module.exports = Container;
  