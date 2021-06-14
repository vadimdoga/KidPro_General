import React, { Component } from 'react'
import { Segment, Image, Button } from 'semantic-ui-react'
import { synthesizeSpeech } from "../../adapters/CognitiveServices"
import { get_json } from "../../adapters/auth"
import Header from "../Header"
import queryString from "querystring"
import ReactPlayer from 'react-player'

const main_segment_style = {
    width: "70%",
    margin: "5rem auto",
    paddingBottom: "2.5rem",
    backgroundColor: "#93E2D5"
}

const pageContainer = {
    position: "relative",
    minHeight: "100vh"
}

export default class LectureAction extends Component {
    constructor(props) {
        super(props)
        const jsonData = get_json()

        const lectureID = this.props.match.params.id
        let params = queryString.parse(this.props.location.search)

        const courseID = params["?courseID"]
        const lessonID = params["lessonID"]

        let courseDetails = {}
        let lessonDetails = {}
        let lectureDetails = {}

        jsonData.forEach(course => {
            if (course["id"] === courseID) {
                courseDetails = course
            }
        })

        courseDetails['lessons'].forEach(lesson => {
            if (lessonID === lesson['id'])
                lessonDetails = lesson
        })

        lessonDetails['lectures'].forEach(lecture => {
            if (lecture['id'] === lectureID)
                lectureDetails = lecture
        })

        console.log(lectureDetails)

        this.state = {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis dui eget quam lacinia, eget blandit lectus tristique. Integer vitae justo ex. In vehicula semper magna, et venenatis metus dignissim non. Nullam ut odio id arcu ullamcorper faucibus vel non metus. Sed hendrerit urna sit amet libero efficitur, quis vestibulum sem pharetra. Nullam lorem tellus, sodales sed hendrerit vel, rhoncus quis arcu. Suspendisse quis mollis arcu. Suspendisse suscipit lorem vel elit hendrerit lacinia.",
            courseID: courseID,
            lectureName: lectureDetails["name"]
        }
    }

    render() {
        return (
            <div style={pageContainer}>
                <Header />

                <Segment style={main_segment_style}>
                    <h3>{ this.state.lectureName }</h3>
                    <p>{this.state.description}</p>
                    <Button onClick={() => {
                        synthesizeSpeech(this.state.description)
                    }} style={{ padding: "0 0.8rem", height: "1.5rem", marginLeft: "80%", fontSize: "70%" }} color="blue">Text-to-Speech</Button>

                    <ReactPlayer style={{margin: "1rem auto"}} onEnded={() => { window.location.href = "/courses/solve/" + this.state.courseID }} url='https://www.youtube.com/watch?v=DfNSBeFliIg' />
                </Segment>
            </div>
        )
    }
}
