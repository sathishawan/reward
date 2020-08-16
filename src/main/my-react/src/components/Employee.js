import React, { Component } from 'react';
import * as $ from 'jquery';  
import axios from 'axios';
import 'datatables.net';
import {Link} from 'react-router-dom'

const apiUrl = 'http://localhost:8080';

$(document).ready(function(){
  $('#myTable').dataTable();
});

class Employee extends Component {
constructor(props){
super(props);
this.state = {
employee: [],

};
}


onBack = () => {
  window.history.back();
}

componentDidMount(){
axios.get(apiUrl + '/getallemployeedata/')
.then(res => {
    this.setState({ employee: res.data });
    // console.log(this.state.employee);
  });
}

deleteUser(id) {  
  // console.log(id) 
  if(window.confirm('Are you sure you want to delete?' ))      
  {
  const { employee } = this.state;   
  axios.delete(apiUrl + '/delete/' +id).then(result=>{ 
    console.log(result) 
    this.setState({  
      response:result, 
      employee:employee.filter(employees=>employees._id !== id)  
    });  
  });
}
}  


render(){
  
  const {employee} =this.state;  

return(
<body>

<div class="table-responsive">
<table id="myTable" class="table table-striped" width="100%" >    
        <thead>  
          <tr>  
            <th class="color">Employee No</th>  
            <th  class="color">Employee Name</th>  
            <th  class="color">Point Value</th>  
            <th  class="color">Point Donate</th>  
            <th  class="color">Point Received</th>  
            <th  class="color">Point Expired</th> 
            <th  class="color">Timestamp</th> 
            <th  class="color">Action</th>  
          </tr>  
       </thead> 
       <tbody class="tbody"> 
       {employee.map((employees)=>
 
          <tr key={employees._id}>  
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
            <td>{employees.last_timestamp}</td>
 
             
            <td><Link title="Edit" to={"Edit/" + employees._id} ><i class="fa fa-edit"></i></Link>&nbsp;
            <i title="Delete" class="fa fa-trash-o" onClick={() => this.deleteUser(employees._id)}></i></td> 
            
          </tr>  
       )} 
        </tbody>  
</table>
</div> 

</body>

)

}
    }
    
    


export default Employee;

