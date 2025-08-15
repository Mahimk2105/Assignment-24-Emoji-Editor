import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />         {/* Correct: Home page at root */}
      </Routes>
  
  );
}

export default App;
