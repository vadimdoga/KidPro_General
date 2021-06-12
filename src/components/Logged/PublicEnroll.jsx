import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { v4 as uuid } from "uuid"
import { Label, Rating, Card, Grid, Segment, Header, Button } from 'semantic-ui-react';

import CourseDetails from "../Reusable/CourseDetails"


let groupedListOfGrades = []


class PublicCourses extends Component {
    constructor(props) {
        super(props)

        this.listCourses = this.listCourses.bind(this)
        this.listGrades = this.listGrades.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.openModal = this.openModal.bind(this)
        this.handleGradeClick = this.handleGradeClick.bind(this)

        this.state = {
            gradeID: null,
            listOfCourses: [],
            listOfGrades: [],
            isModalOpen: false,
            courseID: null,
            isSeen: false,
            courseGrade: null
        }
    }

    componentDidMount() {
        const id = this.props.match.params.grade_id;

        const courses = [
            {
                "id": uuid(),
                "name": "English",
                "rating": 3,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                "grade": "2"
            },
            {
                "id": uuid(),
                "name": "Maths",
                "rating": 3,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                "grade": "2"
            },
            {
                "id": uuid(),
                "name": "Physics",
                "rating": 3,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                "grade": "2"
            },
            {
                "id": uuid(),
                "name": "Keyboard",
                "rating": 3,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                "grade": "2"
            },
        ]

        const grades = [
            { "grade": "4", "id": "4" },
            { "grade": "3", "id": "3" },
            { "grade": "2", "id": "2" },
            { "grade": "1", "id": "1" },
        ]

        this.setState({
            gradeID: id,
            listOfCourses: [...this.state.listOfCourses, ...courses],
            listOfGrades: [...this.state.listOfGrades, ...grades]
        })
    }

    closeModal() {
        this.setState({
            isModalOpen: false
        })
    }

    openModal() {
        this.setState({
            isModalOpen: true
        })
    }

    handleGradeClick(e, grade) {
        this.setState({
            courseGrade: grade,
            isSeen: true
        })
    }

    listCourses(value) {
        if (value["grade"] === this.state.courseGrade) {
            return <Card style={{width: "25%", margin: "1rem 2.5rem"}} key={value["id"]}>
                <Card.Content style={{display: "flex", justifyContent: "space-between"}}>
                    <Header>{value["name"]}</Header>
                    <Button style={{ padding: "0 0.8rem", height: "1.5rem", marginLeft: "auto", fontSize: "70%" }} color="google plus">Enroll</Button>
                </Card.Content>
                <Card.Content description={value["description"]} />
                <Card.Content extra>
                    <Label color="yellow" horizontal>Rating</Label>
                    <Rating icon="star" defaultRating={value["rating"]} maxRating={5} disabled />
                </Card.Content>
                <Card.Content extra>
                    <Label color="green" horizontal>Grade</Label>
                    {value["grade"]}
                </Card.Content>
                <Card.Content extra>
                    <Label as="a" onClick={() => {
                        this.setState({ courseID: value["id"] })
                        this.openModal()
                    }} color="teal" horizontal>Course Plan</Label>
                </Card.Content>
            </Card>
        } else
            return null
    }

    listGrades(value, idx) {
        const mainListLength = this.state.listOfGrades.length - 1
        let htmlReturn = null

        groupedListOfGrades = [...groupedListOfGrades, value]

        if (groupedListOfGrades.length > 3 || mainListLength === idx) {
            const labels = groupedListOfGrades.map(val => {
                return <Grid.Column width={4}>
                    <Label onClick={(e) => this.handleGradeClick(e, val["grade"])} style={{ padding: "0.5rem 0.8rem" }} key={val["id"]} as='a' basic color='blue'>
                        Grade {val["grade"]}
                    </Label>
                </Grid.Column>
            })

            htmlReturn =
                <Grid.Row key={uuid()}>
                    {labels}
                </Grid.Row>

            groupedListOfGrades = []
        }

        return htmlReturn
    }


    render() {
        return (
            <div>
                <Segment vertical>
                    <Grid style={{ margin: "auto", width: "80%" }}>
                        {
                            this.state.listOfGrades.map(this.listGrades)
                        }
                    </Grid>
                </Segment>
                <Segment vertical>
                    <Card.Group>
                        {this.state.listOfCourses.map(this.listCourses)}
                    </Card.Group>
                    <CourseDetails courseID={this.state.courseID} handleOpen={this.openModal} handleClose={this.closeModal} isOpen={this.state.isModalOpen} />
                </Segment>
            </div>
        )
    }
}

export default withRouter(PublicCourses)
