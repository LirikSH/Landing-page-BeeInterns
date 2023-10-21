// HTML filter
let allLectureCardsSet1 = document.querySelector("#lectureCardsSet-04")
let htmlButton = document.querySelector("#htmlButton")
let cssButton = document.querySelector("#cssButton")
let jsButton = document.querySelector("#jsButton")

let htmlSet = []
let cssSet = []
let jsSet =[]

let jsZone = document.querySelector(".jsZone")

// Заполнение массивов данными из групп dataset
for (i=0; i<lectureCard.length; i++) {
    if (lectureCard[i].dataset.htmlcss=="HTML"){
        htmlSet.push(lectureCard[i])
    }
    if (lectureCard[i].dataset.htmlcss=="CSS"){
        cssSet.push(lectureCard[i])
    }
    if (lectureCard[i].dataset.jsreact=="JavaScript"){
        jsSet.push(lectureCard[i])
    }
}

// Фильтр HTML
htmlButton.onclick = function () {
    allLectureCardsSet.remove()
    removeFunction()
    
    allLectureCardsSet1.insertAdjacentHTML("beforeEnd", "<div class='lectureCardSetInput htmlZone allLectures'></div>")
    var htmlZone = document.querySelector(".htmlZone")

    for (i=0; i<htmlSet.length; i++) {
        htmlZone.insertAdjacentHTML("beforeEnd", "<div class='lectureCard'>" + htmlSet[i].innerHTML + "<div>")
    }
    numberLecture = htmlZone.children.length
}

// Фильтр CSS
cssButton.onclick = function () {
    allLectureCardsSet.remove()
    removeFunction()
    
    allLectureCardsSet1.insertAdjacentHTML("beforeEnd", "<div class='lectureCardSetInput cssZone allLectures'></div>")
    var cssZone = document.querySelector(".cssZone")

    for (i=0; i<cssSet.length; i++) {
        cssZone.insertAdjacentHTML("beforeEnd", "<div class='lectureCard'>" + cssSet[i].innerHTML + "<div>")
    }
    numberLecture = cssZone.children.length
}

// Фильтр JS
jsButton.onclick = function () {
    allLectureCardsSet.remove()
    removeFunction()

    allLectureCardsSet1.insertAdjacentHTML("beforeEnd", "<div class='lectureCardSetInput jsZone allLectures'></div>")
    var jsZone = document.querySelector(".jsZone")

    for (i=0; i<jsSet.length; i++) {
        jsZone.insertAdjacentHTML("beforeEnd", "<div class='lectureCard'>" + jsSet[i].innerHTML + "<div>")
    }
    numberLecture = jsZone.children.length
}

// Фильтр Все лекции
lectureTitle.onclick = function () {
    removeFunction()

    allLectureCardsSet1.insertAdjacentHTML("beforeEnd", "<div class='lectureCardSetInput allLectureCardsSet allLectures'></div>")
    var allLectureCardsSet = document.querySelector(".allLectureCardsSet")

    for (i=0; i<lectureArr.length; i++) {
        allLectureCardsSet.insertAdjacentHTML("beforeEnd", "<div class='lectureCard'>" + lectureArr[i].innerHTML + "<div>")
    }
    numberLecture = allLectureCardsSet.children.length
    lectureTitle.innerHTML = numberLecture + " лекций"
}

// Функция очищения карточек
function removeFunction() {
    let allLectures = document.querySelector("#lectureCardsSet-04 .allLectures")
    if (allLectures!=null) {
        allLectures.remove()
    }
}
