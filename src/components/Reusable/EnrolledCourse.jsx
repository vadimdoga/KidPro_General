import React, { Component } from 'react'
import { Button, Progress, Segment } from 'semantic-ui-react'

export default class EnrolledCourse extends Component {
    constructor(props) {
        super(props)

        this.state = {
            courseType: this.props.courseType,
            courseName: this.props.courseName,
            courseProgress: this.props.courseProgress
        }
    }
    render() {
        return (
            <Segment>
                <h4>{this.state.courseName} <Button style={{ padding: "0 0.8rem", height: "1.5rem", marginLeft: "2rem", fontSize: "70%" }} color="linkedin">Resume</Button></h4>
                <Progress color={this.state.courseType === "public" ? "blue": "red" } percent={ this.state.courseProgress }/>
            </Segment>
        )
    }
}
