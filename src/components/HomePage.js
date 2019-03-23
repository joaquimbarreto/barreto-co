import React from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment
} from "semantic-ui-react";
import ResponsiveContainer from "../containers/ResponsiveContainer";
import { Link } from "react-router-dom";

const HomePage = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Welcome to Barreto.co(ding)
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              The website of Joaquim Barreto as a software developer and a
              recent graduate of Flatiron's Software Engineering Programme.
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
      </Grid>
    </Segment>
    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Curriculum Vitae
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Click <Link to="/cv">here</Link> to see Joaquim's CV.
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Github Repositories
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <Image
                avatar
                src="/images/github.png"
                href="https://www.github.com/joaquimbarreto?tab=repositories"
                target="_blank"
              />
              Click{" "}
              <a
                href="https://www.github.com/joaquimbarreto?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{" "}
              to see all repositories.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Freelancer Booking App
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          This app was Joaquim's final project at Flatiron School. It uses Ruby
          on Rails with ActiveAdmin on the backend with Javascript and React on
          the front end.
        </p>
        <Button as="a" size="large" href="http://www.freelancerbooking.app">
          Open App
        </Button>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <Link to="/projects">Other Projects</Link>
        </Divider>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Flatiron Mod 2 Project
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          This app was a pair programming project during Module 2 at Flatiron
          School. The app uses on Ruby on Rails with Bootstrap CSS.
        </p>
        <Button
          as="a"
          size="large"
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
export default HomePage;
