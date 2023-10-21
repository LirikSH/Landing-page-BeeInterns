// Скрипт раскрывающегося меню 

let elemList = document.querySelectorAll('.list')
let secondList = document.querySelectorAll('.secondList')
let rotateButton = document.querySelectorAll('.list button')

for (let i = 0; i < elemList.length; i++) {
    elemList[i].onclick = function () {
        if (secondList[i].classList.contains("invisible")) {
            secondList[i].classList.remove("invisible")
            rotateButton[i].classList.remove("rotate")
    }
    else {
        rotateButton[i].classList.add("rotate")
        secondList[i].classList.add("invisible")   
    }
}
}


