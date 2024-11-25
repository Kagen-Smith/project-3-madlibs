import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from './Navbar';


/**
 * Renders the header component.
 * @returns The JSX element representing the header component.
 */
const Header = () => {

    return (
        <StyledHeader className="bg-dark text-light p-4">
            <div className="container flex-row justify-space-between-lg justify-center align-center">
                <Link to="/">
                </Link>
   
                    <Navbar />
            </div>
        </StyledHeader>
    );

}

export default Header;
// Styled Components
const StyledHeader = styled.header`
    background-color: #4caf50;
   
    `