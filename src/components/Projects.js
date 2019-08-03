/* eslint-disable no-unused-vars */
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
          front end. Deployed on Heroku with its own domain:
          www.freelancerbooking.app.
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
          MERN Task Manager App
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          This app is a simple task manager. The technogies used in the back-end
          are Node.js, Express.js and Mongoose.js. The front-end was done in
          React.js. The choosen database is MongoDB and authentication done with
          JWT. Deployed on Heroku.
        </p>
        <Button
          as="a"
          size="huge"
          href="https://mern-task-manager.herokuapp.com"
          target="_blank"
        >
          Open App
        </Button>
        <Button
          as="a"
          size="huge"
          href="https://github.com/joaquimbarreto/task-manager"
          target="_blank"
        >
          Github
        </Button>
        <Divider style={{ margin: "2em 1em" }} />
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
          size="huge"
          href="https://www.piglatin.app"
          target="_blank"
        >
          Open App
        </Button>
        <Button
          as="a"
          size="huge"
          href="https://github.com/joaquimbarreto/pig-latin"
          target="_blank"
        >
          Github
        </Button>
        <Divider style={{ margin: "2em 1em" }} />
        <Header as="h3" style={{ fontSize: "2em" }}>
          How To Do Things In Life
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          A fun app and the idea just came to me. Everyone always have this
          dilemma when making decisions. No longer! As this app will help in
          every decision one makes. I did this app using React Hooks (useState
          and useEfect) on the frontend. Deployed on Netlify.
        </p>
        <Button
          as="a"
          size="huge"
          href="https://howtodothingsinlife.netlify.com/"
          target="_blank"
        >
          Open App
        </Button>
        <Button
          as="a"
          size="huge"
          href="https://github.com/joaquimbarreto/thegood_thebad_and_theugly"
          target="_blank"
        >
          Github
        </Button>
        <Divider style={{ margin: "2em 1em" }} />
        <Header as="h3" style={{ fontSize: "2em" }}>
          House MD
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          This app was a pair programming project during Module 2 at Flatiron
          School. It is an app for users to diagnose symptoms on their bodies.
          The app uses on Ruby on Rails on the backend with Javascript and React
          on the frontend. Deployed on Heroku.
        </p>
        <Button
          as="a"
          size="huge"
          href="https://flatiron-house-md.herokuapp.com/"
          target="_blank"
        >
          Open App
        </Button>
        <Button
          as="a"
          size="huge"
          href="https://github.com/joaquimbarreto/flatiron-house-md"
          target="_blank"
        >
          Github
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
                  href="https://www.nodejs.org/"
                  target="_blank"
                >
                  Node
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
              <p>Junior Full-stack Software Developer</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);
export default Projects;
