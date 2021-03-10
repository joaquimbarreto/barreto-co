import React from 'react';
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
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
                  {t('projects')}
                </List.Item>
                <List.Item as={Link} to="cv">
                  CV
                </List.Item>
                <List.Item as={Link} to="contact">
                  {t('contact')}
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header inverted as="h4" content="Blogs" />
              <List link inverted>
                <List.Item
                  as="a"
                  href="https://fullstacksoftware.engineer"
                  target="_blank"
                >
                  fullstacksoftware.engineer
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Joaquim Barreto
              </Header>
              <p>{t('job_title')}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};
export default Footer;
