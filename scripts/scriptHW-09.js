// Вариант 2 реализации
const cardsDataset = {}
const cardsFeature = {}
const cards2 = {}

for (let i=0; i < lectureCard.length; i++) {
    cardsDataset[i] = lectureCard[i].attributes[1].nodeValue
    cardsFeature[i] = {
        title: lectureCard[i].attributes[1].nodeValue,
        description: "Описание лекции",
        date: "01.02.2022",
        image: "/example.png",
        label: "лекция"
    }
    cards2[cardsDataset[i]] =  (cardsFeature[i])
}
console.log(cards2)