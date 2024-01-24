import React, {useState, useContext} from 'react';
import { Questions } from '../Helper/QuestionBank';
import { QuizContext} from '../Helper/Context';
import "../App.css"

const Quiz = () => {

const {score, setScore, setGameState} = useContext(QuizContext)
const  [currQuestion, setCurrQuestion] = useState(0);
const [optionChosen, setOptionChosen] = useState("");

const nextQuestion = () => {
    if(Questions[currQuestion].answer === optionChosen) {
     setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1)

}
    // alert(score)

   
    const finishQuiz = () => {
        if(Questions[currQuestion].answer === optionChosen) {
         setScore(score + 1);
        }
        setGameState("EndScreen")
    }
        // alert(score)
    
        

    

 

  return (
    <div className='Quiz'>
        <h2>{Questions[currQuestion].prompt}</h2>
        <div className='options'>
            <button onClick={() => setOptionChosen("A")}> {Questions[currQuestion].OptionA}{" "} </button>
            <button onClick={() => setOptionChosen("B")}> {Questions[currQuestion].OptionB}{" "} </button>
            <button onClick={() => setOptionChosen("C")}> {Questions[currQuestion].OptionC}{" "} </button>
            <button onClick={() => setOptionChosen("D")}> {Questions[currQuestion].OptionD}{" "} </button>
        </div>

<div className='next-button'>

        {currQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz}>  Finish Quiz </button>) 
        : (<button  onClick={nextQuestion }>Next Question</button>)}
</div>   

    </div>
  ) 
}


export default Quiz