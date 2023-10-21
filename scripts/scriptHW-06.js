//UpperCase заголовков для первого ряда карточек
let upperCaseTitle = document.querySelectorAll(".lectureCardsSet-01 h3")
for (let i = 0; i < upperCaseTitle.length; i++) {
    upperCaseTitle[i].innerHTML = upperCaseTitle[i].innerHTML.toUpperCase();
}

// Операции со строками
let textTwenty = document.querySelectorAll(".lectureCardsSet-01 p")
for (let i = 0; i < textTwenty.length; i++) {
    if (textTwenty[i].textContent.length > 20) {
       textTwenty[i].innerHTML = textTwenty[i].innerHTML.slice(0,20) + "..."
    }
}