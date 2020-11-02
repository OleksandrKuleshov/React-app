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
    "Assigned to": "Dima"
  },
  {
    "id":2,
    "taskName":"Create login form",
    "Assigned to": "Dima"
  }
]

const ProjectTaskList = ({match}) => {
  const [tasks, setTasks] = useState(mockTasks);
  console.log(match);
  return (
    <h2>This is project tasks</h2>
  )
}

export default ProjectTaskList