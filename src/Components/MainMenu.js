import React, {useContext} from 'react';
import { QuizContext } from '../Helper/Context';
import '../App.css'

const MainMenu = () => {
const {gameState, setGameState} = useContext(QuizContext)

  return (
    <div className='Menu'>
        <button onClick={() => setGameState("Quiz")} >
            Start Quiz
        </button>

    </div>
  )
}

export default MainMenu
