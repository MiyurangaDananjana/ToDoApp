import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './styles/global.css'
import HomePage from './pages/home/home';
import ErrorPage from './pages/Error/ErrorPage'
import AboutPage from './pages/about/about'
import ContactUs from './pages/contact/ContactUs';
import LoginPage from './pages/login/LoginPage.jsx'
import AdminPanel from './pages/admin/admin_main/AdminPanel.jsx';
import { isAuthenticated } from "./utils/auth";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/Login' element={<LoginPage />} />
          <Route path="*" element={<ErrorPage />} />

          {/* Protected Route */}
          <Route
            path="/admin"
            element={isAuthenticated() ? <AdminPanel /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
