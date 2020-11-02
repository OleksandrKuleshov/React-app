import React from 'react';

const testUser = {login:"Dima", Password:"Dima"};

const Home = () => {
  return(<>
    <h2>Home</h2>
    <div className="form-group">
      <form>
        <div className = "form-group">
          <label>Login:</label>
            <br/>
            <input type="text" name="username" className="form-control" placeholder ="Enter username"></input>
          
        </div>
        <div className = "form-group">
          <label htmlFor="pwd">Password:</label>
            <input type="password" name="password" className="form-control" placeholder ="Enter password"></input>

        </div>
        <button type="submit" value="login" className="btn btn-default">Login</button>
      </form>
    </div>
  </>)
}

export default Home