import React, { Component } from 'react'
import { Button, Grid, Progress} from 'semantic-ui-react'

const grid_style = {
    position: "relative",
    fontSize: "1rem",
    background: "#fff",
    boxShadow: "0 1px 2px 0 rgb(34 36 38 / 15%)",
    margin: "1rem 0",
    padding: "1em 1em",
    borderRadius: ".28571429rem",
    border: "1px solid rgba(34,36,38,.15)"
}

export default class LessonDetails extends Component {
    constructor(props) {
        super(props)

        this.createPracticesContent = this.createPracticesContent.bind(this)
        this.createLecturesContent = this.createLecturesContent.bind(this)
        this.generatePracticeLink = this.generatePracticeLink.bind(this)
        this.generateLectureLink = this.generateLectureLink.bind(this)
        this.orderContent = this.orderContent.bind(this)

        this.state = {
            lessonDescription: this.props.lessonDescription,
            lessonName: this.props.lessonName,
            lectures: this.props.lectures,
            practices: this.props.practices
        }
    }

    generatePracticeLink(value) {
        window.location.href = "/courses/solve/practice/" + value["id"] + "?courseID=" + this.props.courseID + "&lessonID=" + this.props.id
        return window
    }

    generateLectureLink(value) {
        window.location.href = "/courses/solve/lecture/" + value["id"] + "?courseID=" + this.props.courseID + "&lessonID=" + this.props.id
        return window
    }

    createLecturesContent([key, value]) {
        const content = <Grid.Row id={value["id"]} divided>
            <Grid.Column width={3}>{ value["name"] }</Grid.Column>
            <Grid.Column width={11}>{ value["description"] }</Grid.Column>
            <Grid.Column width={2}>
                <Button onClick={() => this.generateLectureLink(value)} style={{fontSize: "0.8rem"}} color="vk">Start/Resume</Button>
            </Grid.Column>
        </Grid.Row>
        return {"order": value["order"], "content": content}
    }

    createPracticesContent([key, value]) {
        const content = <Grid.Row id={value["id"]} divided>
            <Grid.Column width={3}>{ value["name"] }</Grid.Column>
            <Grid.Column width={11}>{ value["description"] }</Grid.Column>
            <Grid.Column width={2}>
                <Button onClick={() => this.generatePracticeLink(value)} style={{fontSize: "0.8rem"}} color="vk">Start/Resume</Button>
            </Grid.Column>
        </Grid.Row>
        return {"order": value["order"], "content": content}
    }

    orderContent() {
        const lectures = Object.entries(this.state.lectures).map(this.createLecturesContent)
        const practices = Object.entries(this.state.practices).map(this.createPracticesContent)

        const newArr = [...lectures, ...practices]

        newArr.sort((x, y) => {
            return ((x["order"] < y["order"]) ? -1 : ((x["order"] > y["order"]) ? 1 : 0))
        })

        return newArr.map(value => value["content"])
    }

    render() {
        return (
            <Grid style={grid_style}>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <h5>{ this.state.lessonName }</h5>
                    </Grid.Column>
                    <Grid.Column width={11}>{ this.state.lessonDescription }</Grid.Column>
                    <Grid.Column width={2}>
                        <Button style={{fontSize: "0.8rem"}} color="linkedin">Start/Resume</Button>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column style={{margin: "auto"}} width={9}>
                        <Progress color="blue" value='4' total='5' progress='ratio' />
                    </Grid.Column>
                </Grid.Row>
                {this.orderContent()}
            </Grid>
        )
    }
}
