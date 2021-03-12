import React from 'react';
import { Button, Container, Divider, Header, Segment } from 'semantic-ui-react';
import ResponsiveContainer from '../containers/ResponsiveContainer';
import Footer from '../containers/Footer';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <ResponsiveContainer>
      <Segment style={{ padding: '4em 0em' }} vertical>
        <Container text>
          <Header as="h1" style={{ fontSize: '3em' }}>
            Blog
          </Header>
          <Divider style={{ margin: '2em 1em' }} />
          <Header as="h3" style={{ fontSize: '2em' }}>
            {t('adventures')}
          </Header>
          <p style={{ fontSize: '1.33em' }}>{t('blog_desc')}</p>
          <Button
            as="a"
            size="huge"
            href="https://www.fullstacksoftware.engineer"
            target="_blank"
          >
            fullstacksoftware.engineer
          </Button>
        </Container>
      </Segment>
      <Footer />
    </ResponsiveContainer>
  );
};
export default Projects;
