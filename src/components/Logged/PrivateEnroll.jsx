import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react'

export default class PrivateEnroll extends Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            enrollmentKey: null
        }
    }

    handleSubmit() {
        console.log(this.state.enrollmentKey)
    }

    render() {
        return (
            <div>
                <h5>Join a private course</h5>
                <Input icon='users' iconPosition="left" placeholder="Enrollment key..." onChange={e => this.setState({ enrollmentKey: e.target.value })} />
                <Button type="submit" onClick={this.handleSubmit} >Enroll</Button>
                <p style={{color: "gray"}}>Note: The teacher has to share with you an enrollment key</p>
            </div>
        )
    }
}
