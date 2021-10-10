import { createMedia } from "@artsy/fresnel";
import React from "react";
import { Container, Icon, Image, Menu, Sidebar } from "semantic-ui-react";
import ProjectSelect from "./ProjectSelect.component";
import TimerStartButton from "./TimerStartButton.component";


const AppMedia = createMedia({
  breakpoints: {
    mobile: 320,
    tablet: 768,
    computer: 992,
    largeScreen: 1200,
    widescreen: 1920
  }
});
const { Media } = AppMedia;

const NavBarMobile = (props) => {
  const {
    children,
    onPusherClick,
    onToggle,
    visible
  } = props;

  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible={visible}
      >
        <Menu.Item as='a'>
          <Icon name='home'/>
          Dashboard
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='clock'/>
          Log History
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='setting'/>
          Settings
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='log out'/>
          Log Out
        </Menu.Item>
      </Sidebar>
      <Sidebar.Pusher
        dimmed={visible}
        onClick={onPusherClick}
        style={{ minHeight: "100vh" }}
      >
        <Menu fixed="top" inverted>
          <Menu.Item>
            <Image size="mini" src="https://react.semantic-ui.com/logo.png" />{/*TODO: #6 Change Logo*/}
          </Menu.Item>
          <Menu.Item onClick={onToggle}>
            <Icon name="sidebar" />
          </Menu.Item>
          <Menu.Menu position="right"> {/*TODO: #7 Ideally, this could become MUCH bigger on mobile. Will have to work on that*/}
            <Menu.Item>
              <TimerStartButton/>
              <ProjectSelect/>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

const NavBarDesktop = (props) => {

  return (
    <Menu fixed="top" inverted>
      <Menu.Item>
        <Image size="mini" src="https://react.semantic-ui.com/logo.png" /> {/*TODO: #6 Change Logo*/}
      </Menu.Item>

      <Menu.Item as='a'>
          <Icon name='home'/>
          Dashboard
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='clock'/>
          Log History
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='setting'/>
          Settings
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='log out'/>
          Log Out
        </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>
          <TimerStartButton/>
          <ProjectSelect/>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

const NavBarChildren = (props) => (
  <Container style={{ marginTop: "5em" }}>{props.children}</Container>
);

export default class NavBar extends React.Component {
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Media at="mobile">
          <NavBarMobile
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            visible={visible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Media>

        <Media greaterThan="mobile">
          <NavBarDesktop />
          <NavBarChildren>{children}</NavBarChildren>
        </Media>
      </div>
    );
  }
}