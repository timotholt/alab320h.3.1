import React from 'react';

function Score({ score }) {
  return (
    <li>
      <span>Date: {score.date}</span>:&nbsp;
      <span>Score: {score.score}</span>
    </li>
  );
}

export default Score;