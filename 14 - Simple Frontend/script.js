let array = [1, 2, 3, 4, 5]

const leftButton = document.querySelector('.left-shift-button')
const rightButton = document.querySelector('.right-shift-button')
const boxes = document.getElementsByClassName('box')




leftButton.onclick = function () {
    array.push(array.shift());
    for (let k = 0; k < boxes.length; k++) {
        boxes[k].innerHTML = array[k]
    }
}

rightButton.onclick = function () {
    array.unshift(array.pop());
    for (let k = 0; k < boxes.length; k++) {
        boxes[k].innerHTML = array[k]
    }
}