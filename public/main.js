
const suits = ['hearts', 'spades', 'clubs', 'diamonds']
const faces = [
  { name: 'Ace', value: 1 },
  { name: 'Two', value: 2 },
  { name: 'Three', value: 3 },
  { name: 'Four', value: 4 },
  { name: 'Five', value: 5 },
  { name: 'Six', value: 6 },
  { name: 'Seven', value: 7 },
  { name: 'Eight', value: 8 },
  { name: 'Nine', value: 9 },
  { name: 'Ten', value: 10 },
  { name: 'Jack', value: 11 },
  { name: 'Queen', value: 12 },
  { name: 'King', value: 13 }
]
let deck = []

let firstCard = {}
let secondCard = {}

const createDeck = () => {
  for (let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
    for (let faceIndex = 0; faceIndex < faces.length; faceIndex++) {
      deck.push({
        suit: suits[suitIndex],
        name: faces[faceIndex].name,
        value: faces[faceIndex].value
      })
      // faces[faceIndex].name + ' of ' + suits[suitIndex]
      // const listItem = document.createElement('li')
      // listItem.textContent = faces[faceIndex] + ' of ' + suits[suitIndex]
      // // listItem.textContent = deck
      // document.querySelector('.deck').appendChild(listItem)
    }
  }
  // console.log(deck)
}

const randomFirstCard = () => {
  const randomNumber = Math.random()
  // console.log(randomNumber)
  const randomIndexNumber = randomNumber * 52
  // console.log(randomIndexNumber)
  const roundedRandomIndex = Math.ceil(randomIndexNumber)
  // console.log(roundedRandomIndex)
  // const card = document.createElement('p')
  // card.textContent = deck[roundedRandomIndex]
  firstCard = deck[roundedRandomIndex]
  document.querySelector('#firstCard').textContent = firstCard.name + ' of ' + firstCard.suit
  // document.querySelector('.deck').appendChild(card)
}

const randomSecondCard = () => {
  const randomIndex = Math.ceil(Math.random() * 52)
  // sting interpolation
  secondCard = deck[randomIndex]
  document.querySelector('#secondCard').textContent = `${secondCard.name} of ${secondCard.suit}`
}

// const thirdCard = (index) => {
//   document.querySelector('#thirdCard').textContent = `${deck[index].name} of ${deck[index].suit}`
// }

const compareCardValues = () => {
  if (firstCard.value > secondCard.value) {
    console.log(firstCard.value, secondCard.value)
    document.querySelector('#winner').textContent = 'First card wins'
  } else if (secondCard.value > firstCard.value) {
    document.querySelector('#winner').textContent = 'Second card wins'
  } else {
    document.querySelector('#winner').textContent = 'Draw'
  }
}

const main = () => {
  createDeck()
  document.querySelector('#newFirstCard').addEventListener('click', randomFirstCard)
  document.querySelector('#newSecondCard').addEventListener('click', randomSecondCard)
  document.querySelector('#newThirdCard').addEventListener('click', compareCardValues)

  // randomSecondCard()
  // for (let i = 0; i < suits.length; i++) {
  //   // console.log(suits[i])
  //   const listItem = document.createElement('li')
  //   listItem.textContent = suits[i]
  //   document.querySelector('.deck').appendChild(listItem)
  // }

  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

document.addEventListener('DOMContentLoaded', main)
