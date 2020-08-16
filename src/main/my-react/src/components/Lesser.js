import React, { Component } from 'react';

class Lesser extends Component {
constructor(){
super();
this.state={
searchData:null,
total:null
}
}
search(key2){
console.warn(key2);
fetch("http://localhost:8080/lesserthan/?point_value="+key2).then((data)=>{
data.json().then((resp)=>{
//console.warn("resp",resp)
if(resp.length>0){
this.setState({searchData:resp,noData:false})
}
else
{
this.setState({noData:true,searchData:null})
}
//this.setState({searchData:resp})
})
})
}
render(){
return(
<div>
<center>
<br/>
<br/>
<h1>Employee points Lesser than Search</h1>
<br/>
<br/>
<div class="search-container">
    <form>
      <input type="number" placeholder="Search.."  onChange={(event)=>this.search(event.target.value)} />
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
  </div>
</center>

<br/>
<br/>
<div>
{
this.state.searchData?
<div>

{
<center>
<table>

<thead>
<tr>
<th colSpan="7" className="colspan">All Employee List</th>
</tr>
<tr>
<th>Emp No</th>
<th>Emp Name</th>
<th>Point Value</th>
<th>Point Donate</th>
<th>Point Received</th>
<th>Point Expired</th>
<th>Last Timestamp</th>

</tr>

{this.state.searchData.map((item)=>

<tr>
<td>{item.emp_no}</td>
<td>{item.emp_name}</td>

{item.points.map((sub) =>

<td>{sub.point_value}</td>
)}
{item.points.map((sub) =>

<td>{sub.point_donate}</td>
)}
{item.points.map((sub) =>

<td>{sub.point_received}</td>
)}
{item.points.map((sub) =>

<td>{sub.point_expired}</td>
)}
<td>{item.last_timestamp}</td>

</tr>
)
}


</thead>


</table>
</center>
}
</div>
:""
}

</div>
<div>
{
this.state.noData?<h3 class="found">No data found..</h3>:null
}
</div>
</div>



);
}
}

export default Lesser;