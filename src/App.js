import React, { useState } from 'react'
import './App.css'
import Footer from './Footer'
const App = () => {
  const [emojiDictionary, setEmojiDictionary] = useState({
    '😄': 'simle',
    '😠': 'Angry',
    '😲': 'astonished',
    '😂': 'Tears of Joy ',
    '😋': 'Hungry ',
    '🤑': 'Rich ',
    '😈': 'Angry Face  ',
    '😴': 'Sleeping ',
    '😎': 'Sunglasses ',
    '😍': 'Heart Face ',
    '🚀': 'Very quickly ',
    '🔥': 'fire ',
    '🥳': 'celebrating joyous occasion ',
    '🤩': 'beloved celebrity '
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
      <header>
        <h1 className='hero-heading'>Emoji Basket </h1>
      </header>
      <input
        type='text'
        onChange={handleChange}
        placeholder='Enter emoji or click on any emoji'
      />
      <h3 className='heading-three'> {emojiMeaning} </h3>
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
      <Footer />
    </div>
  )
}

export default App
