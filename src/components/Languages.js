import React from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';
import ResponsiveContainer from '../containers/ResponsiveContainer';
import Footer from '../containers/Footer';
import { useTranslation } from 'react-i18next';

const Languages = () => {
  const { t } = useTranslation();

  return (
    <ResponsiveContainer>
      <Segment style={{ padding: '0em' }} vertical>
        <Grid
          celled="internally"
          columns="equal"
          stackable
          style={{ paddingBottom: '2em', paddingTop: '2em' }}
        >
          <Grid.Row textAlign="center">
            <Grid.Column
              width={6}
              style={{ paddingBottom: '2em', paddingTop: '2em' }}
            >
              <Header as="h3" style={{ fontSize: '2em' }}>
                Advance
              </Header>
              <p style={{ fontSize: '1.33em' }}>Mother-tongue Level</p>
            </Grid.Column>
            <Grid.Column>
              <Grid.Row
                align="left"
                style={{
                  paddingBottom: '1em',
                }}
              >
                <Header
                  as="h3"
                  style={{
                    fontSize: '2em',
                  }}
                >
                  {t('english')}
                </Header>
                <p style={{ fontSize: '1.33em' }}>University Level</p>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '0em' }} vertical>
        <Grid
          celled="internally"
          columns="equal"
          stackable
          style={{ paddingBottom: '2em', paddingTop: '2em' }}
        >
          <Grid.Row textAlign="center">
            <Grid.Column
              width={6}
              style={{ paddingBottom: '2em', paddingTop: '2em' }}
            >
              <Header as="h3" style={{ fontSize: '2em' }}>
                Intermediate
              </Header>
              <p style={{ fontSize: '1.33em' }}>High School Level</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '2em', paddingTop: '2em' }}>
              <Grid.Row
                style={{
                  paddingBottom: '2em',
                }}
                align="left"
              >
                <Header as="h3" style={{ fontSize: '2em' }}>
                  {t('portuguese')}
                </Header>
                <p style={{ fontSize: '1.33em' }}>High School Level</p>
              </Grid.Row>
              <Grid.Row
                style={{
                  paddingBottom: '2em',
                }}
                align="left"
              >
                <Header as="h3" style={{ fontSize: '2em' }}>
                  {t('italian')}
                </Header>
                <p style={{ fontSize: '1.33em' }}>Middle School Level</p>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '0em' }} vertical>
        <Grid
          celled="internally"
          columns="equal"
          stackable
          style={{ paddingBottom: '2em', paddingTop: '2em' }}
        >
          <Grid.Row textAlign="center">
            <Grid.Column
              width={6}
              style={{ paddingBottom: '2em', paddingTop: '2em' }}
            >
              <Header as="h3" style={{ fontSize: '2em' }}>
                Basic
              </Header>
              <p style={{ fontSize: '1.33em' }}>Beginner Level</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '2em', paddingTop: '2em' }}>
              <Grid.Row
                style={{
                  paddingBottom: '2em',
                }}
                align="left"
              >
                <Header as="h3" style={{ fontSize: '2em' }}>
                  {t('japanese')}
                </Header>
                <p style={{ fontSize: '1.33em' }}>Primary School Level</p>
              </Grid.Row>
              <Grid.Row
                style={{
                  paddingBottom: '2em',
                }}
                align="left"
              >
                <Header as="h3" style={{ fontSize: '2em' }}>
                  {t('mandarin')}
                </Header>
                <p style={{ fontSize: '1.33em' }}>Primary School Level</p>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Footer />
    </ResponsiveContainer>
  );
};
export default Languages;
