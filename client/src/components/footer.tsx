import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
/**
 * Footer component for the application.
 * 
 * @returns The rendered Footer component.
 */
const Footer: React.FC = () => {
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
        <StyledFooter className="bg-dark text-light p-4">
            <div className="container flex-row justify-space-between-lg justify-center align-center">
                <StyledButton onClick={handleGoBack}>Go Back</StyledButton>
                <h4>&copy; {new Date().getFullYear()} - team 7</h4>
            </div>
        </StyledFooter>
    )
}

export default Footer;

// Styled Components
const StyledButton = styled.button`
    background-color: pink;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;
const StyledFooter = styled.footer`
    background-color: #4caf50;
   align-items: center;
   align-content: center;
    `;
    