import React, { Component } from 'react'
import jwt from "jwt-decode"
import NotLoggedHomepage from "./NotLogged/NotLoggedHomepage"
import LoggedHomepage from "./Logged/LoggedHomepage"

export default class MainPages extends Component {
    constructor(props) {
        super(props)

        this.state = {
            view: <NotLoggedHomepage />
        }
    }

    componentDidMount() {
        const userDetails = localStorage.getItem('user_details')
        if (userDetails !== null) {
            console.log(jwt(JSON.parse(userDetails)["token"]))
            console.log(JSON.parse(userDetails)["type"])
            const userType = JSON.parse(userDetails)["type"]

            this.setState({
                view: <LoggedHomepage userType={userType} />
            })
        }
    }
    render() {
        return (
            this.state.view
        )
    }
}
