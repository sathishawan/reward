import React, { Component } from 'react';
import axios from 'axios';
// import { Link} from 'react-router-dom';


class Add extends Component {
constructor() {
super();
this.state ={
"emp_no": '',
"emp_name": '',
"last_timestamp":'',
'points': [{

"point_value": '',
"point_donate": '',
"point_received": '',
"point_expired": '',
}]

};
}
onChange = (e) => {

const state=this.state;
state[e.target.name] = e.target.value;
this.setState(state);
}

onSubmit = (e) => {
e.preventDefault();

// console.log(this.state.point_value)//You will get vlue here

const {emp_no, emp_name} = this.state;
const { point_value,point_donate,point_received,point_expired} = this.state;
const last_timestamp = new Date();
// console.log(last_timestamp)

console.log(this.state.point_value)//You will get vlue here

axios.post('http://localhost:8080/add', {emp_no, emp_name,last_timestamp,points:[{point_value,point_donate,point_received,point_expired}]})
.then(res => {
console.log(res.data); 
// console.log(this.state.point_value)
});
// console.log(this.state.point_value)
}

render() {
const { emp_no, emp_name} = this.state;
const { point_value,point_donate,point_received,point_expired} = this.state;

return (
<div className="modal fade" id="myModal1" role="dialog">
<div class="modal-dialog">
<div class="panel panel-default">
<div class="panel-heading">
<h3 class="panel-title">
ADD EMPLOYEE
<button title="Close" type="button" class="close" data-dismiss="modal">&times;</button>
</h3>
</div>
<div class="panel-body">
{/* <h4><Link to={`/Employee`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Employee List</Link></h4> */}
<form onSubmit={this.onSubmit}>
<div class="input-group">
<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
<input type="text" class="form-control" name="emp_no" value={emp_no} onChange={this.onChange} placeholder="Employee No" />
</div>
<div class="input-group">
<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>

<input type="text" class="form-control" name="emp_name" value={emp_name} onChange={this.onChange} placeholder="Employee Name" />
</div>
<div class="input-group">
<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>

<input type="text" class="form-control" name="point_value" value={'points'[{point_value}]} onChange={this.onChange} placeholder="Point Value" />
</div>
<div class="input-group">
<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>

<input type="text" class="form-control" name="point_donate" value={'points'[{point_donate}]} onChange={this.onChange} placeholder="Point Donate" />
</div>
<div class="input-group">
<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>

<input type="text" class="form-control" name="point_received" value={'points'[{point_received}]} onChange={this.onChange} placeholder="Point Received" />
</div>
<div class="input-group">
<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>

<input type="text" class="form-control" name="point_expired" value={'points'[{point_expired}]} onChange={this.onChange} placeholder="Point Expired" />
</div>
<button class="btn btn-primary" type="submit">Submit</button>

</form>
</div>
</div>
</div>
</div>

);
}
}

export default Add;