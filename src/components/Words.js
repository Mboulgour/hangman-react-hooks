const wordsArr = [
  "dog",
  "cat",
  "elephant",
  "shark",
  "giraffe",
  "rhino",
  "lion",
]

export const randomWord = () => {
  return wordsArr[Math.floor(Math.random() * wordsArr.length)]
}