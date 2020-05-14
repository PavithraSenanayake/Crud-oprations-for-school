import React, { Component } from 'react';
import axios from 'axios';
import TableRowT from './TableRowT';

export default class ViewTeacher extends Component {

  constructor(props) {
      super(props);
      this.state = {teacher: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/teacher')
        .then(response => {
          this.setState({ teacher: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.teacher.map(function(object, i){
          return <TableRowT obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Teachers List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Subject</th>
                <th>District</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }