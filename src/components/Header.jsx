import React, { Component } from 'react'
import Logo from "../assets/logo.png"
import { Container, Menu, Button, Image } from "semantic-ui-react"
import  { Link } from 'react-router-dom'

const no_border_style = {
    border: "none"
}

const header_style = {
    backgroundColor: "#00b5ad",
    height: "4rem"
}

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.handleLogout = this.handleLogout.bind(this)

        this.state = {
            userExists: false
        }
    }

    componentDidMount() {
        const userDetails = localStorage.getItem("user_details")

        if (userDetails !== null) {
            this.setState({
                userExists: true
            })
        }
    }

    handleLogout() {
        this.setState({
            userExists: false
        })

        localStorage.removeItem("user_details")

        window.location.href = "/"
    }

    render() {
        return (
            <Menu style={header_style} fixed="top" inverted>
                <Container>
                    <Menu.Item onClick={() => window.location.href = "/"} style={no_border_style} as="a" header>
                        <Image
                            size="tiny"
                            src={Logo}
                            style={{ marginRight: "1.5em" }}
                        />
                        Kid Pro
                    </Menu.Item>
                    <Menu.Item position="right" style={no_border_style}>
                        <Link to="/auth/login"><Button style={{marginRight: "1rem", display: this.state.userExists ? "none": "block"}}>Sign In</Button></Link>
                        <Link to="/auth/register"><Button style={{display: this.state.userExists ? "none": "block"}} >Sign Up</Button></Link>
                        <Button onClick={this.handleLogout} style={{display: !this.state.userExists ? "none": "block"}}>Sign Out</Button>
                    </Menu.Item>
                </Container>
            </Menu>
        )
    }
}
