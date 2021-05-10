import React, { Component } from 'react'
import { Form, Grid, Button, Segment, Header } from 'semantic-ui-react'
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

export default class Register extends Component {
    constructor(props) {
        super(props)

        this.setClientRole = this.setClientRole.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            role: "",
            email: "",
            password: "",
            birthDate: new Date(),
            firstName: "",
            lastName: ""
        }
    }
    setClientRole(e) {
        e.preventDefault()

        const role = e.target.value
        this.setState({
            role: role
        })
    }
    handleSubmit(e) {
        e.preventDefault()

        this.props.history.push("/");
        console.log("Successful Registration")
    }
    render() {
        return (
            <div>
                <Grid
                    textAlign="center"
                    style={{ height: "100vh" }}
                    verticalAlign="middle"
                >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as="h2" color="teal" textAlign="center">
                            Register your account
                        </Header>

                        <Form>
                            <Segment stacked>
                                <Segment style={this.state.role ? { display: 'none' } : {}}>
                                    <h4>As whom do you position yourself?</h4>
                                    <Button color="teal" value="Learner" onClick={this.setClientRole}>Learner</Button>
                                    <Button color="green" value="Parent" onClick={this.setClientRole}>Parent</Button>
                                    <Button color="blue" value="Teacher" onClick={this.setClientRole}>Teacher</Button>
                                </Segment>

                                <div style={this.state.role ? {} : { display: 'none' }}>
                                    <Form.Group widths='equal'>
                                        <Form.Input
                                            fluid
                                            iconPosition="left"
                                            placeholder="First Name"
                                            value={this.state.firstName}
                                            onChange={e => this.setState({ firstName: e.target.value })}
                                        />
                                        <Form.Input
                                            fluid
                                            iconPosition="left"
                                            placeholder="Last Name"
                                            value={this.state.lastName}
                                            onChange={e => this.setState({ lastName: e.target.value })}
                                        />
                                    </Form.Group>
                                    <Form.Field>
                                        <label>Choose birth date</label>
                                        <DatePicker selected={this.state.birthDate} onChange={date => this.setState({ birthDate: date })} />
                                    </Form.Field>
                                    <Form.Input
                                        fluid
                                        icon="user"
                                        iconPosition="left"
                                        placeholder="E-mail address"
                                        value={this.state.email}
                                        onChange={e => this.setState({ email: e.target.value })}
                                    />


                                    <Form.Input
                                        fluid
                                        icon="lock"
                                        iconPosition="left"
                                        placeholder="Password"
                                        type="password"
                                        value={this.state.password}
                                        onChange={e => this.setState({ password: e.target.value })}
                                    />

                                    <Button type="submit" onClick={this.handleSubmit} color="teal" fluid size="large">
                                        Register
                                </Button>
                                </div>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
