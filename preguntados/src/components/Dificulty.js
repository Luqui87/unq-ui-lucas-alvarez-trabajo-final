import { useContext, useEffect, useState } from 'react';
import { getDificultades } from '../Api/api';
import '../dist/css/Dificulty.css';
import Button from 'react-bootstrap/Button';
import Context from './Context';
import { useNavigate } from 'react-router-dom';

function Dificulty(){
    const [dificultades, setDificultades] = useState([]);
    const {setDifficulty} = useContext(Context)

    let navigate = useNavigate()
  
    useEffect(() => {
        getDificultades()
        .then(dificultades => setDificultades(dificultades))
        .catch(error => console.error(error))
      },[])
  
  
    function renderDificultades(){
      if(dificultades.length === 0){
        return <div>Loading</div>
      }
      return(
        <div className='dificultades'>
            {dificultades.map(dificultad => <button class="btn-hover color-11" key={dificultad} onClick={() => handleDifficulty(dificultad)}>{dificultad}</button> )}
        </div>
      )
    }

    function handleDifficulty(dificultad){
        setDifficulty(dificultad)
        navigate("/question")
    }
  
    if (dificultades.length === 0){
      return(
        <div>Loading</div>
      )
    }
    
    return (
      <div className="App">
        <h1>Seleccionar Dificultad</h1>
        {renderDificultades()}
      </div>
    );
  }

export default Dificulty;