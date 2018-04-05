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
    if (window.pageYOffset > 600) {
        important.style.left = "60%";

    // var word = ...;
    // word.classList.add('off');
    // // word.classList.remove('off');

    } else {
        important.style.left = "0";
    }
    var when =document.getElementById("when")
    var one = document.getElementById("one")

    if (window.pageYOffset > 2200) {
      when.classList.remove("org");
      one.classList.remove("org");
      is2.classList.remove("org");
      so.classList.remove("org");
      sad.classList.remove("org");

    } else {
        when.classList.add("org");
        one.classList.add("org");
        is2.classList.add("org");
        so.classList.add("org");
        sad.classList.add("org");
    }

}



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
  if (simple.style.opacity == "1") {
    simple.style.opacity = "0";
    and.style.opacity ="0";
    secret1.style.opacity ="0";
    four.style.opacity ="1";
  }
}

var heart = document.getElementById("heart")
heart.addEventListener("click", handleHeartClick)

function handleHeartClick() {

    heart.style.opacity = "0";
    heart2.style.opacity = "1";
    four.style.opacity = "0";
  }


var five = document.getElementById("five")
heart2.addEventListener("click",handleFiveClick)

function handleFiveClick () {

    five.style.opacity ="1";
  }


var what = document.getElementById("what")
what.addEventListener("mouseover",handleWhatMouseover)

function handleWhatMouseover () {
  what.style.opacity ="0";
}

var is4 = document.getElementById("is4")
is4.addEventListener("mouseover",handleIs4Mouseover)

function handleIs4Mouseover () {
  is4.style.opacity ="0";
}

var essential = document.getElementById("essential")
essential.addEventListener("mouseover",handleEssMouseover)

function handleEssMouseover () {
  essential.style.opacity ="0";
}

var is5 = document.getElementById("is5")
is5.addEventListener("mouseover",handleIs5Mouseover)

function handleIs5Mouseover () {
  is5.style.opacity ="0";
}

var invisible = document.getElementById("invisible")
invisible.addEventListener("mouseover",handleInviMouseover)

function handleInviMouseover () {
  invisible.style.opacity ="0";
}

var to = document.getElementById("to")
to.addEventListener("mouseover",handleToMouseover)

function handleToMouseover () {
  to.style.opacity ="0";
}

var the3 = document.getElementById("the3")
the3.addEventListener("mouseover",handleThe3Mouseover)

function handleThe3Mouseover () {
  the3.style.opacity ="0";
}

var eyes = document.getElementById("eyes")
eyes.addEventListener("mouseover",handleEyesMouseover)

function handleEyesMouseover () {
  eyes.style.opacity ="0";
}
