import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import './Auth.css';

interface LoginProps {
  onToggleMode: () => void;
}

const Login: React.FC<LoginProps> = ({ onToggleMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? 'Logging in...' : 'Login'}
        </button>
        
        <p className="toggle-text">
          Don't have an account?{' '}
          <button type="button" onClick={onToggleMode} className="toggle-btn">
            Register
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;