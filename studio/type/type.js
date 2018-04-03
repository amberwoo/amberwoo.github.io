var rose = document.getElementById("rose")
var flower = document.getElementById("flower")

rose.addEventListener("click", handleRoseClick)

function handleRoseClick() {
flower.style.opacity = "1";
rose.style.opacity = "0";
}

var important = document.getElementById("important")
important.addEventListener("click", onImportClick)

function onImportClick() {
  time.style.opacity ="1";
  wasted.style.opacity ="1";
  your.style.opacity ="1";
  rose2.style.opacity ="1";
}


window.addEventListener("scroll", onWindowScroll)

function onWindowScroll() {
    if (window.pageYOffset > 450) {
        important.style.left = "60%";

    // var word = ...;
    // word.classList.add('off');
    // // word.classList.remove('off');

    } else {
        important.style.left = "0";
    }
  }

// function onWindowScroll() {
//     if (window.pageYOffset > 500) {
//       var when =document.getElementById("when")
//       when.classList.add("off");
//
//     } else {
//         when.classList.remove("off");
//     }
// }

var secret1 = document.getElementById("secret1")
var and = document.getElementById("and")

secret1.addEventListener("click", handleSeClick)

function handleSeClick() {
and.style.opacity = "1";
simple.style.opacity ="1";
}


var four = document.getElementById("four")
var simple = document.getElementById("simple")

simple.addEventListener("click", handleSimClick)

function handleSimClick() {
simple.style.opacity = "0";
and.style.opacity ="0";
secret1.style.opacity ="0";
four.style.opacity ="1";
}

var heart = document.getElementById("heart")
heart.addEventListener("click", handleHeartClick)

function handleHeartClick() {
  heart.style.opacity = "0";
  heart2.style.opacity = "1";
  four.style.opacity = "0";
}

var invisible = document.getElementById("invisible")
heart2.addEventListener("click",handleHeart2Click)

function handleHeart2Click () {
  invisible.style.opacity =".1";
}
