import React, {useState} from 'react';

const mockUsers = [
  {
      "id": 1,
      "username": "Dima",
      "role": "Admin"
  },
  {
      "id": 2,
      "username": "Anders",
      "role": "User"
  },
  {
      "id": 3,
      "username": "Reine",
      "role": "God"
  },
  {
      "id": 4,
      "username": "Adam",
      "role": "Admin"
  }
]

const UserList = () => {
  const [users, setUsers] = useState(mockUsers); 

  return (<>
        <h3>All Users</h3>
          <table className="table">
            <thead>
              <tr>
                <th>User Id</th>
                <th>Username</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map(user => 
                <tr key ={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.role}</td>
                  <td>
                    <input type="button" value="Edit" className="btn"/>
                    <input type="button" value="Remove" className="btn btn-danger" style={{marginLeft: 5}}/>
                  </td>
                </tr>)
              }
            </tbody>
          </table>
    </>)
}
export default UserList