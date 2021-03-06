import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  Container,
  Header,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';
import DropdownLanguageSelection from '../components/LanguageDropdown';
import { useTranslation, withTranslation } from 'react-i18next';

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined';

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => {
  const { t } = useTranslation();

  return (
    <Container text>
      <Header
        as="h1"
        content="Joaquim Barreto"
        inverted
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '1em',
        }}
      />
      <Header
        as="h2"
        content={t('job_title')}
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1.4em',
        }}
      />
    </Container>
  );
};

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    const Nav = (props) => (
      <NavLink exact {...props} activeClassName="active" />
    );

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 400, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as={Nav} to="/" name="home">
                  Home
                </Menu.Item>
                <Menu.Item as={Nav} to="/blogs" name="blogs">
                  Blog
                </Menu.Item>
                <Menu.Item
                  as="a"
                  href="http://www.github.com/joaquimbarreto"
                  target="_blank"
                >
                  Github
                </Menu.Item>
                <Menu.Item as={Nav} to="/projects" name="projects">
                  {this.props.t('projects')}
                </Menu.Item>
                <Menu.Item as={Nav} to="/languages" name="languages">
                  {this.props.t('languages')}
                </Menu.Item>
                <Menu.Item as={Nav} to="/cv" name="cv">
                  CV
                </Menu.Item>
                <Menu.Item position="right">
                  <DropdownLanguageSelection />
                  <Button
                    as={Link}
                    to="contact"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: '0.5em' }}
                  >
                    {this.props.t('contact')}
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as={Link} to="/" active>
            Home
          </Menu.Item>
          <Menu.Item as={Link} to="blogs">
            Blog
          </Menu.Item>
          <Menu.Item
            as="a"
            href="http://www.github.com/joaquimbarreto"
            target="_blank"
          >
            Github
          </Menu.Item>
          <Menu.Item as={Link} to="projects">
            {this.props.t('projects')}
          </Menu.Item>
          <Menu.Item as={Link} to="languages">
            {this.props.t('languages')}
          </Menu.Item>
          <Menu.Item as={Link} to="cv">
            CV
          </Menu.Item>
          <Menu.Item as={Link} to="contact">
            {this.props.t('contact')}
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <DropdownLanguageSelection />
                  <Button
                    as={Link}
                    to="contact"
                    inverted
                    style={{ marginLeft: '0.5em' }}
                  >
                    {this.props.t('contact')}
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children, t }) => {
  return (
    <div>
      <DesktopContainer t={t}>{children}</DesktopContainer>
      <MobileContainer t={t}>{children}</MobileContainer>
    </div>
  );
};

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

export default withTranslation()(ResponsiveContainer);
