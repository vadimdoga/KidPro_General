import React, { Component } from 'react'
import Logo from "../assets/logo.png"
import { Container, Menu, Button, Image } from "semantic-ui-react"

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

        this.handleSignIn = this.handleSignIn.bind(this)
        this.handleSignUp = this.handleSignUp.bind(this)
        this.handleLogoClick = this.handleLogoClick.bind(this)
    }
    handleSignIn(e) {
        this.props.history.push("/auth/login")
    }
    handleSignUp(e) {
        this.props.history.push("/auth/register")
    }
    handleLogoClick(e) {
        this.props.history.push("/")
    }
    render() {
        return (
            <Menu style={header_style} fixed="top" inverted>
                <Container>
                    <Menu.Item onClick={this.handleLogoClick} style={no_border_style} as="a" header>
                        <Image
                            size="tiny"
                            src={Logo}
                            style={{ marginRight: "1.5em" }}
                        />
                    Kid Pro
                </Menu.Item>
                    <Menu.Item position="right" style={no_border_style}>
                        <Button style={{marginRight: "1rem"}} onClick={this.handleSignIn}>Sign In</Button>
                        <Button onClick={this.handleSignUp}>Sign Up</Button>
                    </Menu.Item>
                </Container>
            </Menu>
        )
    }
}
