import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react'

export default class Subscription extends Component {
    render() {
        return (
            <div>
                <h4>My Subscription</h4>
                <Segment>
                    <p>Current Status</p>
                    <p>Paid</p>
                </Segment>
                <Segment>
                    <p>Subscription Plans</p>

                </Segment>
            </div>
        )
    }
}
