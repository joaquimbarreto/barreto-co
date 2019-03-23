import React from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  List,
  Segment
} from "semantic-ui-react";
import ResponsiveContainer from "../containers/ResponsiveContainer";
import { Link } from "react-router-dom";

const Projects = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "2em 0em", textTransform: "uppercase" }}
        >
          <Header as="h1" style={{ fontSize: "3em" }}>
            Featured Projects
          </Header>
        </Divider>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Freelancer Booking App
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          This app was Joaquim's final project at Flatiron School. It is an app
          for a freelancer to let clients book their services. It uses Ruby on
          Rails with ActiveAdmin on the backend with Javascript and React on the
          front end. Deployed on Heroku with custom domain.
        </p>
        <p>(Login details - username: joaquim, password: password)</p>
        <Button
          as="a"
          size="huge"
          href="http://www.freelancerbooking.app"
          target="_blank"
        >
          Open App
        </Button>
        <Divider style={{ margin: "2em 1em" }} />
        <Header as="h3" style={{ fontSize: "2em" }}>
          Flatiron - Student Attendance Score Sheet
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          This app was Joaquim's pair programming project during Module 3 at
          Flatiron School. An app to for school tutors to record students’
          attendance. It uses Ruby on Rails on the backend with Javascript on
          the front end.
        </p>
        <Button
          as="a"
          size="huge"
          href="https://github.com/joaquimbarreto/Flatiron-SASS"
          target="_blank"
        >
          Github
        </Button>
        <Divider style={{ margin: "2em 1em" }} />

        <Header as="h3" style={{ fontSize: "2em" }}>
          Studio Darkroom Workshop App
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          This booking app was a pair programming project during Module 2 at
          Flatiron School. It is an app for users to book space in Pullen's
          yards for film and photography purposes. The app uses on Ruby on Rails
          with Bootstrap CSS. Deployed on Heroku.
        </p>
        <p>(Login details - username: joaquim, password: password)</p>
        <Button
          as="a"
          size="huge"
          href="https://studio-darkroom-workshop-app.herokuapp.com/"
          target="_blank"
        >
          Open App
        </Button>
      </Container>
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
export default Projects;
