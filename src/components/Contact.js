import React from 'react';
import { Button, Grid, Header, Image, Segment } from 'semantic-ui-react';
import ResponsiveContainer from '../containers/ResponsiveContainer';
import Footer from '../containers/Footer';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <ResponsiveContainer>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                {t('contact')}
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                <strong>Email:</strong> joaquim@barreto.co
              </p>
              <Button size="huge" href="mailto:joaquim@barreto.co">
                Email Joaquim
              </Button>
            </Grid.Column>
            <Grid.Column floated="right" width={6} align="center">
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
      <Footer />
    </ResponsiveContainer>
  );
};
export default Contact;
