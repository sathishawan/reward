import React, { Component } from 'react';

class Between extends Component {
constructor(props){
super(props);
this.state={
searchData:null,
total:null,

};
this.handleChange = this.handleChange.bind(this);
}
search(){
console.log(this.state.param1+" "+this.state.param2);
fetch("http://localhost:8080/between?param1="+this.state.param1+"&param2="+this.state.param2)
.then((data)=>{data.json()
.then((resp)=>{
console.warn("resp",resp)
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

handleChange = e => this.setState({ [e.target.name]: e.target.value })

swapValues(){
    var tmp = document.getElementById("c").this.state.param1;
    document.getElementById("c").this.state.param1 = document.getElementById("d").this.state.param2;
    document.getElementById("d").this.state.param2 = tmp;
        
    }

render(){
    
return(
<div>
<center>
<br/>
<br/>
<h1>Employee points Between Search</h1>
<br/>
<br/>
<div class="ui-widget">
<input type="number" id="c"  placeholder="Search from.." name="param1" value={this.state.param1} onChange={this.handleChange} />

  &nbsp;<button id="go"  onclick={this.swapValues} type="button"><i class="fa fa-exchange" aria-hidden="true"></i>
</button>

  &nbsp;<input type="number" id="d" placeholder="Search to.." name="param2" value={this.state.param2} onChange={this.handleChange}/>
</div>


<button  class="btn btn-primary" type="submit" onClick= {this.search.bind(this)}>Search <i class="fa fa-search"></i></button>

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

export default Between;