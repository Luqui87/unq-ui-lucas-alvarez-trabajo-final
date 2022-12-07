import '../dist/css/Final.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Final({cantCorrectAnswers, cantQuestions, VolverAJugar}){


    let navigate = useNavigate()

    function HandleCambiarDificultad(){
        navigate("/difficulty")
    }

    function message(){
        if (cantCorrectAnswers > cantQuestions / 2){
            return "Felicitaciones acertaste"
        }
        else{
            return "Buen intento acertaste"
        }
    }

    

    return (
        <div className="Final">
            <p>{message()}</p>
            <p>{cantCorrectAnswers} / {cantQuestions}</p>
            <p>Preguntas</p>
            <button className="btn-hover color-11" onClick={() => HandleCambiarDificultad()}> Cambiar de dificultad</button>
            <button className="btn-hover color-11" onClick={() => VolverAJugar()}> Volver a intentar</button>
        </div>
    )
}

export default Final