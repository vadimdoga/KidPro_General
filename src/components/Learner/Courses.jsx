import React, { Component } from 'react'
import { Grid, Segment, Button } from 'semantic-ui-react'
import EnrolledCourse from "../Reusable/EnrolledCourse"
import EnrollmentModal from "./EnrollmentModal"
import {get_json} from "../../adapters/auth"

export default class Courses extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pubCourses: [],
            prvCourses: [<EnrolledCourse courseName="English" courseType="private" solvedTopics='1' totalTopics='8' />]
        }
    }

    componentDidMount() {
        const jsonData = get_json()

        const arr = jsonData.map(course => {
            return <EnrolledCourse id={course["id"]} courseName={course["name"]} courseType="public" solvedTopics='3' totalTopics='8' />
        })

        this.setState({
            pubCourses: arr
        })
    }

    listPulicCourses() {
        return this.state.pubCourses.map(value => {
            return <Grid.Row style={{marginBottom: "1rem"}} width={7}>
                {value}
            </Grid.Row>
        })

    }

    listPrivateCourses() {
        return this.state.prvCourses.map(value => {
            return <Grid.Row style={{marginBottom: "1rem"}} width={7}>
                {value}
            </Grid.Row>
        })
    }

    render() {
        return (
            <Grid>
                <Grid.Row style={{ border: "2px solid #6BCAE2", borderRadius: "10px" }}>
                    <Grid.Column style={{textAlign: "center" }}>
                        <h4>Courses</h4>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={7}>
                        <h4>Public Courses <EnrollmentModal enrollmentState="public" /></h4>
                        {this.listPulicCourses()}
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <h4>Private Courses <EnrollmentModal enrollmentState="private" /></h4>
                        {this.listPrivateCourses()}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
