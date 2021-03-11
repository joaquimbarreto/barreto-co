import React from 'react';

import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react';
import ResponsiveContainer from '../containers/ResponsiveContainer';
import Footer from '../containers/Footer';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <ResponsiveContainer>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                {t('cv_title')}
              </Header>

              <p style={{ fontSize: '1.33em' }}>{t('welcome')}</p>
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
      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                Curriculum Vitae
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Click <Link to="/cv">{t('here')}</Link> {t('see_cv')}
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                Github Repositories
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                <Image
                  avatar
                  src="/images/github.png"
                  href="https://www.github.com/joaquimbarreto?tab=repositories"
                  target="_blank"
                />
                Click{' '}
                <a
                  href="https://www.github.com/joaquimbarreto?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('here')}
                </a>{' '}
                {t('see_repositories')}
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '4em 0em' }} vertical>
        <Container text>
          <Header as="h4" style={{ fontSize: '3em' }}>
            {t('professional_experience')}
          </Header>
          <Divider style={{ margin: '2em 1em' }} />
          <Header as="h3" style={{ fontSize: '2em' }}>
            Enel X
          </Header>
          <p style={{ fontSize: '1.33em' }}>{t('enel_x_desc')}</p>
          <Divider style={{ margin: '2em 1em' }} />
          <Header as="h3" style={{ fontSize: '2em' }}>
            Conte.it
          </Header>
          <p style={{ fontSize: '1.33em' }}>{t('conte_it_desc')}</p>
        </Container>
      </Segment>
      <Footer />
    </ResponsiveContainer>
  );
};

export default HomePage;
