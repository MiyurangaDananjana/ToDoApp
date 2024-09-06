import './Error.css'
import img_hottel from '../../assets/hottel_page.png'
import { useNavigate } from 'react-router-dom'; 

const ErrorPage = () => {

    const navigate = useNavigate(); // Initialize useNavigate

    const handleBackToHome = () => {
      navigate('/home'); // Navigate to the home page
    };

    return (
        <div>
            <div className="container">
                <div className="error-message">40 <span>4</span></div>
                <div className="image-container">
                    <img className="img-hottel" src={img_hottel} alt="img" />
                </div>
                <div>
                    <button onClick={handleBackToHome}>Back to Home</button>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;
