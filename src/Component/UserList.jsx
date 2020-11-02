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

  return (
      <div className="container">
        <h3>All Users</h3>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>User Id</th>
                <th>Username</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map(user => 
                <tr key ={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.role}</td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    )
}
export default UserList