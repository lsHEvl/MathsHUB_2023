//var c = 15
//let a = "seven"
//a = 7
//const b = 8


//STRING
//const str1 = 'I\'m OK'
//const str2 = "Саша \nсказал: \"Привет\""
//const str3 = `I'm say ${str1}`
//console.log(str1)
//console.log(str2)
//console.log(str3)

//NUMBER
//+ - * / **
//const num1 = 576 / "8"
//const num2 = 17/0
//const rem = 8 * "a"
// Nan not a number
//const inf = 17/0
//console.log(rem)
//alert(num1)
//от -(2**53 -1) до (2**53 -1)
//console.log (99999999999999999999999)

//BIGINT
//const bigint = 10312031232013n
//console.log(bigint)

//BOOLEAN
// true / false
// > < >= <=  >== <== == ===
//const bool = 10>5
//console.log(bool)

//NULL
//let empty = null
//console.log(typeof empty)

// const variant = "option1"


//console.log (5=="5")
//console.log ("5"=="5")
//console.log ("abc">15)


//const userName  = prompt("Who you are?","anonim")
//if (userName === "admin") {
//    alert("Hello boss!")
//} else if (userName === "anonim" || !userName) {
//    alert("I dont no you...")
//} else {
//    alert(`Hi ${userName}`)
//}

//const counts = prompt("До скольки вы хотите досчитать", 20)
//let i = 10
// while (i <= counts) {
//     console.log(i++)
// }

// do {
//     console.log(i++)
// } while (i <= counts)
// console.log(i)


// const arr = []

// for (let i = 1; i<= 50; ++i) {
//     arr.push(i)
// }

//console.log (arr)
// for (let i = 1 i <=50; ++i) {
//     console.log(i)
// }

// const newArr = []


// for ( elem of arr) {
//     const marker = elem % 3
//    if (!marker) {
//         newArr.push(elem)
//    }
// }
// console.log(newArr)

// const obj = {
//     name: "Sasha",
//     age: 25,
//     city: "Voronej!"
// }
// for ( key in obj) {
//     console.log(key, obj[key])
//   }

//declaration
//console.log(scream(15, 10))
// function scream (a, b) {
//     // const result = a * b
//     // return result
//     return a*b
// }
//scream()
//console.log(scream(15, 10))

// expression
//wowScream(0)
// const wowScream = function() {
//     alert("WOOOW")
// }

// arrow
// const arrow = () => {
//     alert("arrow is in the sky")
// } 
// // arrow()

const getRandomNumInRange = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

const getTask = () => {
    const symbol = (Math.random() > 0.5) ? "+" : "-"
    const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(task)
    return task
}

const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
}

const gameElements = document.getElementById("my_game").children
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProcess: false,
    rightAnswer: null,
}

const startGameFunc = () => {
    if (!gameState.taskInProcess) {
        title.innerText = "Игра началась"
        userAnswer.value = null
        userTask.innerText = getTask()
        userAnswer.hidden = false
        btnGame.innerHTML = "Проверить!"
        toggleGameState()
    } else {
        const isRight = gameState.rightAnswer == userAnswer.value
        userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
        title.innerText = (isRight) ? "Вы победили!" : "Вы проиграли!"
        btnGame.innerHTML = "Начать заново!"
        toggleGameState()
    }
}
btnGame.addEventListener("click", startGameFunc)


const choosedEl = document.querySelectorAll(".choosed_block-container > div")
const counterEl = document.querySelector(".choosed_block span")

const choosed_State = {
    countElements: 0,
}
const changeCount = (value) => {
    choosed_State.countElements += value
    counterEl.innerText = choosed_State.countElements
}

const eventFunc = (e) => {
    if (e.target.className === "") {
        e.target.className = "choosed_element"
        changeCount(1)
    } else {
        e.target.className = ""
        changeCount(-1)
    }
}

for (let i = 0; i < choosedEl.length; i++) {
    choosedEl[i].addEventListener("click", eventFunc)
}
// choosedEl[2].removeEventListener("click", eventFunc)
// userAnswer.addEventListener("keydown", (e) => {
//     // console.log(e)
//     if (e.key === "Enter") {
//         startGameFunc()   
//     } else if (e.key === "Escape") {
//         userAnswer.blur()
//     }
// })

const timeIsOver = () => {
    alert("Время вышло!")
}
// setTimeout(timeIsOver, 2000)

//const alarm = setInterval(timeIsOver, 3000)



const alarm = setInterval(() => {
    let wantToSleep = confirm("Хотите ли вы спать?")
    if (wantToSleep) {
        console.log("tic")
    } else {
        clearInterval(alarm)
    }
}, 3000)

//clearInterval(alarm)


//  console.log("1")
//  setTimeout(()=>{
//     console.log("2")
// }, 0)
// console.log("3")

const postsBlock = document.querySelector(".posts_block-container")
const showPostsBTN = document.querySelector(".posts_block button")

const func = () => 5


function addPost(title, body) {
    const postsTitle = document.createElement("h3")
    const postsBody = document.createElement("span")
    const postItem = document.createElement("p")

    postsTitle.innerText = title
    postsBody.innerText = body

    postItem.append(postsTitle, postsBody)
    postsBlock.append(postItem)
}

function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            return res.json()
        })
        .then(data => {
            for (el of data) [
                addPost(el.title, el.body)
            ]
            // addPost(data[7].title, data[7].body)
        })
        .catch(err => console.log(err.message))
}

// function createPost(title, body, userId) {
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: `POST`,
//         body: JSON.stringify({
//             // title: title,
//             // body: body,
//             // userId: userId,
//             title,
//             body,
//             userId,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8'
//         },
//     })
//         .then(res => {
//             console.log(res)
//         })
//         .catch(err => console.log(err.message))
// }

// createPost("title", "body", 15)


// showPostsBTN.onclick = () => {getPosts()}
getPosts()



const getRandomAnswer = (question) => {

    return (Math.random() > 0.5) ? "YES!" : "No("

}

console.log("Всё будет хорошо?")
