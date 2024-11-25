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
    display: flex;
    gap: 15px;
    flex-direction: reverse-row;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    color: white;
    font-size: 1rem;
    font-weight: 500;
`;
const StyledFooter = styled.footer`

display: flex;
justify-content: center;
align-items: center;
padding: 10px 20px;
background-color: #4caf50;
position: relative;

`;
