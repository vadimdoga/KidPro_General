import React, { Component } from 'react'

import Header from "../Header"
import Footer from "../Footer"
import ProfileDetails from "../Logged/ProfileDetails"

import Subscription from "../Logged/Subscription"
import Courses from "./Courses"
import { Grid } from 'semantic-ui-react'

const main_segment_style = {
    width: "80%",
    margin: "5rem auto",
    paddingBottom: "2.5rem"
}

const pageContainer = {
    position: "relative",
    minHeight: "100vh"
}

const grid_style = {
    position: "relative",
    fontSize: "1rem",
    background: "#fff",
    boxShadow: "0 1px 2px 0 rgb(34 36 38 / 15%)",
    margin: "1rem 0",
    padding: "1em 1em",
    borderRadius: ".28571429rem",
    border: "1px solid rgba(34,36,38,.15)"
}

const content_row_style = {
    borderRadius: ".28571429rem",
    borderRight: "2px solid rgba(34,36,38,.15)",
    fontSize: "1rem"
}

const link_style = {
    padding: "2rem"
}

export default class Homepage extends Component {
    constructor(props) {
        super(props)

        this.handleCoursesContent = this.handleCoursesContent.bind(this)
        this.handleSubscriptionContent = this.handleSubscriptionContent.bind(this)

        this.state = {
            content: <Courses />
        }
    }

    handleSubscriptionContent() {
        this.setState({
            content: <Subscription />
        })
    }

    handleCoursesContent() {
        this.setState({
            content: <Courses />
        })
    }

    render() {
        return (
            <div style={pageContainer}>
                <Header />
                <div style={main_segment_style}>
                <ProfileDetails />

                <Grid style={grid_style}>
                    <Grid.Row>
                        <Grid.Column style={content_row_style} width={2}>
                            <div style={link_style}>
                                <span onClick={this.handleCoursesContent} style={{color: "#51A5BA", fontWeight: "600", cursor: "pointer"}}>Courses</span>
                            </div>
                            <div style={link_style}>
                                <span onClick={this.handleSubscriptionContent} style={{ color: '#51A5BA', fontWeight: "600", cursor: "pointer"}}>Subscription</span>
                            </div>
                        </Grid.Column>
                        <Grid.Column style={{margin: "auto"}} width={13}>
                            {this.state.content}
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>

                </div>
                <Footer />
            </div>
        )
    }
}
