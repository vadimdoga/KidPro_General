import React, { Component } from 'react'
import { Grid, Segment, Image } from 'semantic-ui-react'
import Header from "../Header"
import Footer from "../Footer"
import paragraphImage from "../../assets/paragraph.png"
import Courses from "./Courses"

const main_segment_style = {
    width: "80%",
    margin: "5rem auto",
    paddingBottom: "2.5rem"
}

const pageContainer = {
    position: "relative",
    minHeight: "100vh"
}


export default class Homepage extends Component {
    render() {
        return (
            <div style={pageContainer}>
                <Header />
                <div style={main_segment_style}>
                    <Segment vertical>
                        <Grid style={{ width: "50%", margin: "auto" }} columns={1}>
                            <Grid.Column>
                                <Segment raised >
                                    <h3>Platform Overview</h3>

                                    <Image src={paragraphImage} />
                                </Segment>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                    <Courses />
                </div>
                <Footer />

            </div>
        )
    }
}
