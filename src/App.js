import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/global.css'
import HomePage from './pages/home/home';
import ErrorPage from './pages/Error/ErrorPage'
import AboutPage from './pages/about/about'
import ContactUs from './pages/contact/ContactUs';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/error" element={<ErrorPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
