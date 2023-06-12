import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, Navbar, NavbarBrand, NavItem } from 'reactstrap';
import UserContext from './context/SimpleUserContext.js';

function ProfileCard(props) {
  return (
    <UserContext.Consumer>
      {({firstName, secondName}) => (
        <Card className='w-25 m-auto'>
          <CardImg src={require('./assets/images/tree.jpg')}></CardImg>
          <CardBody>
            <CardTitle>{firstName} {secondName}</CardTitle>
          </CardBody>
        </Card>
      )}
    </UserContext.Consumer>
  )
}

function Page(props) {
  const contextType = UserContext;
  return (
    <UserContext.Consumer>
      {({firstName}) => (
        <div className='w-100 h-100 d-flex flex-column justify-content-center align-items-center'>
          <Navbar className="w-100 justify-content-between flex-grow-0">
            <NavbarBrand><a href="/">MyPage</a></NavbarBrand>
            <NavItem>Hello, {firstName}</NavItem>
          </Navbar>
          <ProfileCard></ProfileCard>
        </div>
      )}
    </UserContext.Consumer>
  )
}

export default class UseContextApp extends Component {
  state = {
    user: {
      firstName: 'Gabe',
      secondName: 'Newell',
    }
  }

  render() {
    return (
      <UserContext.Provider value={this.state.user} >
        <Page></Page>
      </UserContext.Provider>
    )
  }
}