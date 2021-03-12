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
            {t('featured_projects')}
          </Header>
          <Divider style={{ margin: '2em 1em' }} />
          <Header as="h3" style={{ fontSize: '2em' }}>
            Freelancer Booking App
          </Header>
          <p style={{ fontSize: '1.33em' }}>{t('freelance_booking_desc')}</p>
          <Button
            as="a"
            size="huge"
            href="http://www.freelancerbooking.app"
            target="_blank"
          >
            Open App
          </Button>
          <Divider style={{ margin: '2em 1em' }} />
          <Header as="h3" style={{ fontSize: '2em' }}>
            MERN Task Manager App
          </Header>
          <p style={{ fontSize: '1.33em' }}>{t('mern_desc')}</p>
          <Button
            as="a"
            size="huge"
            href="https://mern-task-manager.herokuapp.com"
            target="_blank"
          >
            Open App
          </Button>
          <Button
            as="a"
            size="huge"
            href="https://github.com/joaquimbarreto/task-manager"
            target="_blank"
          >
            Github
          </Button>
          <Divider style={{ margin: '2em 1em' }} />
          <Header as="h3" style={{ fontSize: '2em' }}>
            Pig Latin Translator App
          </Header>
          <p style={{ fontSize: '1.33em' }}>{t('pig_latin_desc')}</p>
          <Button
            as="a"
            size="huge"
            href="https://github.com/joaquimbarreto/pig-latin-MEAN"
            target="_blank"
          >
            Github
          </Button>
          <Divider style={{ margin: '2em 1em' }} />
          <Header as="h3" style={{ fontSize: '2em' }}>
            How To Do Things In Life
          </Header>
          <p style={{ fontSize: '1.33em' }}>{t('htotil_desc')}</p>
          <Button
            as="a"
            size="huge"
            href="https://howtodothingsinlife.netlify.com/"
            target="_blank"
          >
            Open App
          </Button>
          <Button
            as="a"
            size="huge"
            href="https://github.com/joaquimbarreto/thegood_thebad_and_theugly"
            target="_blank"
          >
            Github
          </Button>
          <Divider style={{ margin: '2em 1em' }} />
          <Header as="h3" style={{ fontSize: '2em' }}>
            House MD
          </Header>
          <p style={{ fontSize: '1.33em' }}>{t('house_md_desc')}</p>
          <Button
            as="a"
            size="huge"
            href="https://flatiron-house-md.herokuapp.com/"
            target="_blank"
          >
            Open App
          </Button>
          <Button
            as="a"
            size="huge"
            href="https://github.com/joaquimbarreto/flatiron-house-md"
            target="_blank"
          >
            Github
          </Button>
          <Divider style={{ margin: '2em 1em' }} />
          <Header as="h3" style={{ fontSize: '2em' }}>
            Flatiron - Student Attendance Score Sheet
          </Header>
          <p style={{ fontSize: '1.33em' }}>{t('flatiron_sass_desc')}</p>
          <Button
            as="a"
            size="huge"
            href="https://github.com/joaquimbarreto/Flatiron-SASS"
            target="_blank"
          >
            Github
          </Button>
          <Divider style={{ margin: '2em 1em' }} />
          <Header as="h3" style={{ fontSize: '2em' }}>
            Studio Darkroom Workshop App
          </Header>
          <p style={{ fontSize: '1.33em' }}>{t('sdw_app_desc')}</p>
          <Button
            as="a"
            size="huge"
            href="https://studio-darkroom-workshop-app.herokuapp.com/"
            target="_blank"
          >
            Open App
          </Button>
        </Container>
      </Segment>
      <Footer />
    </ResponsiveContainer>
  );
};
export default Projects;
