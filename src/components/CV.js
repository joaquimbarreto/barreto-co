import React from 'react';
import { Button, Divider, Grid, Header, Segment } from 'semantic-ui-react';
import ResponsiveContainer from '../containers/ResponsiveContainer';
import Footer from '../containers/Footer';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CV = () => {
  const { t } = useTranslation();

  return (
    <ResponsiveContainer>
      <Segment style={{ padding: '4em 0em' }} vertical>
        <Grid container celled="internally" stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column>
              <Header as="h1" style={{ fontSize: '3em' }}>
                Curriculum Vitae
              </Header>
              <Divider style={{ margin: '2em 1em' }} />
              <Header as="h3" style={{ fontSize: '2em' }}>
                {t('statement_title')}
              </Header>
              <p style={{ fontSize: '1.33em' }}>{t('statement')}</p>
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
                {t('technical_projects')}
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Full-Stack Software Engineering
              </p>
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
                  Freelancer Booking App
                </Header>
                <p style={{ fontSize: '1.33em' }}>{t('fba_blurb')}</p>
              </Grid.Row>
              <Grid.Row
                style={{
                  paddingBottom: '1em',
                }}
                align="left"
              >
                <Grid.Column
                  textAlign="center"
                  style={{
                    paddingBottom: '2em',
                  }}
                >
                  <Button
                    size="large"
                    href="https://www.freelancerbooking.app"
                    target="_blank"
                  >
                    Open App
                  </Button>
                </Grid.Column>
              </Grid.Row>
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
                  MERN Task Manager App
                </Header>
                <p style={{ fontSize: '1.33em' }}>{t('mern_blurb')}</p>
              </Grid.Row>
              <Grid.Row
                style={{
                  paddingBottom: '1em',
                }}
                align="left"
              >
                <Grid.Column
                  textAlign="center"
                  style={{
                    paddingBottom: '2em',
                  }}
                >
                  <Button
                    size="large"
                    href="https://mern-task-manager.herokuapp.com"
                    target="_blank"
                  >
                    Open App
                  </Button>
                  <Button
                    size="large"
                    href="https://github.com/joaquimbarreto/task-manager"
                    target="_blank"
                  >
                    Github
                  </Button>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row
                style={{
                  paddingBottom: '1em',
                }}
                align="left"
              >
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Pig Latin Translator App
                </Header>
                <p style={{ fontSize: '1.33em' }}>{t('pig_latin_blurb')}</p>
              </Grid.Row>
              <Grid.Row
                style={{
                  paddingBottom: '1em',
                }}
                align="left"
              >
                <Grid.Column
                  textAlign="center"
                  style={{
                    paddingBottom: '2em',
                  }}
                >
                  <Button
                    size="large"
                    href="https://github.com/joaquimbarreto/pig-latin-MEAN"
                    target="_blank"
                  >
                    Github
                  </Button>
                </Grid.Column>
              </Grid.Row>
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
                  <Link to="/projects">{t('see_all_projects')}</Link>
                </Header>
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
                {t('technical_skills')}
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Full-Stack Software Engineering
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '2em', paddingTop: '2em' }}>
              <Grid.Row
                style={{
                  paddingBottom: '2em',
                }}
                align="left"
              >
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Front-End
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  React.js, Angular 2+, JavaScript, TypeScript, (Blazor
                  WebAssembly {t('coming_soon')})
                </p>
              </Grid.Row>
              <Grid.Row
                style={{
                  paddingBottom: '2em',
                }}
                align="left"
              >
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Back-End
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Node.js, C#, ASP.NET, (Blazor Server {t('coming_soon')})
                </p>
              </Grid.Row>
              <Grid.Row
                style={{
                  paddingBottom: '2em',
                }}
                align="left"
              >
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Mobile
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  (Kotlin {t('coming_soon')})
                </p>
              </Grid.Row>
              <Grid.Row
                style={{
                  paddingBottom: '2em',
                }}
                align="left"
              >
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Databases
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  PostgreSQL, SQLite3, MongoDB, MySQL
                </p>
              </Grid.Row>
              <Grid.Row
                style={{
                  paddingBottom: '2em',
                }}
                align="left"
              >
                <Header as="h3" style={{ fontSize: '2em' }}>
                  TDD
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Jest, Jasmine, Karma, Travis
                </p>
              </Grid.Row>
              <Grid.Row
                style={{
                  paddingBottom: '2em',
                }}
                align="left"
              >
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Dev Ops
                </Header>
                <p style={{ fontSize: '1.33em' }}>Kubernetes & Docker</p>
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
                {t('employment_history')}
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                {t('china')} & {t('uk')}
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '2em', paddingTop: '2em' }}>
              <Grid.Row
                style={{
                  paddingBottom: '2em',
                }}
                align="left"
              >
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Softwave-Soltec, {t('rome')}, {t('italy')}
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  <strong>
                    <i>
                      {t('january')} 2020 - {t('present')}
                    </i>
                  </strong>
                </p>
                <p style={{ fontSize: '1.33em', paddingBottom: '1em' }}>
                  {t('job_title')}
                </p>
              </Grid.Row>
              <Grid.Row
                style={{
                  paddingBottom: '2em',
                }}
                align="left"
              >
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Investech-Blue, {t('rome')}, {t('italy')}
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  <strong>
                    <i>
                      {t('october')} 2019 - {t('december')} 2019
                    </i>
                  </strong>
                </p>
                <p style={{ fontSize: '1.33em', paddingBottom: '1em' }}>
                  {t('job_title')}
                </p>
              </Grid.Row>
              <Grid.Row
                style={{
                  paddingBottom: '2em',
                }}
                align="left"
              >
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Barreto.photography, {t('london')}, {t('uk')}
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  <strong>
                    <i>
                      {t('july')} 2003 - {t('october')} 2018
                    </i>
                  </strong>
                </p>
                <p style={{ fontSize: '1.33em', paddingBottom: '1em' }}>
                  {t('photographer')}
                </p>
              </Grid.Row>
              <Grid.Row
                style={{
                  paddingBottom: '2em',
                }}
                align="left"
              >
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Barreto.film & Barreto.video, {t('london')}, {t('uk')}
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  <strong>
                    <i>
                      {t('march')} 2005- {t('october')} 2018
                    </i>
                  </strong>
                </p>
                <p style={{ fontSize: '1.33em', paddingBottom: '1em' }}>
                  Filmmaker
                </p>
              </Grid.Row>
              <Grid.Row
                style={{
                  paddingBottom: '2em',
                }}
                align="left"
              >
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Bureau of Finance, Government of Macau (DSF), Macau,{' '}
                  {t('china')}
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  <strong>
                    <i>
                      {' '}
                      {t('july')} 1999 - {t('june')} 2003
                    </i>
                  </strong>
                </p>
                <p style={{ fontSize: '1.33em', paddingBottom: '1em' }}>
                  {t('economist')}
                </p>
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
                {t('education')}
              </Header>
              <p style={{ fontSize: '1.33em' }}>Australia & {t('uk')}</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '2em', paddingTop: '2em' }}>
              <Grid.Row
                style={{
                  paddingBottom: '2em',
                }}
                align="left"
              >
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Flatiron School - {t('london')}, {t('uk')}
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  <strong>
                    <i>2019</i>
                  </strong>
                </p>
                <p style={{ fontSize: '1.33em' }}>
                  Full Stack Web Development, Ruby on Rails, JavaScript & React
                  program
                </p>
              </Grid.Row>
              <Grid.Row
                style={{
                  paddingBottom: '2em',
                }}
                align="left"
              >
                <Header as="h3" style={{ fontSize: '2em' }}>
                  University of the Arts, London - {t('london')}, {t('uk')}
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  <strong>
                    <i>2006</i>
                  </strong>
                </p>
                <p style={{ fontSize: '1.33em' }}>
                  Master of Arts: Fashion Photography
                </p>
              </Grid.Row>
              <Grid.Row
                style={{
                  paddingBottom: '2em',
                }}
                align="left"
              >
                <Header as="h3" style={{ fontSize: '2em' }}>
                  University of Adelaide - Adelaide, South Australia
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  <strong>
                    <i>1998</i>
                  </strong>
                </p>
                <p style={{ fontSize: '1.33em' }}>
                  Bachelor of Economics: Econometrics
                </p>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Footer />
    </ResponsiveContainer>
  );
};

export default CV;
