import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  match
} from "react-router-dom";
const mockTasks = [
  {
    "id":1,
    "taskName":"fix a bug",
    "AssignedTo": "Dima"
  },
  {
    "id":2,
    "taskName":"Create login form",
    "AssignedTo": "Dima"
  },
    {
    "id":3,
    "taskName":"Sit around",
    "AssignedTo": "Reine"
  }
]

const ProjectTaskList = () => {
  const [tasks, setTasks] = useState(mockTasks);
  let id = useParams();
  let match = useRouteMatch();
  
  return (<>
  <h2>This is project tasks</h2>

  <input type="button" value="Create A New Task" className="btn btn-info"/>
  <table className="table">
    <thead>
      <tr>
        <th>Task Name</th>
        <th>Assigned To</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        tasks.map(task => 
          <tr key = {task.id}> 
          <td>{task.taskName}</td>
          <td><Link to ={`${match.url}/:${task.id}`}>{task.AssignedTo}</Link></td>
          <td>
            <input type="button" value="Edit" className="btn" />
            <input type="button" value="Remove" className="btn btn-danger" style={{marginLeft: 5}}/>
          </td>
          </tr>
        )
      }
      </tbody>
  </table>
  </>)
}

export default ProjectTaskList