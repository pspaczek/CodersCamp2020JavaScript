class QuestionGenerator {
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

  getFourRandomAnswerIds(mode) {
    const possibleIds = this.getPossibleModeIds(mode)
    const maxRange = possibleIds.length

    let randomIndexes = []
    let randomAnswerIds = []
    let lastIndex

    while (randomIndexes.length <= 3) {
      const randomIndex = this.getRandomNumber(maxRange)
      lastIndex = randomIndex
      if (!randomIndexes.includes(lastIndex)) {
        randomIndexes.push(randomIndex)
      }
    }
    randomIndexes.forEach(randomIndex => randomAnswerIds.push(possibleIds[randomIndex]))
    return randomAnswerIds
  }

  async fetchAnswer(mode, answerId) {
    const url = `https://swapi.dev/api/${mode}/${answerId}`
    const response = await fetch(url)
    const SWObject = await response.json()
    return SWObject.name
  }

  async fetchFourAnswers(mode, answersArray) {
    const randomAnswersIds = answersArray
    const answers = []
    randomAnswersIds.forEach((answerId) => {
      const answer = this.fetchAnswer(mode, answerId)
      answers.push(answer)
    })
    return Promise.all(answers)
      .then(answers => {return answers})
  }

  getCorrectAnswer(mode) {
    const randomAnswerIds = this.getFourRandomAnswerIds(mode)
    const randomIndex = Math.floor(Math.random() * randomAnswerIds.length)
    const correctAnswerId = randomAnswerIds[randomIndex]
    return {correctAnswerId, correctAnswerIndex : randomIndex, randomAnswerIds}
  }
  
  async returnAnswersObject(mode) {
    const answers = this.getCorrectAnswer(mode)
    const fetchedAnswers = await this.fetchFourAnswers(mode, answers.randomAnswerIds)
    const answersObject = {
      "image": `../../../static/assets/img/modes/${mode}/${answers.correctAnswerId}`,
      "answers": fetchedAnswers,
      "rightAnswer": fetchedAnswers[answers.correctAnswerIndex],
      rightAnswerId: answers.correctAnswerId,
      mode: mode
    }

    return answersObject
  }
}

export default QuestionGenerator