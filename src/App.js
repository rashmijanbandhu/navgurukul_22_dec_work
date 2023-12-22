// App.js

import React from 'react';
import StudentList from './components/StudentList';
import logo from './Logo.png';
import './components/styles.css';
// function App() {
//   return (
//     <div>
//       <img src={logo} alt="Logo" />
//       <h1>Student Progress Tracker</h1>
//       <StudentList />
//     </div>
//   );
// }
function App() {
  return (
    <div className="container">
      <center><img src={logo} alt="Logo" /></center>
      <h1 className="header">Student Progress Tracker</h1>
      <StudentList />
    </div>
  );
}

export default App;
