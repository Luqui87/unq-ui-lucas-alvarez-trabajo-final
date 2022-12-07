import { useEffect, useState } from 'react';
import { getDificultades } from '../Api/api';
import '../dist/css/Dificulty.css';
import { useNavigate } from 'react-router-dom';

function Dificulty(){
    const [dificultades, setDificultades] = useState([]);

    let navigate = useNavigate()
  
    useEffect(() => {
        getDificultades()
        .then(dificultades => setDificultades(dificultades))
      },[])
  
  
    function renderDificultades(){
      return(
        <div className='dificultades'>
            {dificultades.map(dificultad => <button className="btn-hover color-11" key={dificultad} onClick={() => handleDifficulty(dificultad)}>{dificultad}</button>)}
        </div>
      )
    }

    function handleDifficulty(dificultad){
      navigate("/question?difficulty=" +dificultad)
    }
  
    if (dificultades.length === 0){
      return(
        <div className="difficulty">Loading</div>
      )
    }
    
    return (
      <div className="difficulty">
        <h1>Preguntados</h1>
        <img src="/logo.png" alt="Logo de Preguntados" className='logo'/>
        <h2>Seleccionar Dificultad</h2>
        {renderDificultades()}
      </div>
    );
  }

export default Dificulty;