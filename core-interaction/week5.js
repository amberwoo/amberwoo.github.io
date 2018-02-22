//get my input element
var myInput = document.getElementById("input")
console.log(myInput)


//detect when user typres in myInput
myInput.addEventListener ("input",onInput)

function onInput() {
//check if their input == password
var password = "secret"
console.log(myInput.value)
}
