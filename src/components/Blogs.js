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
            Blogs
          </Header>
        </Divider>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Adventures in Software Engineering
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Going from economist to photographer/filmmaker to software engineer
          does have its perils. Explore Joaquim's trials and tribulations as he
          graples with the information age world.
        </p>
        <Button
          as="a"
          size="huge"
          href="http://www.fullstacksoftware.engineer"
          target="_blank"
        >
          fullstacksoftware.engineer
        </Button>
        <Divider style={{ margin: "2em 1em" }} />
        <Header as="h3" style={{ fontSize: "2em" }}>
          Adventures in Kubernetes & Docker
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Joaquim's epic journey into the world of building a kubernetes cluster
          using Raspberry Pi.
        </p>
        <Button
          as="a"
          size="huge"
          href="http://www.kubernetesdocker.engineer"
          target="_blank"
        >
          kubernetesdocker.engineer
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
