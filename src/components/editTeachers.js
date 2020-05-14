import React, { Component } from 'react';
import axios from 'axios';

export default class EditTeachers extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onChangeDistrict = this.onChangeDistrict.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      f_name: '',
      l_name: '',
      subject:'',
      district: ''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/teacher/editTeachers/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                f_name: response.data.f_name, 
                l_name: response.data.l_name,
                subject: response.data.subject,
                district: response.data.district
             });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangeFirstName(e) {
    this.setState({
      f_name: e.target.value
    });
  }
  onChangeLastName(e) {
    this.setState({
      l_name: e.target.value
    })  
  }
  onChangeSubject(e) {
    this.setState({
      subject: e.target.value
    })
  }
  onChangeDistrict(e) {
    this.setState({
      district: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      f_name: this.state.f_name,
      l_name: this.state.l_name,
      subject: this.state.subject,
      district: this.state.district
    };
    axios.post('http://localhost:4000/teacher/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/viewTeachers');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Teachers</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>First Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.f_name}
                      onChange={this.onChangeFirstName}
                      />
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.l_name}
                      onChange={this.onChangeLastName}
                      />
                </div>
                <div className="form-group">
                    <label>Subject: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.subject}
                      onChange={this.onChangeSubject}
                      />
                </div>
                <div className="form-group">
                    <label>District: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.district}
                      onChange={this.onChangeDistrict}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Teachers" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}