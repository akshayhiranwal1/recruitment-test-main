import React from 'react';
import axios from 'axios';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class AddEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Value: 0
        };
    }

    AddEmployee = () => {
        debugger;
        axios.post('http://localhost:5000/employees', { name: this.state.Name, value: this.state.Value})
            .then(json => {
                debugger;
                console.log(json);
                alert("Data Save Successfully");
            });

        axios.get("http://localhost:5000/UpdateIncrement")
            .then(json => {
                console.log(json);
            });
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <Container className="App">
                <h4 className="PageHeading">Enter Employee</h4>
                <Form className="form">
                    <Col>
                        <FormGroup row>
                            <Label for="name" sm={2}>Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="Name" onChange={this.handleChange} value={this.state.Name} placeholder="Enter Name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="address" sm={2}>Value</Label>
                            <Col sm={10}>
                                <Input type="number" name="Value" onChange={this.handleChange} value={this.state.Value} placeholder="Enter RollNo" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col sm={5}></Col>
                            <Col sm={1}>
                                <button type="button" onClick={this.AddEmployee} className="btn btn-success">Submit</button>
                            </Col>
                            <Col sm={1}>
                                <Button color="danger">Cancel</Button>{' '}
                            </Col>
                            <Col sm={5}></Col>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        );
    }
}

export default AddEmployee;
