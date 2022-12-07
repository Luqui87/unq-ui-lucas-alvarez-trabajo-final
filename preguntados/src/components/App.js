import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dificulty from './Dificulty';
import Question from './Question';
import Final from './Final';


function App() {

  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={<Navigate to="/difficulty" replace />}
          />
        <Route path="/difficulty" element = {<Dificulty />} />
        <Route path="/question" element = {<Question />} />
        <Route path="/final" element = {<Final />} />
      </Routes>
    </Router>
  );
}

export default App;
