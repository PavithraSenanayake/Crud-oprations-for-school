import React, {Component} from 'react';
import axios from 'axios';

export default class CreateStudent extends Component {

    constructor(props){
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeIndexNo = this.onChangeIndexNo.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeGrade = this.onChangeGrade.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_name: '',
            last_name: '',
            index_no: '',
            age: '',
            grade: ''
        }
    }

    onChangeFirstName(e){
        this.setState({
            first_name: e.target.value
        });
    }

    onChangeLastName(e){
        this.setState({
            last_name: e.target.value
        });
    }

    onChangeIndexNo(e){
        this.setState({
            index_no: e.target.value
        });
    }

    onChangeAge(e){
        this.setState({
            age: e.target.value
        });
    }

    onChangeGrade(e){
        this.setState({
            grade: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const obj ={
            first_name : this.state.first_name,
            last_name : this.state.last_name,
            index_no : this.state.index_no,
            age : this.state.age,
            grade : this.state.grade
        }; 

        axios.post('http://localhost:4000/student/add', obj)
        .then(res => console.log(res.data)); 

        this.setState({
            first_name : '',
            last_name : '',
            index_no : '',
            age : '',
            grade : ''
        })

    }


    render() {
        return(
            <div style={{marginTop: 10}}>
            <h3>Enter you details</h3>
            <form onSubmit = {this.onSubmit}>

                <div className="form-group">
                    <label>First Name:</label>
                    <input type="text" 
                        className="form-control"
                        value = {this.state.first_name}
                        onChange = {this.onChangeFirstName}
                    />
                </div>

                <div className="form-group">
                    <label>Last Name:</label>
                    <input type="text" 
                        className="form-control"
                        value = {this.state.last_name}
                        onChange = {this.onChangeLastName}    
                    />
                </div>

                <div className="form-group">
                    <label>Index No:</label>
                    <input type="text" 
                        className="form-control"
                        value = {this.state.index_no}
                        onChange = {this.onChangeIndexNo}
                    />
                </div>

                <div className="form-group">
                    <label>Age:</label>
                    <input type="text" 
                        className="form-control"
                        value = {this.state.age}
                        onChange = {this.onChangeAge}   
                    />
                </div>

                <div className="form-group">
                    <label>Grade:</label>
                    <input type="text" 
                        className="form-control"
                        value = {this.state.grade}
                        onChange = {this.onChangeGrade}   
                    />
                </div>

                
                <div className="form-group">
                    <input type="submit" value="Register Student" className="btn btn-primary"></input>
                </div>
            </form>
        </div> 
        )
    }
}