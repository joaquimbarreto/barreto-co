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

const CV = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Divider
        as="h4"
        className="header"
        horizontal
        style={{ margin: "2em 0em", textTransform: "uppercase" }}
      >
        <Header as="h1" style={{ fontSize: "3em" }}>
          Curriculum Vitae
        </Header>
      </Divider>
      <Grid container celled="internally" stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Statement
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Full stack web developer with a passion for building beautiful,
              fully functioning web apps. With experience in CSS, Ruby on Rails,
              JavaScript, and React and a background in film, photography and
              economics, I discovered web development through my strong desire
              for continuing learning. I bring strong skills in team-building
              and project management that help maximize growth across all major
              goals.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "0em" }} vertical>
      <Grid
        celled="internally"
        columns="equal"
        stackable
        style={{ paddingBottom: "2em", paddingTop: "2em" }}
      >
        <Grid.Row textAlign="center">
          <Grid.Column
            width={6}
            style={{ paddingBottom: "2em", paddingTop: "2em" }}
          >
            <Header as="h3" style={{ fontSize: "2em" }}>
              Tecnical Projects
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              That is what they all say about us
            </p>
          </Grid.Column>
          <Grid.Column>
            <Grid.Row
              align="left"
              style={{
                paddingBottom: "1em"
              }}
            >
              <Header
                as="h3"
                style={{
                  fontSize: "2em"
                }}
              >
                Freelancer Booking App
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                An app for a freelancer to let clients book their services.
              </p>
            </Grid.Row>
            <Grid.Row
              style={{
                paddingBottom: "1em"
              }}
              align="left"
            >
              <Grid.Column
                textAlign="center"
                style={{
                  paddingBottom: "2em"
                }}
              >
                <Button size="large" href="https://www.freelancerbooking.app">
                  Open App
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row
              align="left"
              style={{
                paddingBottom: "1em"
              }}
            >
              <Header
                as="h3"
                style={{
                  fontSize: "2em"
                }}
              >
                Studio Darkroom Workshop App
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                An app for users to book space in Pullen's yards for film and
                photography purposes.
              </p>
            </Grid.Row>
            <Grid.Row
              style={{
                paddingBottom: "1em"
              }}
              align="left"
            >
              <Grid.Column
                textAlign="center"
                style={{
                  paddingBottom: "2em"
                }}
              >
                <Button
                  size="large"
                  href="https://studio-darkroom-workshop-app.herokuapp.com/"
                >
                  Open App
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row
              style={{
                paddingBottom: "1em"
              }}
              align="left"
            >
              <Header as="h3" style={{ fontSize: "2em" }}>
                Flatiron’s Student Attendance Score Sheet (SASS)
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                An app to for school tutors to record students’ attendance.
              </p>
            </Grid.Row>
            <Grid.Row
              style={{
                paddingBottom: "2em"
              }}
              align="left"
            >
              <Grid.Column textAlign="center">
                <Button
                  size="large"
                  href="https://github.com/joaquimbarreto/Flatiron-SASS"
                >
                  Github
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "0em" }} vertical>
      <Grid
        celled="internally"
        columns="equal"
        stackable
        style={{ paddingBottom: "2em", paddingTop: "2em" }}
      >
        <Grid.Row textAlign="center">
          <Grid.Column
            width={6}
            style={{ paddingBottom: "2em", paddingTop: "2em" }}
          >
            <Header as="h3" style={{ fontSize: "2em" }}>
              Technical Skills
            </Header>
            <p style={{ fontSize: "1.33em" }}>Software</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "2em", paddingTop: "2em" }}>
            <Grid.Row
              style={{
                paddingBottom: "2em"
              }}
              align="left"
            >
              <Header as="h3" style={{ fontSize: "2em" }}>
                HTML, CSS. Ruby, Rails, SQL, JavaScript, React, Redux
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Full-stack Software Developer
              </p>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "0em" }} vertical>
      <Grid
        celled="internally"
        columns="equal"
        stackable
        style={{ paddingBottom: "2em", paddingTop: "2em" }}
      >
        <Grid.Row textAlign="center">
          <Grid.Column
            width={6}
            style={{ paddingBottom: "2em", paddingTop: "2em" }}
          >
            <Header as="h3" style={{ fontSize: "2em" }}>
              Employment History
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              That is what they all say about us
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "2em", paddingTop: "2em" }}>
            <Grid.Row
              style={{
                paddingBottom: "2em"
              }}
              align="left"
            >
              <Header as="h3" style={{ fontSize: "2em" }}>
                Barreto.film, London, UK
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                <strong>
                  <i>March 2005 - October 2018</i>
                </strong>
              </p>
              <p style={{ fontSize: "1.33em", paddingBottom: "1em" }}>
                Filmmaker
              </p>
            </Grid.Row>
            <Grid.Row
              style={{
                paddingBottom: "2em"
              }}
              align="left"
            >
              <Header as="h3" style={{ fontSize: "2em" }}>
                Barreto.photography & Barreto.video, London, UK
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                <strong>
                  <i>July 2003 - October 2018</i>
                </strong>
              </p>
              <p style={{ fontSize: "1.33em" }}>Photographer</p>
            </Grid.Row>
            <Grid.Row
              style={{
                paddingBottom: "2em"
              }}
              align="left"
            >
              <Header as="h3" style={{ fontSize: "2em" }}>
                Bureau of Finance, Government of Macau (DSF), Macau, China
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                <strong>
                  <i> July 1999 - June 2003</i>
                </strong>
              </p>
              <p style={{ fontSize: "1.33em" }}>Economist</p>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "0em" }} vertical>
      <Grid
        celled="internally"
        columns="equal"
        stackable
        style={{ paddingBottom: "2em", paddingTop: "2em" }}
      >
        <Grid.Row textAlign="center">
          <Grid.Column
            width={6}
            style={{ paddingBottom: "2em", paddingTop: "2em" }}
          >
            <Header as="h3" style={{ fontSize: "2em" }}>
              Education
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              That is what they all say about us
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "2em", paddingTop: "2em" }}>
            <Grid.Row
              style={{
                paddingBottom: "2em"
              }}
              align="left"
            >
              <Header as="h3" style={{ fontSize: "2em" }}>
                Flatiron School - London, UK
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                <strong>
                  <i>2019</i>
                </strong>
              </p>
              <p style={{ fontSize: "1.33em" }}>
                Full Stack Web Development, Ruby on Rails, JavaScript & React
                program
              </p>
            </Grid.Row>
            <Grid.Row
              style={{
                paddingBottom: "2em"
              }}
              align="left"
            >
              <Header as="h3" style={{ fontSize: "2em" }}>
                University of the Arts, London - London, UK
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                <strong>
                  <i>2006</i>
                </strong>
              </p>
              <p style={{ fontSize: "1.33em" }}>
                Master of Arts: Fashion Photography
              </p>
            </Grid.Row>
            <Grid.Row
              style={{
                paddingBottom: "2em"
              }}
              align="left"
            >
              <Header as="h3" style={{ fontSize: "2em" }}>
                University of Adelaide - Adelaide, South Australia
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                <strong>
                  <i>1998</i>
                </strong>
              </p>
              <p style={{ fontSize: "1.33em" }}>
                Bachelor of Economics: Econometrics
              </p>
            </Grid.Row>
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
                <List.Item as="a">Ruby</List.Item>
                <List.Item as="a">Ruby on Rails</List.Item>
                <List.Item as="a">Javascript</List.Item>
                <List.Item as="a">React</List.Item>
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
export default CV;
