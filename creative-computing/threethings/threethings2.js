var heart = document.getElementById('heart')

heart.addEventListener("click", handleHtClick)

function handleHtClick() {
	document.body.style.backgroundColor = "lightblue"
}

var pinkC = document.getElementById('circle2')

pinkC.addEventListener("click", handlePClick)

function handlePClick() {
	document.body.style.backgroundColor = "pink"
}

document.addEventListener("keypress", handleKeyPress)

function handleKeyPress(evt) {
    console.log(evt)

    var percentage = evt.key / 9
    console.log(percentage)

    var targetHeight = percentage * document.body.scrollHeight
    console.log(targetHeight)

    window.scrollTo(0, targetHeight)
}