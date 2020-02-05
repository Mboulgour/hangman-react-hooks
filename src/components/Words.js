const wordsArr = [
  "sisi",
  "la",
  "famille"
]

export const randomWord = () => {
  return wordsArr[Math.floor(Math.random() * wordsArr.length)]
}