import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ContextProvider } from './Context';
import Dificulty from './Dificulty';
import Question from './Question';


function App() {
  
  return (
    <ContextProvider>
    <Router>
      <Routes>
        <Route
          path="*"
          element={<Navigate to="/difficulty" replace />}
          />
        <Route path="/difficulty" element = {<Dificulty />} />
        <Route path="/question" element = {<Question />} />
      </Routes>
    </Router>
    </ContextProvider>
  );
}

export default App;
