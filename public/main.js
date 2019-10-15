
const suits = ['hearts', 'spades', 'clubs', 'diamonds']
const faces = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
let deck = []

const createDeck = () => {
  for (let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
    for (let faceIndex = 0; faceIndex < faces.length; faceIndex++) {
      deck.push(faces[faceIndex] + ' of ' + suits[suitIndex])
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
  console.log(deck[roundedRandomIndex])
  document.querySelector('#firstCard').textContent = deck[roundedRandomIndex]
  // document.querySelector('.deck').appendChild(card)
}

const randomSecondCard = () => {
  const randomIndex = Math.ceil(Math.random() * 52)
  document.querySelector('#secondCard').textContent = deck[randomIndex]
}

const thirdCard = (index) => {
  document.querySelector('#thirdCard').textContent = deck[index]
}

const main = () => {
  createDeck()
  console.log(deck)
  document.querySelector('#newFirstCard').addEventListener('click', randomFirstCard)
  document.querySelector('#newSecondCard').addEventListener('click', () => randomSecondCard())
  document.querySelector('#newThirdCard').addEventListener('click', () => thirdCard(39))

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
