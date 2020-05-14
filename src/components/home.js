import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Switch,Route,Link} from 'react-router-dom';

import CreateStudent from './createStudent';
import CreateTeacher from './createTeacher';

export default class Home extends Component {
    render() {
        return(
            <div>
                <header>
                    <nav>
                    <h1>Welcome to Student Management System</h1>
                    <li><Link to="/createTeacher" className="button">Teacher</Link></li>
                    <li><Link to="/createStudent" className="button">Student</Link></li>
                    </nav>
                </header>
                <Switch>
          
          <Route exact path = '/createTeacher' component ={CreateTeacher} />
          <Route exact path = '/createStudent' component ={CreateStudent} />
          
          
          
        </Switch>
            </div>
        )
    }
}