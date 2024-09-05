import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/global.css'
import LoginPage from './pages/login/LoginPage';
import HomePage from './pages/home/home';
import ErrorPage from './pages/Error/ErrorPage'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/error" element={<ErrorPage/>}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
