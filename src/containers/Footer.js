import React from "react";
import { Container, Grid, Header, List, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <Segment inverted vertical style={{ padding: "5em 0em" }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <List.Item
                as="a"
                href="https://www.github.com/joaquimbarreto"
                target="_blank"
              >
                Github
              </List.Item>
              <List.Item as={Link} to="projects">
                Projects
              </List.Item>
              <List.Item as={Link} to="cv">
                CV
              </List.Item>
              <List.Item as={Link} to="contact">
                Contact Me
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Technologies" />
            <List link inverted>
              <List.Item as="a" href="https://www.nodejs.org/" target="_blank">
                Node
              </List.Item>
              <List.Item as="a" href="https://rubyonrails.org/" target="_blank">
                Ruby on Rails
              </List.Item>
              <List.Item
                as="a"
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
              >
                Javascript
              </List.Item>
              <List.Item as="a" href="https://reactjs.org/" target="_blank">
                React
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4" inverted>
              Joaquim Barreto
            </Header>
            <p>Junior Full-stack Software Engineer</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);
export default Footer;
