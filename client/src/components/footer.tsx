import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Footer component for the application.
 * 
 * @returns The rendered Footer component.
 */
const Footer: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    /**
     * Handles the go back functionality.
     * If the window history length is greater than 1, it navigates back.
     * Otherwise, it navigates to the home page.
     */
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