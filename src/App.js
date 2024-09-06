import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/global.css'
import LoginPage from './pages/login/LoginPage';
import HomePage from './pages/home/home';
import Error from './pages/Error/ErrorPage'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/error" element={<Error/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
