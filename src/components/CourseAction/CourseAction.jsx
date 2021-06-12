import React, { Component } from 'react'
import LessonDetails from "./LessonDetails"
import Header from "../Header"

const main_segment_style = {
    width: "80%",
    margin: "5rem auto",
    paddingBottom: "2.5rem"
}

const pageContainer = {
    position: "relative",
    minHeight: "100vh"
}

export default class CourseAction extends Component {
    render() {
        return (
            <div style={pageContainer}>
                <Header />
                <div style={main_segment_style}>
                    <h3>Course Name</h3>
                    <LessonDetails />
                </div>
            </div>
        )
    }
}
