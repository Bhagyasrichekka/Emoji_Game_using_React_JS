// Write your code here.
import './index.css'

const NavBar = props => {
  const {navDetails} = props
  const {isGameActive, topScore, score, isWon} = navDetails

  return (
    <nav className="navbar">
      <div className="heading-logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {isGameActive && (
        <div className="score-topScore">
          <p>Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
