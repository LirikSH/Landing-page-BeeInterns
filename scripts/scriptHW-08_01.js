let allLectureCardsSet = document.querySelector(".inputCards-04")
let lectureCard = document.querySelectorAll(".lectureCard")
let lectureTitle = document.getElementById("lectureTitle")
let lectureArr = []


window.onload = function () {
    for (i=0; i < lectureCard.length; i++) {
    // Заполнение массива
    lectureArr.push(lectureCard[i])

    
    // Создание карточек в списке  'все лекции'
    allLectureCardsSet.insertAdjacentHTML("beforeEnd", "<div class='lectureCard'>" + lectureArr[i].innerHTML + "<div>")
    }

    // Вычислений кол-ва лекций
    let numberLecture = allLectureCardsSet.children.length
    lectureTitle.innerHTML = numberLecture + " лекций"
}



