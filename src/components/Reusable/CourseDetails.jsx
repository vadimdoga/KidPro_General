import React, { Component } from 'react'
import { Modal, List} from 'semantic-ui-react'

export default class CourseDetails extends Component {
    constructor(props) {
        super(props)

        this.listCourseDetails = this.listCourseDetails.bind(this)

        this.state = {
            lessons: [],
            courseID: null
        }
    }

    static getDerivedStateFromProps(props, state) {
        const jsonData = require("./mock_back.json")
        const res_json = JSON.parse(JSON.stringify(jsonData))

        const courseID = props.courseID

        if (courseID !== null) {
            return {
                courseID: props.courseID,
                lessons: res_json["lessons"]
            }
        }

        return {}
    }

    listCourseDetails() {
        return this.state.lessons.map(lesson => {
            const lecture_arr = lesson["lectures"].map(lecture => {
                return { "content": lecture["name"], "order": lecture["order"] }
            })

            const practice_arr = lesson["practises"].map(practice => {
                return { "content": practice["name"], "order": practice["order"] }
            })

            const mix_arr = [...lecture_arr, ...practice_arr]
            mix_arr.sort((x, y) => {
                return ((x["order"] < y["order"]) ? -1 : ((x["order"] > y["order"]) ? 1 : 0))
            })

            return <List.Item as="li" value="*">
                {lesson["name"]}
                <List.Item as="ol">
                    {mix_arr.map(val =>
                        <List.Item as="li" value="-">
                            { val["content"] }
                        </List.Item>
                    )}
                </List.Item>
            </List.Item>
        })

    }

    render() {
        return (
            <Modal
                closeIcon
                onClose={this.props.handleClose}
                onOpen={this.props.handleOpen}
                open={this.props.isOpen}
                size='tiny'
                style={{textAlign: "center"}}
            >
                <Modal.Header>Course Name</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <p>
                            Above are represented all lesson, practices that contains this course.
                        </p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Content>
                    <List as='ol'>
                        {this.listCourseDetails()}
                    </List>
                </Modal.Content>
            </Modal>
        )
    }
}
