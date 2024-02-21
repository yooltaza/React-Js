import {Link} from 'react-router-dom';

const Navbar = ({toggle, setToggle}) => {
    return (
        <nav style={{left:toggle && "0"}} className="navbar">
            <ul className="navbar-links">
                <Link to='/' onCLinkck={() => setToggle(false)} className="navbar-link">Home</Link>
                <Link to='/authors' onCLinkck={() => setToggle(false)} className="navbar-link">Authors</Link>
                <Link to='/about' onCLinkck={() => setToggle(false)} className="navbar-link">About Us</Link>
                <Link to='/contact' onCLinkck={() => setToggle(false)} className="navbar-link">Contact US</Link>
                <Link to='/register' onCLinkck={() => setToggle(false)} className="navbar-link">Register</Link>
            </ul>
        </nav>
    );
}

export default Navbar;