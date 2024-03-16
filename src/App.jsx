import React, { useState } from 'react';
import './App.css';

function App() {
  const [teacherName, setTeacherName] = useState('Sofia');
  const [newTeacherName, setNewTeacherName] = useState('');

  const handleShowTeacher = (name) => {
    setTeacherName(name);
  };

  const handleChangeName = (event) => {
    event.preventDefault();
    if (newTeacherName.trim() !== '') {
      setTeacherName(newTeacherName.trim());
      setNewTeacherName('');
    }
  };

  const handleNewNameChange = (event) => {
    setNewTeacherName(event.target.value);
  };

  return (
    <div>
      <h2>Teacher's Name: {teacherName}</h2>
      <ul>
        <li onClick={() => handleShowTeacher('Data')}>Data</li>
        <li onClick={() => handleShowTeacher('Reyes')}>Reyes</li>
        <li onClick={() => handleShowTeacher('Yolanda')}>Yolanda</li>
        <li onClick={() => handleShowTeacher('Sofia')}>Sofia</li>
      </ul>

      <form onSubmit={handleChangeName}>
        <input
          type="text"
          value={newTeacherName}
          onChange={handleNewNameChange}
          placeholder="Enter a new name"
        />
        <button type="submit">Change</button>
      </form>
    </div>
  );
}

export default App;
