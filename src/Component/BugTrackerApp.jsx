import React, { useEffect, useState } from 'react';
import UserList from './UserList';
import Home from './Home';
import About from './About';
import ProjectList from './ProjectList';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const BugTrackerApp = () => {

    const [active, setActive] = useState("Home");
    const [remove, setRemove] = useState("Home");

    useEffect(() => {     
        let element = document.getElementById(active);
        element.classList.add("active");
        setRemove(active);
    }, [active]);

    useEffect(() => {
        if (active !== remove)
            document.getElementById(remove).classList.remove("active");
    }, [active]);

    return (
        <Router>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">BugTrackerApp</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li id="Home" className="active">
                            <Link to = "/" onClick={()=>setActive("Home")}>Home</Link>
                        </li>
                        <li id="Users">
                            <Link to ="/users" onClick={()=>setActive("Users")}>Users</Link>
                        </li>
                        <li id="Projects">
                            <Link to ="/projects" onClick={()=>setActive("Projects")}>Your projects</Link>
                        </li>
                        <li id="About">
                            <Link to ="/About" onClick={()=>setActive("About")}>About</Link>
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