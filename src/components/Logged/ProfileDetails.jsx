import React, { Component } from 'react'
import { Button, Grid, Icon } from 'semantic-ui-react'

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

export default class ProfileDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "username from request"
        }
    }

    render() {
        return (
            <div>
                <Grid style={grid_style}>
                    <Grid.Row style={{border: "2px solid #51A5BA", borderRadius: "10px"}}>
                        <Grid.Column style={{ padding: "5px 5px", textAlign: "center" }}>
                            <h4>Profile Description</h4>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={2}>
                            <Icon.Group size='huge'>
                                <Icon color="grey" size='big' name='circle outline' />
                                <Icon color="grey" name='user' />
                            </Icon.Group>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Grid.Row>
                                <Grid.Column>
                                    <h4>{ this.state.username }</h4>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row style={{marginTop: "2rem"}}>
                                <Grid.Column>
                                    <Button style={{ backgroundColor: "#51A5BA" }} content="Change Username" />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}
