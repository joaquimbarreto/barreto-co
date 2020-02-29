import React from "react";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment
} from "semantic-ui-react";
import ResponsiveContainer from "../containers/ResponsiveContainer";
import Footer from "../containers/Footer";
import { Link } from "react-router-dom";

const HomePage = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              CV Website of Joaquim Barreto
            </Header>

            <p style={{ fontSize: "1.33em" }}>
              Welcome. Joaquim currently works as a junior full-stack software
              engineer at Softwave-Soltec embedded with Conte.it insurance
              company.
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
          the front end. Deployed on Heroku with it own domain:
          www.freelancerbooking.app.
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
          Pig Latin Translator App
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          This app is a result of Joaquim's attempt to do the infamous pig latin
          translation code challenge. This app was done by using React Hooks
          (useState and useEfect) on the frontend and Ruby on Rails (5.2) on the
          backend. Deployed on Heroku with it own domain: www.piglatin.app.
        </p>
        <Button
          as="a"
          size="large"
          href="https://www.piglatin.app"
          target="_blank"
        >
          Open App
        </Button>
      </Container>
    </Segment>
    <Footer />
  </ResponsiveContainer>
);

export default HomePage;
