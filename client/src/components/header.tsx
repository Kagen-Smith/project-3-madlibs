import { Link } from 'react-router-dom';
import { type MouseEvent } from 'react';
import AuthService from '../utils/auth';
import Navbar from './Navbar';


/**
 * Renders the header component.
 * @returns The JSX element representing the header component.
 */
const Header = () => {
    const logout = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        AuthService.logout();
    };
    return (
        <header className="bg-dark text-light p-4">
            <div className="container flex-row justify-space-between-lg justify-center align-center">
                <Link to="/">
                    <h1>MadLibs</h1>
                </Link>
                <nav className="text-center">
                    {AuthService.loggedIn() ? (
                        <>
                            <Link to="/me">My Profile</Link>
                            <button onClick={logout}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </>
                    )}
                    <Navbar />
                </nav>
            </div>
        </header>
    );
}

export default Header;