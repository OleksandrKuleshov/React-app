import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  match
} from "react-router-dom";
import ProjectTaskList from './ProjectTaskList';

const mockProjects = [
  {
      "id": 1,
      "projectName": "Create CRUD App",
      "role": "Developer"
  },
  {
      "id": 2,
      "projectName": "Create Mobile App",
      "role": "Developer"
  }
]

const ProjectList = () => {
  const [projects, setProjects] = useState(mockProjects);
  let match = useRouteMatch();

  return(<>
    <div className="container">
      <h3>Your projects</h3>
      <div className="container">
        <table className="table">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Your Role</th>
          </tr>
        </thead>
        <tbody>
          {
            projects.map(project =>
              <tr key = {project.id}>
                <td><Link to ={`${match.url}/tasks/:id`}>{project.projectName}</Link></td>
                <td>{project.role}</td>
              </tr>  
                )
          }
        </tbody>

        </table>
      </div>
    </div>

    <Switch>
      <Route path={`${match.path}/:id`}>
        <ProjectTaskList />
      </Route>
    </Switch>
    </>
  )
}

export default ProjectList