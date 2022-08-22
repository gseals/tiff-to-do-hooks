import React from 'react';

const Task = ({task}) => {
  return (
    <div key={task.id}>{task.event}</div>
  )
}

export default Task;