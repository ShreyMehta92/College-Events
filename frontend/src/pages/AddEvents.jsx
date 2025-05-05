import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const Register = () => {
  const [title, settitle] = useState('');
  const [total_duration, settotal_duration] = useState('');
  const [Category, SetCategory] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      title:title,
      total_duration:total_duration,
      Category:Category
    }
    axios({
      method: 'post',
      url: '/api/events',
      data: body
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    if (!title || !total_duration || !Category ) {
      setError('Please fill in all fields');
      return;
    }
    

    try {
      setError('');
      setLoading(true);
      navigate('/events');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to register');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Create Event</h2>
      
      {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Title </label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email" className="form-label">Total Duration</label>
          <input
            type="Number"
            id="total_duration"
            className="form-control"
            value={total_duration}
            onChange={(e) => settotal_duration(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password" className="form-label">Category</label>
          <input
            type="text"
            id="Category"
            className="form-control"
            value={Category}
            onChange={(e) => SetCategory(e.target.value)}
            required
          />
        </div>
        
        
        <button 
          type="submit" 
          className="btn btn-primary" 
          style={{ width: '100%' }}
          disabled={loading}
        >
          {loading ? 'Creating Account...' : 'ADD'}
        </button>
      </form>
      
    </div>
  );
};

export default Register; 