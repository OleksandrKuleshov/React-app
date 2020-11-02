import React from 'react';
import UserList from './UserList';
import Home from './Home';
import About from './About';
import ProjectList from './ProjectList';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const BugTrackerApp = () => {
    return (
        <Router>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">BugTrackerApp</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <Link to = "/">Home</Link>
                        </li>
                        <li>
                            <Link to ="/users">Users</Link>
                        </li>
                        <li>
                            <Link to ="/projects">Your projects</Link>
                        </li>
                        <li>
                            <Link to ="/About">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/users">
                    <UserList />
                </Route>
                <Route path ="/projects">
                    <ProjectList />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>

        </Router>
    )
}


export default BugTrackerApp