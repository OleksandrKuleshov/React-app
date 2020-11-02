import axios from 'axios'

class ProjectDataService {

  retrieveAllProjects(name) {
    return axios.get('http://localhost:8080/api/users');
  }
}

export default new ProjectDataService();