import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './UserInputPage.css';

const UserInputPage = () => {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('science');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the viva page
    history.push('/viva');
  };

  return (
    <div className="user-input-page">
      <h2>Enter Your Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Topic:
          <select value={topic} onChange={(e) => setTopic(e.target.value)}>
            <option value="science">Science</option>
            <option value="tech">Tech</option>
            <option value="math">Math</option>
            <option value="philosophy">Philosophy</option>
          </select>
        </label>
        <div className="button-container">
          <button type="submit">Start Viva</button>
        </div>
      </form>
    </div>
  );
};

export default UserInputPage; 