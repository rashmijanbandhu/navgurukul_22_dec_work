
// StudentCard.js
import React, { useEffect, useState } from 'react';
//import { firestore, doc, updateDoc } from './firebase';
import './styles.css';

const StudentCard = ({ student }) => {
  const [progressLevel, setProgressLevel] = useState('');
  const [progressColor, setProgressColor] = useState('');

  useEffect(() => {
    const determineProgressLevel = () => {
      const averageGrade = calculateAverageGrade();

      const highThreshold = 75;
      const mediumThreshold = 50;

      let color = '';
      let progress = '';
      if (averageGrade >= highThreshold) {
        color = 'green';
        progress = 'high';
      } else if (averageGrade >= mediumThreshold) {
        color = 'yellow';
        progress = 'medium';
      } else {
        color = 'red';
        progress = 'low';
      }

    

      // Set the color in the state
      setProgressColor(color);

      return progress;
    };

    setProgressLevel(determineProgressLevel());
  }, [student.grades, student.attendance]);

  const calculateAverageGrade = () => {
    const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / student.grades.length;
  };

  
  // return (
  //   <div style={{ border: `2px solid ${progressColor}`}}>
  //     <h2 style={{ color: progressColor }}>{student.name}</h2>
  //     <p>Average Grade: {calculateAverageGrade()}</p>
  //     <p>Attendance: {student.attendance}%</p>
  //     <p>Progress: {progressLevel}</p>
     
  //   </div>
  // );
  return (
    <div className={`student-card progress-${progressLevel.toLowerCase()}`}>
      <h2 className={`student-name`} style={{ color: progressColor }}>
        {student.name}
      </h2>
      <p>Average Grade: {calculateAverageGrade()}</p>
      <p>Attendance: {student.attendance}%</p>
      <p>Progress: {progressLevel}</p>
    </div>
  );
};

export default StudentCard;


