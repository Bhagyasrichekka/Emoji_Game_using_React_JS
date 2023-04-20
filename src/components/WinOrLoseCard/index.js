// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {details, onClickPlayAgain} = props
  const {isWon, score} = details
  const isWonOrLose = isWon ? 'You Won' : 'You Lose'
  const finalScore = score === 12 ? 'Best Score' : 'Score'
  const imgUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const totalScore = `${score}/${12}`
  const updateScore = () => {
    onClickPlayAgain(score)
    console.log(score)
  }

  return (
    <div className="won-or-lose-card">
      <div>
        <h1 className="heading">{isWonOrLose}</h1>
        <p className="score-text">{finalScore}</p>
        <p className="score">{totalScore}</p>
        <button onClick={updateScore} className="play-again-btn" type="button">
          Play Again
        </button>
      </div>
      <img className="win-or-lose-img" src={imgUrl} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
