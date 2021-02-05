let br = document.getElementById("rightButton")
let bl = document.getElementById("leftButton")

bl.addEventListener("click", function () { change(0) })
br.addEventListener("click", function () { change(1) })

let picture = 1

function change(nr){
    if(picture===1 && nr===0 || picture===5 && nr===1){return 0}
    if(nr===1){
        let nrImage = picture + 1
        document.getElementById("img").src="img/"+nrImage+".jpg"
        picture++
    }
    if(nr===0){
        let nrImage = picture - 1
        document.getElementById("img").src="img/"+nrImage+".jpg"
        picture--
    }
}