import { Link } from 'react-router-dom';


import Navbar from './Navbar';


/**
 * Renders the header component.
 * @returns The JSX element representing the header component.
 */
const Header = () => {

    return (
        <header>
            <div className="container flex-row justify-space-between-lg justify-center align-center">
                <Link to="/">
                </Link>
   
                    <Navbar />
            </div>
        </header>
    );

}

export default Header;
