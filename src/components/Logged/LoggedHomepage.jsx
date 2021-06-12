import React, { Component } from 'react'
import LearnerHomepage from '../Learner/Homepage'
import ParentHomepage from "../Parent/Homepage"
import TeacherHomepage from "../Teacher/Homepage"

export default class Homepage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            type: this.props.userType
        }

        console.log(this.state.type)
    }
    render() {
        return (
            this.state.type === "learner" ?  <LearnerHomepage /> : this.state.type === "teacher" ? <TeacherHomepage /> : this.state.type === "parent" ? <ParentHomepage /> : null
        )
    }
}
