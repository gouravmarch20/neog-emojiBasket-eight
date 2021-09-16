import React, { useState } from 'react'
// import EmogiDisplay from './EmogiDisplay'
const App = () => {
  const [emojiDictionary, setEmojiDictionary] = useState({
    '😄': 'simle',
    '😠': 'angry',
    '😲': 'astonished'
  })
  const [display, setDisplay] = useState('')
  const handleChange = e => {
    let userInput = e.target.value
    if (userInput !== '') {
      let meaning = emojiDictionary[userInput]
      setDisplay(meaning)
    } else {
      console.log(emojiDictionary[userInput])
      console.log(emojiDictionary.userInput)
    }
  }
  var emojiKey = Object.keys(emojiDictionary)
  console.log(emojiKey)
  const emojiValue = emojiKey => {
    // console.log(emojiDictionary[emojiKey])
    setDisplay(emojiDictionary[emojiKey])
  }

  return (
    <div>
      <h1>Flag React</h1>
      <input type='text' onChange={handleChange} />
      <h1>{display}</h1>

      {emojiKey.map(emojiKey => {
        return (
          <p
            key={emojiKey}
            onClick={() => {
              emojiValue(emojiKey)
            }}
          >
            {emojiKey}{' '}
          </p>
        )
      })}
    </div>
  )
}

export default App
