// js file
var elBtn = document.querySelector("#black-btn")
var elBtnWhite = document.querySelector("#white-btn")
var elHero = document.querySelector("#hero_section")

elBtn.addEventListener("click", function () {
    elHero.classList.toggle("bg-black")
    elHero.style = "green"
})

elBtnWhite.addEventListener("click", function () {
    elHero.classList.replace("bg-black", "bg-red")
})

var meva1 = "Olma"
var meva2 = "Anor"
var meva3 = "Nok"
var meva4 = "Shaftoli"

var mevalar = ["Olma", 3516351, null, undefined, [1, 2, 3, 4, [654, 65465, 654654]]];


var users = ["Avaz", "Ilhom", "Javohir", "O'ktam", "Kamol", "46546546546fsdgdfgsgsetuuo"]


// console.log(users.push("Ibrat")); //oxirgi o'ringa qo'shib beradi
// console.log(users);

// console.log(users.unshift("Kamol")); // Boshiga qo'shib beradi
// console.log(users);

// console.log(users.pop()); // oxiridan o'chiradi

// console.log(users.shift()); // Boshidan o'chiradi
var lastWord = users[users.length - 1]
var lastLetter = lastWord[lastWord.length - 1]
// console.log(lastWord, lastLetter);

for (var i = 0; i < users.length; i++) {
    var word = users[i];
    console.log(word);
    for (let k = 0; k < word.length; k++) {
        console.log(word[k]);
    }
    console.log(word);
}

console.log(Math.ceil(-3.65));


function normolizeNumbers(arrayOfNUmbers) {
    var result = []

    for (var i = 0; i < arrayOfNUmbers.length; i++) {
        var newNumber = arrayOfNUmbers[i]
        
        
        result.push(newNumber)
    }

    return result
}

var newArray = [3.02, -3.65, 20.25, -62.003]

console.log(normolizeNumbers(newArray));

// ---> [3, 4, 20, 62]