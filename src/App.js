import React, { useState } from 'react'
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
    if (userInput !== '') {
      let meaning = emojiDictionary[userInput]
      if (meaning === undefined) {
        console.log('Emoji not found in our data emojiDictionary ')
      }
      setEmojiMeaning(userInput)
    } else {
      setEmojiMeaning('Output will shown here : ')
    }
  }

  const emojiClickHandler = emoji => {
    setEmojiMeaning(emojiDictionary[emoji])
  }

  return (
    <div>
      <h1>Emoji Basket </h1>
      <input
        type='text'
        onChange={handleChange}
        placeholder='Enter emoji or click on any emoji'
      />
      <h1>
        Name this emoji <span>{emojiMeaning} hii</span>
        {/* {console.log(emojiMeaning)} */}
      </h1>

      {faceEmoji.map(emoji => {
        return (
          <p
            key={emoji}
            onClick={() => {
              emojiClickHandler(emoji)
            }}
          >
            {emoji}{' '}
          </p>
        )
      })}
    </div>
  )
}

export default App
