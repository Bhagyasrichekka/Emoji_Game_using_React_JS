// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmoji, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = eachEmoji

  const updateCount = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-card">
      <button className="emoji-btn" type="button" onClick={updateCount}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
