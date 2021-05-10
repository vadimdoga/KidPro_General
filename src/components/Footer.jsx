import React, { Component } from 'react'
import {
    Container,
    Grid,
    Header,
    Icon,
    List,
    Segment
} from 'semantic-ui-react';

const footer_style = {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "2.5rem",
}

export default class Footer extends Component {
    render() {
        return (
            <footer style={footer_style}>
                <Segment inverted vertical>
                    <Container>
                        <Grid divided inverted stackable>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Header inverted as='h4' content='Services' />
                                    <List link inverted>
                                        <List.Item as='a' href='#'>shop</List.Item>
                                        <List.Item as='a' href='#'>FAQ</List.Item>
                                        <List.Item as='a' href='#'>Diversity</List.Item>
                                        <List.Item as='a' href='#'>Blog</List.Item>
                                    </List>
                                </Grid.Column>

                                <Grid.Column width={8}>
                                    <Header inverted as='h4' content='About' />
                                    <List link inverted>
                                        <List.Item as='a' href='#'>Sitemap</List.Item>
                                        <List.Item as='a' href='#'>Contact Us</List.Item>
                                        <List.Item as='a' href='#'>Privacy Policy</List.Item>
                                    </List>
                                    <Header as='h4' inverted>
                                        Stay in Touch
                            </Header>
                                    <a href="https://twitter.com/S0f1eM" style={{ color: '#fff' }}><Icon name='twitter' size='big' /></a>
                                    <a href="https://github.com/S0f1eM" style={{ color: '#fff' }}><Icon name='instagram' size='big' /></a>
                                    <a href="https://github.com/S0f1eM" style={{ color: '#fff' }}><Icon name='facebook' size='big' /></a>
                                    <a href="https://github.com/S0f1eM" style={{ color: '#fff' }}><Icon name='github' size='big' /></a>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
            </footer>
        )
    }
}
