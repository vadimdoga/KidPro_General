import React, { Component } from 'react'
import { Modal, Button } from 'semantic-ui-react'
import PublicEnroll from "../Logged/PublicEnroll"
import PrivateEnroll from "../Logged/PrivateEnroll"

export default class EnrollmentModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            enrollmentState: this.props.enrollmentState
        }
    }
    render() {
        return (
            <Modal
                onClose={() => this.setState({ isOpen: false })}
                onOpen={() => this.setState({ isOpen: true })}
                closeIcon
                open={this.state.isOpen}
                trigger={<Button style={{ padding: "0 0.8rem", height: "1.5rem", marginLeft: "2rem", fontSize: "70%" }} color="teal">Enroll</Button>}
            >
                <Modal.Header>Course Enrollment</Modal.Header>
                <Modal.Content>
                    { this.state.enrollmentState === "public" ? <PublicEnroll /> : <PrivateEnroll /> }
                </Modal.Content>
            </Modal>
        )
    }
}
