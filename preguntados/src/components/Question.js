import { useContext, useEffect, useState } from "react";
import { getQuestions } from "../Api/api";
import Context from "./Context";
import '../dist/css/Question.css';
import Card from 'react-bootstrap/Card';

function Question(){
    const {difficulty} = useContext(Context)
    const [questions, setQuestions] = useState([])
    const [currentQuestion ,setCurrentQuestion] = useState("")
    const [order,setOrder]  = useState(0)
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        getQuestions()
            .then (response => {
                    setQuestions(response)
                } )
            .catch(error => console.error(error))
            .finally(() => {setLoading(false)})
      },[]);

    
    function handleAnswer(){
        setOrder( order + 1)
    }
    
    if (loading) return <div>Loading</div>
    
    return (
        <div className="container">
            <div className="Pregunta">
                <Card >
                    <Card.Body>{questions.at(order).question}</Card.Body>
                </Card>
            </div>
            <div className="option1">
                <button class="button" onClick={() => handleAnswer()}>{questions.at(order).option1}</button>
            </div>
            <div className="option2">
                <button class="button">{questions.at(order).option2}</button>
            </div>
            <div className="option3">
                <button class="button">{questions.at(order).option3}</button>
            </div>
            <div className="option4">
                <button class="button">{questions.at(order).option4}</button>
            </div>
        </div>
    );
}

export default Question;