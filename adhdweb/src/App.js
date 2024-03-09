import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import HomePage from './MainPages/HomePage'; 
import AboutUs from './MainPages/AboutUs';
import Questionaire from './MainPages/Questionaire';

function App() {
  return (
    <Router>
      <div className="app-content">
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/Questionaire" element={<Questionaire />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;