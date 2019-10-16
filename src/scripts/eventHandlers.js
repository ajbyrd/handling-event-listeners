
const articleEl = document.getElementById("message")

const outputEl = document.querySelectorAll("article")

articleEl.addEventListener("keyup", event => {
    outputEl[0].innerHTML = event.target.value
    outputEl[1].innerHTML = event.target.value

})
