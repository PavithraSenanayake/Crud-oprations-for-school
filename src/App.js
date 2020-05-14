import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

import CreateTeacher from './components/createTeacher';
import CreateStudent from './components/createStudent';
import Edit from './components/editComponent';
import ViewStudent from './components/viewStudents';
import Login from './components/login';
import SignUp from './components/signUp';
import Home from './components/home';
import ViewTeacher from './components/viewTeachers';
import EditTeachers from './components/editTeachers';

class App extends Component{
  render() {
    return (
      <Router>
        <div className= "container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbar-brand">Student Management System</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/signup'} className="nav-link">SignUp</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/login'} className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/viewStudents'} className="nav-link">View Students</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/viewTeachers'} className="nav-link">View Teachers</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          
        <Switch>
          <Route exact path = '/' component ={Home} />
          <Route exact path = '/signup' component ={SignUp} />
          <Route exact path = '/login' component ={Login} />
          <Route exact path = '/edit:id' component ={Edit} />
          <Route exact path = '/viewStudents' component ={ViewStudent} />
          <Route exact path = '/createTeacher' component ={CreateTeacher} />
          <Route exact path = '/createStudent' component ={CreateStudent} />
          <Route exact path = '/viewTeachers' component ={ViewTeacher} />
          <Route exact path = '/editTeachers:id' component ={EditTeachers} />
          
          
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
