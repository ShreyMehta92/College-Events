import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-links">
        {isAuthenticated ? (
          <>
            <Link to="/home">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/events">Events</Link>
            <a href="#" onClick={() => logout()}>
              Logout ({user?.name})
            </a>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 