import React, { Component } from "react";
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import jwtDecode from "jwt-decode"

export default class SignIn extends Component {
    constructor(props) {
        super(props)

        this.setClientRole = this.setClientRole.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            role: "",
            email: "",
            password: ""
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
        const mockedToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiIwYTY1ODRhZS0wZWE0LTQ4NTAtOWIwMC00NDFlM2I4NGJkOGMiLCJleHAiOjE2MjA4MzU0NzB9.MNa28f0Sd6Cs2nGkVycD03isxsHEGjsqRZ5fM06ky70"

        localStorage.setItem('user_details', JSON.stringify({
            "token": mockedToken,
            "type": this.state.role
        }))

        this.props.history.push("/");
        console.log("Successful Login")
    }
    render() {
        return (
            <div>
                <Grid
                    textAlign="center"
                    style={{ height: "100vh" }}
                    verticalAlign="middle">
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as="h2" color="teal" textAlign="center">
                            Log-in to your account
                        </Header>

                        <Form size="large">
                            <Segment stacked>
                                <Segment style={this.state.role ? { display: 'none' } : {}}>
                                    <h4>As whom do you position yourself?</h4>
                                    <Button color="teal" value="learner" onClick={this.setClientRole}>Learner</Button>
                                    <Button color="green" value="parent" onClick={this.setClientRole}>Parent</Button>
                                    <Button color="blue" value="teacher" onClick={this.setClientRole}>Teacher</Button>
                                </Segment>

                                <div style={this.state.role ? {} : { display: 'none' }}>
                                    <Form.Input
                                        fluid
                                        icon="user"
                                        iconPosition="left"
                                        placeholder="E-mail address"
                                        value={this.state.email}
                                        onChange={e => this.setState({email: e.target.value})}
                                    />
                                    <Form.Input
                                        fluid
                                        icon="lock"
                                        iconPosition="left"
                                        placeholder="Password"
                                        type="password"
                                        value={this.state.password}
                                        onChange={e => this.setState({password: e.target.value})}
                                    />

                                    <Button type="submit" onClick={this.handleSubmit} color="teal" fluid size="large">
                                        Login
                                    </Button>
                                </div>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}
