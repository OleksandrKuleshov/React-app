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
  <h3>Your projects</h3>
  <input type="button" value="Create A New Project" className="btn btn-primary"/>
  <table className="table">
    <thead>
      <tr>
        <th>Project Name</th>
        <th>Your Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        projects.map(project =>
          <tr key = {project.id}>
            <td><Link to ={`${match.url}/:${project.id}`}>{project.projectName}</Link></td>
            <td>{project.role}</td>
            <td>
              <input type="button" value="Edit" className="btn" />
              <input type="button" value="Remove" className="btn btn-danger" style={{marginLeft: 5}}/>
            </td>
          </tr>  
        )
      }
    </tbody>
  </table>

    <Switch>
      <Route path={`${match.path}/:id`}>
        <ProjectTaskList />
      </Route>
    </Switch>
    </>
  )
}

export default ProjectList