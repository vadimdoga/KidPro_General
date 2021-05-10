import React, { Component } from 'react'
import { Grid, Segment, Label, Image } from 'semantic-ui-react'
import { v4 as uuid } from "uuid"
import Header from "../Header"
import Footer from "../Footer"
import paragraphImage from "../../assets/paragraph.png"

const main_segment_style = {
    width: "70%",
    margin: "5rem auto",
    paddingBottom: "2.5rem"
}

const pageContainer = {
    position: "relative",
    minHeight: "100vh"
}

let groupedListOfGrades = []


export default class Homepage extends Component {
    constructor(props) {
        super(props)

        this.listGrades = this.listGrades.bind(this)

        this.state = {
            listOfGrades: []
        }
    }

    componentDidMount() {
        const grades = [
            { "grade": "Grade I", "id": "2173hd" },
            { "grade": "Grade II", "id": "2sadfhd" },
            { "grade": "Grade III", "id": "af173hd" },
            { "grade": "Grade IV", "id": "af3r273hd" },
            { "grade": "Grade V", "id": "asdzfca3hd" },
            { "grade": "Grade VI", "id": "zvc173hd" },
            { "grade": "Grade VII", "id": "zdcvs3szgvfhd" },
            { "grade": "Grade VIII", "id": "2fascde3d" },
            { "grade": "Grade IX", "id": "1cde3d" },
        ]

        this.setState({
            listOfGrades: [...this.state.listOfGrades, ...grades]
        })
    }

    listGrades(value, idx) {
        const mainListLength = this.state.listOfGrades.length - 1
        let htmlReturn = null

        groupedListOfGrades = [...groupedListOfGrades, value]

        if (groupedListOfGrades.length > 3 || mainListLength === idx) {
            const labels = groupedListOfGrades.map(val => {
                return <Grid.Column width={4}>
                    <Label style={{ padding: "0.5rem 0.8rem" }} key={val["id"]} as='a' basic color='blue'>
                        {val["grade"]}
                    </Label>
                </Grid.Column>
            })

            htmlReturn =
                <Grid.Row key={uuid()}>
                    {labels}
                </Grid.Row>

            groupedListOfGrades = []
        }

        return htmlReturn
    }

    render() {
        return (
            <div style={pageContainer}>
                <Header history={this.props.history} />
                <div style={main_segment_style}>
                    <Segment vertical>
                        <Grid style={{ width: "50%", margin: "auto" }} columns={1}>
                            <Grid.Column>
                                <Segment raised >
                                    <h3>Platform Overview</h3>

                                    <Image src={paragraphImage} />
                                </Segment>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                    <Segment vertical>
                        <h3>Choose a corresponding grade</h3>
                        <Grid style={{ margin: "auto", width: "80%" }}>
                            {
                                this.state.listOfGrades.map(this.listGrades)
                            }
                        </Grid>
                    </Segment>
                </div>
                <Footer />

            </div>
        )
    }
}
