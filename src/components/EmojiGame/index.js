/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    isGameActive: true,
    topScore: 0,
    clickedEmojisIds: [],
    isWon: false,
  }

  finishGame = isWon => {
    if (isWon) {
      this.setState({isWon: true})
    } else {
      this.setState({isWon: false})
    }
  }

  checkTopScore = () => {
    const {clickedEmojisIds, topScore} = this.state
    if (clickedEmojisIds.length > topScore) {
      this.setState({topScore: clickedEmojisIds.length})
    }
  }

  onClickEmoji = id => {
    const {clickedEmojisIds} = this.state
    if (clickedEmojisIds.includes(id)) {
      this.finishGame(false)
      this.setState({isGameActive: false})
    } else if (clickedEmojisIds.length === 11) {
      this.setState(prevState => ({
        clickedEmojisIds: [...prevState.clickedEmojisIds, id],
      }))
      this.finishGame(true)
      this.setState({isGameActive: false})
    } else {
      this.setState(prevState => ({
        clickedEmojisIds: [...prevState.clickedEmojisIds, id],
      }))
    }
    this.checkTopScore()
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const shuffledList = shuffledEmojisList()
    this.setState({emojisList: shuffledList})
  }

  onClickPlayAgain = score => {
    const {topScore} = this.state
    if (score > topScore) {
      this.setState({topScore: score})
    }
    this.setState({clickedEmojisIds: [], isGameActive: true})
  }

  wonOrLose = () => {
    const {emojisList} = this.props
    const {isGameActive, isWon, clickedEmojisIds} = this.state
    const score = clickedEmojisIds.length
    const details = {isWon, score}
    if (isGameActive) {
      return (
        <ul className="emojis-list">
          {emojisList.map(eachEmoji => (
            <EmojiCard
              key={eachEmoji.id}
              eachEmoji={eachEmoji}
              onClickEmoji={this.onClickEmoji}
            />
          ))}
        </ul>
      )
    }
    return (
      <WinOrLoseCard
        details={details}
        onClickPlayAgain={this.onClickPlayAgain}
      />
    )
  }

  render() {
    const {isGameActive, topScore, clickedEmojisIds, isWon} = this.state
    const score = clickedEmojisIds.length
    const navDetails = {isGameActive, topScore, score, isWon}

    return (
      <div className="bg">
        <NavBar navDetails={navDetails} />
        {this.wonOrLose()}
      </div>
    )
  }
}

export default EmojiGame
