import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Employees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {employees:[]};
    }

    componentDidMount(){
        debugger;
        axios.get("http://localhost:5000/employees")
            .then(response=>{
                this.setState({employees:response.data});
            }).catch(function (error) {
                console.log(error);
            });
    }

    tabRow() {
        return this.state.employees.map(function (object, i) {
            debugger;
            return <tr>
                <td>{object.id}</td>
                <td>{object.name}</td>
                <td>{object.value}</td>
                <td>
                    <Link to={'/edit?id='+ object.id}>Edit Employee</Link>
                </td>
            </tr>;
        });
    }

    render() {
        return (
           <div>
                <h4 align="center">Employee List</h4>
                <table className="table table-striped" style={{ marginTop: 10 }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Value</th>
                            <th colSpan="4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Employees;
