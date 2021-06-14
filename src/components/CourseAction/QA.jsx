import React, { Component } from 'react'
import { Button, Image, Segment } from 'semantic-ui-react'
import {v4 as uuid} from 'uuid'


export default class QA extends Component {
    constructor(props) {
        super(props)

        this.makeExerciseValid = this.makeExerciseValid.bind(this)
        this.listAnswers = this.listAnswers.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        let newAnswers = []

        this.props.exerciseAnswers.forEach(() => {
            newAnswers.push({"is_Right": false})
        })

        this.state = {
            question: this.props.question,
            imageSrc: this.props.imageSrc,
            exerciseAnswers: this.props.exerciseAnswers,
            newAnswers: newAnswers
        }

    }

    makeExerciseValid(idx) {
        let newAnswers = this.state.newAnswers
        newAnswers[idx]["is_Right"] = !newAnswers[idx]["is_Right"]

        this.setState({
            newAnswers: newAnswers
        })

    }

    listAnswers() {
        return this.state.exerciseAnswers.map((answer, idx) => {
            const id = uuid()
            return <Segment style={{ padding: "1rem", width: "50%", margin: "1rem auto" }} key={id}>
                <span onClick={() => {this.makeExerciseValid(idx)}} style={this.state.newAnswers[idx]['is_Right'] ? { cursor: "pointer", fontWeight: "bold" } : { cursor: "pointer" }}>
                    {answer["answer"]}
                </span>
            </Segment>
        })
    }

    handleSubmit() {
        let state = []

        this.state.exerciseAnswers.forEach((el, idx) => {
            if (el["is_Right"] === this.state.newAnswers[idx]["is_Right"])
                state.push(true)
            else
                state.push(false)
        })

        if (!state.includes(false)) {
            alert("You did great!")
            this.props.obtainNext()
        } else
            alert("Try again!")
    }

    render() {
        return (
            <div>
                <h3>{ this.state.question }</h3>

                <Image centered size='medium' src={this.state.imageSrc} />

                {this.listAnswers()}

                <Button style={{ padding: "0 0.8rem", height: "1.5rem", fontSize: "70%" }} color='red'>Reset</Button>
                <Button onClick={this.handleSubmit} style={{ padding: "0 0.8rem", height: "1.5rem", fontSize: "70%" }} color='green'>Check</Button>
            </div>
        )
    }
}
