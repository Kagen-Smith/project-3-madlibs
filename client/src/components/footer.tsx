import { useLocation, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoBack = () => {
        if(window.history.length > 1) {
            navigate(-1);
        } else {
            navigate('/');
        }
    }
    return (
        <footer className="bg-dark text-light p-4">
            <div className="container flex-row justify-space-between-lg justify-center align-center">
                <button onClick={handleGoBack}>Go Back</button>
                <p>{location.pathname}</p>
                <h4>&copy; {new Date().getFullYear()} - team 7</h4>
            </div>
        </footer>
    )
}

export default Footer;