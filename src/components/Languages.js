import React from "react";
import { Grid, Header, Segment } from "semantic-ui-react";
import ResponsiveContainer from "../containers/ResponsiveContainer";
import Footer from "../containers/Footer";

const Languages = () => (
  <ResponsiveContainer>
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
              Advance
            </Header>
            <p style={{ fontSize: "1.33em" }}>Mother-tongue Level</p>
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
                English
              </Header>
              <p style={{ fontSize: "1.33em" }}>University Level</p>
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
              Intermediate
            </Header>
            <p style={{ fontSize: "1.33em" }}>High School Level</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "2em", paddingTop: "2em" }}>
            <Grid.Row
              style={{
                paddingBottom: "2em"
              }}
              align="left"
            >
              <Header as="h3" style={{ fontSize: "2em" }}>
                Portuguese
              </Header>
              <p style={{ fontSize: "1.33em" }}>High School Level</p>
            </Grid.Row>
            <Grid.Row
              style={{
                paddingBottom: "2em"
              }}
              align="left"
            >
              <Header as="h3" style={{ fontSize: "2em" }}>
                Italian
              </Header>
              <p style={{ fontSize: "1.33em" }}>Middle School Level</p>
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
              Basic
            </Header>
            <p style={{ fontSize: "1.33em" }}>Beginner Level</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "2em", paddingTop: "2em" }}>
            <Grid.Row
              style={{
                paddingBottom: "2em"
              }}
              align="left"
            >
              <Header as="h3" style={{ fontSize: "2em" }}>
                Japanese
              </Header>
              <p style={{ fontSize: "1.33em" }}>Primary School Level</p>
            </Grid.Row>
            <Grid.Row
              style={{
                paddingBottom: "2em"
              }}
              align="left"
            >
              <Header as="h3" style={{ fontSize: "2em" }}>
                Mandarin
              </Header>
              <p style={{ fontSize: "1.33em" }}>Primary School Level</p>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Footer />
  </ResponsiveContainer>
);
export default Languages;
