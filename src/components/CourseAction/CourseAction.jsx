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
        const jsonData = get_json()
        const id = this.props.match.params.id

        this.setState({
            lessons: jsonData["lessons"],
            courseName: jsonData["name"]
        })

    }

    listLessons() {
        return this.state.lessons.map(lesson => {
            return <LessonDetails
                id={lesson['id']}
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
                    <h3>{ this.state.courseName }</h3>
                    {this.listLessons()}
                </Segment>
            </div>
        )
    }
}
