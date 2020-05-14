import React, { Component } from 'react';

import axios from 'axios';

export default class Edit extends Component {

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


    componentDidMount() {
        axios.get('http://localhost:4000/student/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    index_no: response.data.index_no,
                    age: response.data.age,
                    grade: response.data.grade
                });
            })
            .catch(function(error){
                console.log(error);
                
            })
            
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
        const obj = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            index_no:this.state.index_no,
            age:this.state.age,
            grade:this.state.grade
        };
        axios.post('http://localhost:4000/student/update/'+ this.props.match.params.id,obj)
            .then(res => console.log(res.data));

        this.props.history.push('/viewStudent');
    }


}