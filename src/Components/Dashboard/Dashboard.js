import React, { useState, useEffect } from 'react';
import './Dashboard.css'; // Import the CSS file

const SideDashboard = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState('');



  const handleAddItem = () => {
    // Add the new item to the data array
    setData([...data, newItem]);
    setNewItem('');
  };

  const handleDeleteItem = (index) => {
    // Remove the item at the specified index from the data array
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  return (
    <div className="side-dashboard">
      <div className="sidebar">
        <h1>Dashboard</h1>
        <ul className="sidebar-menu">
          <li className="sidebar-menu-item ">Add Task</li>
          <li className="sidebar-menu-item">Get Task</li>
          <li className="sidebar-menu-item">Update Task</li>
        </ul>
      </div>
    </div>
  );
};

export default SideDashboard;