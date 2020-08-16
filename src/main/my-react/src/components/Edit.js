import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const apiUrl = 'http://localhost:8080';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employees:[{
      "emp_no": '',
      "emp_name": '',
      "last_timestamp":'',
      "points": [{

      "point_value": '',
      "point_donate": '',
      "point_received": '',
      "point_expired": '',
            }]
      }]
  };
}

  componentDidMount() {
    axios.get(apiUrl + '/Reward/'+this.props.match.params._id)
      .then(res => {
        this.setState({ employees: res.data});
        console.log(res.data.points); 
      });
  }

  onChange = (e) => {
    const state = this.state.employees
    state[e.target.name] = e.target.value;
    this.setState({employees:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {emp_no, emp_name} = this.state.employees;
    const { point_value,point_donate,point_received,point_expired } = this.state.employees;

 
// const last_timestamp = new Date();

    axios.put(apiUrl + '/update/'+this.props.match.params._id, {emp_no, emp_name,points:[{point_value,point_donate,point_received,point_expired}]})
      .then((result) => {
        console.log(result);

        this.props.history.push(apiUrl + '/getallemployeedata/'+this.props.match.params._id)
      });
  }

  render() {
   
    
    const { emp_no, emp_name} = this.state.employees;
    
    const { point_value,point_donate,point_received,point_expired } = this.state.employees;


    return (
      
      <div class="container">
        <div class="modal-dialog">
      <div class="panel panel-default">
          <div class="panel-heading">
              <h3 class="panel-title">
              EDIT Employee
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/Employee`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Employee List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">emp_no:</label>
                <input type="text" class="form-control" name="emp_no" value={emp_no} onChange={this.onChange} placeholder="emp_no" />
              </div>
              <div class="form-group">
                <label for="title">emp_name:</label>
                <input type="text" class="form-control" name="emp_name" value={emp_name} onChange={this.onChange} placeholder="emp_name" />
              </div>
              <div class="form-group">
                <label for="author">point_value:</label>
                <input type="text" class="form-control" name="point_value" value={'points'[{point_value}]} onChange={this.onChange} placeholder="point_value" />
              </div>
              <div class="form-group">
                <label for="published_date">point_donate:</label>
                <input type="text" class="form-control" name="point_donate" value={'points'[{point_donate}]} onChange={this.onChange} placeholder=" point_donate" />
              </div>
              <div class="form-group">
                <label for="description">point_received:</label>
                <input type="text" class="form-control" name="point_received" value={'points'[{point_received}]} onChange={this.onChange} placeholder=" point_received" />
              </div>
              <div class="form-group">
                <label for="description">point_expired:</label>
                <input type="text" class="form-control" name="point_expired" value={'points'[{point_expired}]} onChange={this.onChange} placeholder=" point_expired" />
              </div>
              <button type="submit" class="btn btn-success"><i class="fa fa-paper-plane"></i> Update</button>
            </form>
          </div>
        </div>
      </div>
      </div>
      
    );
  }
}

export default Edit;