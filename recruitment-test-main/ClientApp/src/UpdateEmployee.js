import React from 'react';
import axios from 'axios';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class UpdateEmployee extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Id: 0,
            Name: '',
            Value: 0
        };

        this.employeeId = 0;

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        const urlSearchString = window.location.search;

        const params = new URLSearchParams(urlSearchString);

        this.employeeId = params.get("id");

        axios.get('http://localhost:5000/employees/' + this.employeeId)
            .then(response => {
                this.setState({
                    Id : response.data.Id,
                    Name: response.data.name,
                    Value: response.data.value
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }

    onChangeValue(e) {
        this.setState({
            Value: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            Id: this.employeeId,
            Name: this.state.Name,
            Value: this.state.Value
        };
        axios.put('http://localhost:5000/employees', obj)
            .then(res => console.log(res.data));

        axios.get("http://localhost:5000/employees/UpdateIncrement")
        .then(json => {
            console.log(json);
        });
    }

    render() {
        return (
            <Container className="App">
                <h4 className="PageHeading">Update Employee</h4>
                <Form className="form">
                    <Col>
                        <FormGroup row>
                            <Label for="name" sm={2}>Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="Name" onChange={this.onChangeName} value={this.state.Name} placeholder="Enter Name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="address" sm={2}>Value</Label>
                            <Col sm={10}>
                                <Input type="number" name="Value" onChange={this.onChangeValue} value={this.state.Value} placeholder="Enter RollNo" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col sm={5}></Col>
                            <Col sm={1}>
                                <button type="button" onClick={this.onSubmit} className="btn btn-success">Submit</button>
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

export default UpdateEmployee;