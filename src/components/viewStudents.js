import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';


export default class ViewStudent extends Component {

    constructor(props){
        super(props);
        this.state = {student : []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/student')
        .then(response => {
            this.setState({student:response.data});
        })
        .catch(function(error){
            console.log(error);
        })
    }

    tabRow(){
        return this.state.student.map(function(object,i){
            return<TableRow obj ={object} key={i}/>
        });
    }


    render() {
        return(
            <div>
                <h3 align="center">Student Details</h3>
                <table className="table table-striped" style={{margineTop:20}}>
                    <thead>
                        <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Index No</th>
                        <th>Age</th>
                        <th>Grade</th>
                        <th colSpan="2">Action</th>
                        </tr>
                    </thead> 

                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>    
            </div>
        );
    }
}