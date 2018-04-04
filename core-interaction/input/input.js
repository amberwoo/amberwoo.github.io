var ai = document.getElementById("ai")
var xin = document.getElementById("xin")

ai.addEventListener("click", handleAiClick)

function handleAiClick() {
ai.style.left = "57%";
xin.style.left ="35%";
love.style.display ="none";
treasured.style.display ="block";
}

xin.addEventListener("click", handleXinClick)

function handleXinClick() {
xin.style.left = "57%";
ai.style.left ="35%";
love.style.display ="block";
treasured.style.display ="none";
}
