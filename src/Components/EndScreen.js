import React, {useContext} from 'react';
import { QuizContext } from '../Helper/Context';
import { Questions } from '../Helper/QuestionBank';
import '../App.css'

const EndScreen = () => {
const {score, setScore, setGameState} = useContext(QuizContext)

const restartQuiz = () => {

  setScore(0);
  setGameState("menu")
}

  return (
    <div className='EndScreen'>
       
            {""}
            <h1>Quiz Finished</h1>
            <h3>{score}/{Questions.length}</h3>
            <button onClick={restartQuiz}>Restart Questions</button>

       

    </div>
  )
}

export default EndScreen
