const button = document.getElementById("clickMe")

button.addEventListener("click", handleClick);

function handleClick() {
    let counter = document.querySelector(".counter-value").innerHTML
    document.querySelector(".counter-value").innerHTML = parseInt(counter) + 1;
}