import React from 'react';
import PropTypes from 'prop-types'; 

function Task({ task, onToggleComplete, onDelete }) {
  return (
    <li className="task-item">
      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }} 
        onClick={onToggleComplete}
        aria-label="Toggle task completion"
      >
        {task.text}
      </span>
      <button onClick={onDelete ? onDelete : () => {}}>Delete</button> 
    </li>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggleComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
};

export default Task;
