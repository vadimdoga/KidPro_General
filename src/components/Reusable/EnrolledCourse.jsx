import React, { Component } from 'react'
import { Button, Progress, Segment } from 'semantic-ui-react'

export default class EnrolledCourse extends Component {
    constructor(props) {
        super(props)

        this.state = {
            courseType: this.props.courseType,
            courseName: this.props.courseName,
            solvedTopics: this.props.solvedTopics,
            totalTopics: this.props.totalTopics
        }
    }
    render() {
        return (
            <Segment>
                <h4>{this.state.courseName} <Button onClick={() => window.location.href = "/courses/solve/" + this.props.id} style={{ padding: "0 0.8rem", height: "1.5rem", marginLeft: "2rem", fontSize: "70%" }} color="linkedin">Resume</Button></h4>
                <Progress color={this.state.courseType === "public" ? "blue": "red" } value={this.state.solvedTopics} total={this.state.totalTopics} progress='ratio'/>
            </Segment>
        )
    }
}
