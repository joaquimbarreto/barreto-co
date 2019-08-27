import React from "react";
import {
  Button,
  Container,
  Divider,
  Header,
  Segment
} from "semantic-ui-react";
import ResponsiveContainer from "../containers/ResponsiveContainer";
import Footer from "../containers/Footer";

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
          PHP MySQL Symphony CMS Website
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          This website was a code challenge to create a website using PHP, MySQL
          and Symphony CMS. Joaquim chose to learn those technologies as
          requested in the challenge instead of using technologies already
          familiar with. Hosted on a GoDaddy acount with its own domain:
          www.phpmysqlsymphony.uk.
        </p>
        <Button
          as="a"
          size="huge"
          href="http://www.phpmysqlsymphony.uk"
          target="_blank"
        >
          Open Website
        </Button>
        <Divider style={{ margin: "2em 1em" }} />
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
    <Footer />
  </ResponsiveContainer>
);
export default Projects;
