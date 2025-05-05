import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="form-container" style={{ textAlign: 'center' }}>
      <h1 className="form-title">Welcome to College Event Planner</h1>
      <p style={{ marginBottom: '2rem' }}>
        College Event Planner
      </p>

      {isAuthenticated ? (
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/addevents" className="btn btn-primary">
            Add Events
          </Link>
          <Link to="/Events" className="btn btn-secondary">
            Show All Events
          </Link>
        </div>
      ) : (
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
          <Link to="/register" className="btn btn-secondary">
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home; 