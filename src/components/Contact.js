import React from "react";
import {
  Button,
  Container,
  Grid,
  Header,
  Image,
  List,
  Segment
} from "semantic-ui-react";
import ResponsiveContainer from "../containers/ResponsiveContainer";
import { Link } from "react-router-dom";

const Contact = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Contact
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <strong>Telephone:</strong> +(44)(0)7879117888
            </p>
            <p style={{ fontSize: "1.33em" }}>
              <strong>Email:</strong> joaquim@barreto.co
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src="/images/joaquimbarreto.jpg"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge" href="mailto:joaquim@barreto.co">
              Email Joaquim
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
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
                <List.Item
                  as="a"
                  href="https://www.ruby-lang.org/"
                  target="_blank"
                >
                  Ruby
                </List.Item>
                <List.Item
                  as="a"
                  href="https://rubyonrails.org/"
                  target="_blank"
                >
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
              <p>Full-stack Software Developer.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);
export default Contact;
