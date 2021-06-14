import React, { Component } from 'react'
import LessonDetails from "./LessonDetails"
import Header from "../Header"
import { Segment } from 'semantic-ui-react'
import { get_json } from "../../adapters/auth"

const main_segment_style = {
    width: "80%",
    margin: "5rem auto",
    paddingBottom: "2.5rem",
    backgroundColor: "#93E2D5"
}

const pageContainer = {
    position: "relative",
    minHeight: "100vh"
}

export default class CourseAction extends Component {
    constructor(props) {
        super(props)

        this.listLessons = this.listLessons.bind(this)

        this.state = {
            lessons: [],
            courseName: ""
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        const jsonData = get_json()
        let filteredJsonData = null

        jsonData.forEach(el => {
            if (el["id"] == id)
                filteredJsonData = el
        })

        this.setState({
            lessons: filteredJsonData["lessons"],
            courseName: filteredJsonData["name"],
            courseID: filteredJsonData["id"]
        })

    }

    listLessons() {
        return this.state.lessons.map(lesson => {
            return <LessonDetails
                id={lesson['id']}
                courseID={this.state.courseID}
                lessonDescription={lesson['description']}
                lessonName={lesson['name']}
                lectures={lesson['lectures']}
                practices={lesson['practises']}
            />
        })
    }

    render() {
        return (
            <div style={pageContainer}>
                <Header />

                <Segment style={main_segment_style}>
                    <h3>My Lessons</h3>
                    {this.listLessons()}
                </Segment>
            </div>
        )
    }
}
