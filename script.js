let br = document.getElementById("rightButton")
let bl = document.getElementById("leftButton")

bl.addEventListener("click", function () { change(0) })
br.addEventListener("click", function () { change(1) })

let picture = 1

function change(nr) {
    if (picture === 1 && nr === 0 || picture === 5 && nr === 1) {
        return 0
    }
    if (nr === 1) {
        let nrImage = picture + 1
        document.getElementById("img").src = "img/" + nrImage + ".jpg"
        document.getElementById("imgNr").innerHTML = nrImage+"/5"
        picture++
    }
    if (nr === 0) {
        let nrImage = picture - 1
        document.getElementById("img").src = "img/" + nrImage + ".jpg"
        document.getElementById("imgNr").innerHTML = nrImage+"/5"
        picture--
    }
    inactive()
}
function inactive() {
    if (picture === 1) {
        let name = document.getElementById("leftButton")
        name.className = "inactiveButton"
    }
    if (picture !== 1) {
        let name = document.getElementById("leftButton")
        name.className = "sliderButton"
    }
    if (picture === 5) {
        let name = document.getElementById("rightButton")
        name.className = "inactiveButton"
    }
    if (picture !== 5) {
        let name = document.getElementById("rightButton")
        name.className = "sliderButton"
    }
}
document.addEventListener("DOMContentLoaded", function () {
    inactive()
})