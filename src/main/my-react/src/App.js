import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
// import Greater from './components/Greater';
// import Lesser from './components/Lesser';
import Add from './components/Add';
// import Edit from './components/Edit';


class App extends Component {
constructor(props){
super(props);
this.state = {
employee: [],
isLoaded:false
};
}

onHigh = () => {

this.props.history.push('/Greater');

}

onLess = () => {

this.props.history.push('/Lesser');

}

onBetween = () => {

this.props.history.push('/Between');

}

onAll = () => {

this.props.history.push('/Employee');

}


componentDidMount(){
fetch('http://localhost:8080/api/getallemployeedata')
.then(res=>res.json())
.then(json=>{
this.setState({
isLoaded:true,
employee:json,
})
});
}


render(){
// var {employee}=this.state;

return(
<body>
<div className="App">

<h1>Rewards Program <i class="fa fa-trophy" id="color"></i></h1> 

{/* <Between />
<Greater />
<Lesser /> */}

<div class="row">

<button onClick={this.onHigh} type="button" class="btn btn-primary" title="High" data-toggle="modal">High</button>

<button onClick={this.onBetween} type="button" class="btn btn-primary" title="Medium" data-toggle="modal">Medium</button>

<button onClick={this.onLess} type="button" class="btn btn-primary" title="Less" data-toggle="modal">Less</button>

<button type="button" class="btn btn-success" title="Add Employee" data-toggle="modal" data-target="#myModal1"><i class="fa fa-plus" aria-hidden="true"></i> Add Employee</button>

<button onClick={this.onAll} type="button" class="btn btn-info" title="All Employee" data-toggle="modal"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> All Employee</button>
</div>
<Add/>
<Search/>

{/* <div class="modal-body-center">
<center>
<table>
<thead>
<tr>
<th colspan="7" class="colspan">All Employee List</th>
</tr>
<tr>
<th>Employee No</th>
<th>Employee Name</th>
<th>Point Value</th>
<th>Point Donate</th>
<th>Point Received</th>
<th>Point Expired</th>
<th>Last Timestamp</th>

</tr>

{this.state.employee.map((employees)=>

<tr>
<td>{employees.emp_no}</td> 
<td>{employees.emp_name}</td> 

{employees.points.map((sub)=>

<td>{sub.point_value}</td>

)}
{employees.points.map((sub)=>

<td>{sub.point_donate}</td>

)}
{employees.points.map((sub)=>

<td>{sub.point_received}</td>

)}
{employees.points.map((sub)=>

<td>{sub.point_expired}</td>

)}
{employees.points.map((sub)=>

<td>{sub.last_timestamp}</td>

)}
</tr>

)
}


</thead>


</table>
</center>

</div> */}






</div>
</body>

)

}
}

export default App;

