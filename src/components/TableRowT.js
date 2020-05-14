import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRowT extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/teacher/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.f_name}
          </td>
          <td>
            {this.props.obj.l_name}
          </td>
          <td>
            {this.props.obj.subject}
          </td>
          <td>
            {this.props.obj.district}
          </td>
          <td>
            <Link to={"/editTeachers/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td> 
        </tr>
    );
  }
}

export default TableRowT;