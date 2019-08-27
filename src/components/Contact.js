import React from "react";
import { Button, Grid, Header, Image, Segment } from "semantic-ui-react";
import ResponsiveContainer from "../containers/ResponsiveContainer";
import Footer from "../containers/Footer";

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
    <Footer />
  </ResponsiveContainer>
);
export default Contact;
