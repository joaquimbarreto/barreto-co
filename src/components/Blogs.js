import React from "react";
import { Button, Container, Divider, Header, Segment } from "semantic-ui-react";
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
          href="https://www.fullstacksoftware.engineer"
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
          href="https://www.kubernetesdocker.engineer"
          target="_blank"
        >
          kubernetesdocker.engineer
        </Button>
      </Container>
    </Segment>
    <Footer />
  </ResponsiveContainer>
);
export default Projects;
