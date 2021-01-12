import renderElement from '../tools/renderElement'

class QuestionGenerator {
  constructor() {

  }
  getPossibleModeIds(mode) {
    let possibleIds
    switch (mode) {
      case 'people':
        const peoplePossibleIds = [
          1, 2, 3, 4, 5, 6,  7, 8, 9, 10,  11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83]
        possibleIds = [...peoplePossibleIds]
        break;
      case 'vehicles':
        const vehiclesPossibleIds = [4,6,7,8,14,16,18,19,20,24,25,26,30,33,34,35,36,37,38,42]
        possibleIds = [...vehiclesPossibleIds]
        break;
      case 'starships':
        const starshipPossibleIds = [5,9,10,11,12,13,15,21,22,23,27,28,29,31,39,40,41,43,47,48]
        possibleIds = [...starshipPossibleIds]
        break
    }
    return possibleIds
  }

  getRandomNumber(maxRange) {
    const randomNumber = Math.floor(Math.random() * maxRange)
    return randomNumber
  }

  getFourRandomQuestionIds(mode) {
    const possibleIds = this.getPossibleModeIds(mode)
    const maxRange = possibleIds.length

    let randomIds = []
    let randomQuestionIds = []
    let lastId

    while (randomIds.length <= 3) {
      const randomId = this.getRandomNumber(maxRange)
      lastId = randomId
      if (!randomIds.includes(lastId)) {
        randomIds.push(randomId)
      }
    }
    randomIds.forEach(id => randomQuestionIds.push(possibleIds[id]))
    return randomQuestionIds
  }

  getQuestionId(mode) {
    const fourQuestionRandomIds = this.getFourRandomQuestionIds(mode)
    const randomId = Math.floor(Math.random() * fourQuestionRandomIds.length)
    const questionId = fourQuestionRandomIds[randomId]
    return questionId
  }

  fetchQuestion(mode) {
    const questionId = this.getQuestionId(mode)
    const url = `https://swapi.dev/api/${mode}/${questionId}`
    
    fetch(url)
      .then(res => {
        if (res.status === 200) {
         return res.json() 
        } else {
          throw Error('Nie ma takiego zasobu do pobrania')
        }
      })
      .then(data => {
        console.log(data)
        return data})
  }
}

export default QuestionGenerator