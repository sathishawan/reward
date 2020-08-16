import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        fetch('http://localhost:8080/api/getEmployeePoints, mode:no-CORS')
        .then((Response) => Response.json())
        .then((findresponse) =>
        {
            console.log(findresponse.points)
            this.setState({
                data: findresponse.points
            })
        })
    }
    render()
    {


        return(
          <center>
            <table className="tat">
                <tr><th>Emp_No</th><th>Emp_Name</th><th>Point_Value</th><th>Point_Donate</th><th>Point_Received</th><th>Point_Expired</th></tr>
                {
                    this.state.data.map((dynamicData) =>
                        <tr className="trow">
                           <td>  {dynamicData.emp_no}</td>
                            <td> {dynamicData.emp_name} </td>
                            <td>  {dynamicData.point_value}</td>
                            <td> {dynamicData.point_donate} </td>
                            <td>  {dynamicData.point_received}</td>
                            <td> {dynamicData.point_expired} </td>
                        </tr>
                    ) }
            </table>
</center>

        )
    }
}
export default App;
