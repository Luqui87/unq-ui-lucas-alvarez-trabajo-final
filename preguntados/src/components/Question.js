import {  useEffect, useState } from "react";
import { getQuestions, postAnswer } from "../Api/api";
import '../dist/css/Question.css';
import Alert from 'react-bootstrap/Alert';
import { useNavigate, useSearchParams } from "react-router-dom";
import Final from "./Final";
import ProgressBar from 'react-bootstrap/ProgressBar';

function Question(){
    const [questions, setQuestions] = useState([])
    const [currentQuestion ,setCurrentQuestion] = useState("")
    const [order,setOrder]  = useState(0)
    const [loading,setLoading] = useState(true)
    const [respuestas, setRespuestas] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const [answer, setAnswer] = useState(false)
    const [porcentage, setPorcentage] = useState(0)

    let navigate = useNavigate()

    const [queryParams, setQueryParams] = useSearchParams();

    useEffect(() => {
        getQuestions(queryParams.get("difficulty"))
            .then (response => {
                    setQuestions(response)
                    setCurrentQuestion(response.at(0))
                } )
            .finally(() => {setLoading(false)})
      },[]);

    
    function handleAnswer(option){
        if(!showResult)
        postAnswer(currentQuestion.id, option)
        .then(response => {setAnswer(response.answer)
        setShowResult(true)
    })
        
    }

    function getAnser(){
        return answer
    }

    function nextQuestion(){
        setOrder(order + 1)
        setPorcentage(100 * (order +1) / questions.length )
        setShowResult(false)
        if (answer){
           setRespuestas(respuestas + 1)
        }
        if (order + 1 < questions.length){
            setCurrentQuestion(questions.at(order + 1))
        }
    }

    function VolverAJugar(){
        setLoading(true)
        getQuestions(queryParams.get("difficulty"))
            .then (response => {
                    setQuestions(response)
                    setCurrentQuestion(response.at(0))
                } )
        setOrder(0)
        setRespuestas(0)
        setShowResult(false)
        setAnswer(false)
        setPorcentage(0)
        setLoading(false)
    }
    
    if (loading ) return <div>Loading</div>

    if (order  === questions.length){
        return (
            <div>
                <Final cantCorrectAnswers = {respuestas} cantQuestions = {questions.length} VolverAJugar = {() => VolverAJugar()} />
            </div>
        )
    }
    
    return (
        <div className="container">
            <div className="Pregunta">
                {currentQuestion.question}
            </div>
            <div className="option1">
                <button className="button" onClick={() => handleAnswer("option1")}>{currentQuestion.option1}</button>
            </div>
            <div className="option2">
                <button className="button" onClick={() => handleAnswer("option2")} >{currentQuestion.option2}</button>
            </div>
            <div className="option3">
                <button className="button" onClick={() => handleAnswer("option3")}>{currentQuestion.option3}</button>
            </div>
            <div className="option4">
                <button className="button" onClick={() => handleAnswer("option4")}>{currentQuestion.option4}</button>
            </div>
            <div className="progressBar">
            <ProgressBar striped className="mt-10" animated variant="danger" now={porcentage} />
            </div>
            { showResult ? <Response answer = {() => getAnser()} nextQuestion = {() => nextQuestion()} /> : null}
            
        </div>
    );
}

export default Question;

function Response({answer, nextQuestion}){

    const [message, setMessage] = useState("")
    const [variant, setVariant] = useState("")

    useEffect(() => {
        if (answer()){
            setMessage("Correcto")
            setVariant('success')
        }
        else{
            setMessage("Incorrecto")
            setVariant('danger')
        }
      },[]);

    
    return(
        <div className="Respuesta">
            <Alert variant={variant}>
                {message}
            </Alert>
            
            <button className="button" onClick={() => nextQuestion()} >Siguiente Pregunta</button>
        </div>
    )
}
