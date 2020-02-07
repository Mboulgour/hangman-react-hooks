const wordsArr = [
  "uranus",
  "earth",
  "jupiter",
  "mercury",
  "venus",
  "mars",
  "neptune",
  "saturn",
  "endor",
  "coruscant",
  "dagobah",
  "hoth",
  "tatooine",
]

export const randomWord = () => {
  return wordsArr[Math.floor(Math.random() * wordsArr.length)]
}


