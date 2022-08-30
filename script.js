const typedWord = document.querySelector(".type-effect")
const cursor = document.querySelector(".cursor")

const arrayWords = ["Frontend web developer", "Backend Web devoloper", "Web3 and Blockchain developer"]

let wordIndex = 0
let charaIndex = 0

let typeDalay = 200;
let eraseDalay = 100;
let newWordDelay = 2000

function typewrite(){
    if(charaIndex < arrayWords[wordIndex].length){
        if (!cursor.classList.contains("stop-blink")) {
            cursor.classList.add("stop-blink") 
        }

        typedWord.textContent += arrayWords[wordIndex].charAt(charaIndex);
        charaIndex++
        setTimeout(typewrite, typeDalay)
    }else{
        if (cursor.classList.contains("stop-blink")) {
            cursor.classList.remove('stop-blink')
        }
        setTimeout(eraseWord, newWordDelay)
    }
}


function eraseWord(){
    if (charaIndex > 0) {
        if(!cursor.classList.contains("stop-blink")){
            cursor.classList.remove("stop-blink")
        }   

        typedWord.textContent = arrayWords[wordIndex].substring(0, charaIndex -1)
        charaIndex--;

        setTimeout(eraseWord, eraseDalay)  
    }else{
        wordIndex++
        if(wordIndex >= arrayWords.length){
            wordIndex = 0
        }

        setTimeout(typewrite, typeDalay)
    }
}

typewrite()
