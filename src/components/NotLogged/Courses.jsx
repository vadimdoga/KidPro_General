import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { v4 as uuid } from "uuid"
import { Label, Rating, Card } from 'semantic-ui-react';

import Header from "../Header"
import Footer from "../Footer"
import CourseDetails from "../Reusable/CourseDetails"


const pageContainer = {
    position: "relative",
    minHeight: "100vh"
}

const content_style = {
    width: "70%",
    margin: "5rem auto",
    paddingBottom: "2.5rem"
}


class Courses extends Component {
    constructor(props) {
        super(props)

        this.listCourses = this.listCourses.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.openModal = this.openModal.bind(this)

        this.state = {
            gradeID: null,
            listOfCourses: [],
            isModalOpen: false,
            courseID: null
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
            }
        ]

        this.setState({
            gradeID: id,
            listOfCourses: [...this.state.listOfCourses, ...courses]
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

    listCourses(value, idx) {
        return <Card key={value["id"]}>
            <Card.Content header={value["name"]} />
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
                    this.setState({courseID: value["id"]})
                    this.openModal()
                }} color="teal" horizontal>Course Plan</Label>
            </Card.Content>
        </Card>
    }

    render() {
        return (
            <div style={pageContainer}>
                <Header />
                <div style={content_style}>
                    <h2 style={{margin: "2rem"}}>List Of Courses</h2>
                    <Card.Group>
                        {this.state.listOfCourses.map(this.listCourses)}
                    </Card.Group>
                    <CourseDetails courseID={this.state.courseID} handleOpen={this.openModal} handleClose={this.closeModal} isOpen={this.state.isModalOpen} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default withRouter(Courses)
