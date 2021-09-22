import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [emojiDictionary, setEmojiDictionary] = useState({
    '😄': 'simle',
    '😠': 'angry',
    '😲': 'astonished',
    '😂': 'Tears of Joy '
  })

  const [emojiMeaning, setEmojiMeaning] = useState('')
  var faceEmoji = Object.keys(emojiDictionary)

  const handleChange = e => {
    let userInput = e.target.value
    console.log(userInput)
    console.log(emojiDictionary[userInput])

    if (userInput !== '') {
      let meaning = emojiDictionary[userInput]
      if (meaning === undefined) {
        setEmojiMeaning('Emoji not found')
      }
      setEmojiMeaning(meaning)
    } else {
      setEmojiMeaning('Output will shown here : ')
    }
  }

  const emojiClickHandler = emoji => {
    setEmojiMeaning(emojiDictionary[emoji])
  }

  return (
    <div className='container'>
      <h1 className='heading-one'>Emoji Basket </h1>
      <input
        type='text'
        onChange={handleChange}
        placeholder='Enter emoji or click on any emoji'
      />
      <h1>Name of this emoji is</h1>
      <h3 className="heading-three"> {emojiMeaning} </h3>
      <div className='emoji-data'>
        <ul className='list-non-bullet'>
          {faceEmoji.map(emoji => {
            return (
              <li
                className='list-item-inline'
                key={emoji}
                onClick={() => {
                  emojiClickHandler(emoji)
                }}
              >
                {emoji}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App
