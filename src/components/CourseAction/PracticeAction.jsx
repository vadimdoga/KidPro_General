import React, { Component } from 'react'
import { Segment, Image, Button } from 'semantic-ui-react'
import { synthesizeSpeech } from "../../adapters/CognitiveServices"
import { get_json } from "../../adapters/auth"
import queryString from "querystring"
import Header from "../Header"
import { v4 as uuid } from "uuid"
import QA from "./QA"
import exampleImg from "../../assets/example.jpg"

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

export default class PracticeAction extends Component {
    constructor(props) {
        super(props)

        this.obtainNext = this.obtainNext.bind(this)

        this.state = {
            description: "This is a description of the course",
            currentQuestion: 0,
            totalQuestions: 0,
            exercises: [],
            nextState: "None",
            nextName: "Next",
            nextFunction: () => {
                if (this.state.currentQuestion === this.state.totalQuestions - 2) {
                    this.setState({
                        nextName: "Finish",
                        nextFunction: () => window.location.href = "/courses/solve/" + this.state.courseID,
                        currentQuestion: this.state.currentQuestion + 1, nextState: "None"
                    })
                }
                else if(this.state.currentQuestion + 1 < this.state.totalQuestions)
                    this.setState({ currentQuestion: this.state.currentQuestion + 1, nextState: "None" })
            }
        }
    }

    componentDidMount() {
        const jsonData = get_json()
        const practiceID = this.props.match.params.id

        let params = queryString.parse(this.props.location.search)

        const courseID = params["?courseID"]
        const lessonID = params["lessonID"]


        let courseDetails = {}
        let lessonDetails = {}
        let practiceDetails = {}

        jsonData.forEach(course => {
            if (course["id"] === courseID) {
                courseDetails = course
            }
        })

        courseDetails['lessons'].forEach(lesson => {
            if (lessonID === lesson['id'])
                lessonDetails = lesson
        })

        lessonDetails['practises'].forEach(practice => {
            if (practice['id'] === practiceID)
                practiceDetails = practice
        })

        this.setState({
            exercises: practiceDetails['exercises'],
            currentQuestion: 0,
            totalQuestions: practiceDetails['exercises'].length,
            courseID: courseID,
            practiceName: practiceDetails["name"]
        })
    }

    obtainNext() {
        this.setState({
            nextState: "inline"
        })
    }

    render() {
        return (
            <div style={pageContainer}>
                <Header />

                <Segment style={main_segment_style}>
                    <h3>{ this.state.practiceName }</h3>
                    <Image centered src={exampleImg} size='medium' />
                    <p>{this.state.description}</p>

                    <Button onClick={() => {
                        synthesizeSpeech(this.state.description)
                    }} style={{ padding: "0 0.8rem", height: "1.5rem", marginLeft: "80%", fontSize: "70%" }} color="blue">Text-to-Speech</Button>

                    <Segment style={{width: "70%", margin: "auto"}}>
                        <h5>Question {this.state.currentQuestion + 1} of {this.state.totalQuestions}
                            <Button
                                onClick={this.state.nextFunction}
                                style={{ padding: "0 0.8rem", height: "1.5rem", marginLeft: "1rem", fontSize: "70%", display: this.state.nextState }}
                                color="blue">
                                    {this.state.nextName}
                            </Button>
                        </h5>
                        {
                            this.state.exercises.length !== 0 ?
                                <QA
                                    key={uuid()}
                                    question={this.state.exercises[this.state.currentQuestion]["question"]}
                                    imageSrc={this.state.exercises[this.state.currentQuestion]["images"].length === 0 ? null : exampleImg}
                                    exerciseAnswers={this.state.exercises[this.state.currentQuestion]["answers"]}
                                    obtainNext={this.obtainNext}
                                />
                                :
                                null
                        }

                    </Segment>
                </Segment>
            </div>
        )
    }
}
