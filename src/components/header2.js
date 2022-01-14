import React, { Component } from 'react'
import { Menu, Icon, Container } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'


export default class MenuExampleInverted extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

      return (
        <div class='divHeader hidden sm:block'>
  
        
        <Container >
        <Menu color='black' inverted  fluid widths={3} compact>
  
          <Menu.Item
            position='centre'
            href='#Experiences'>
              <Header as='h1' color='orange'>Experiences</Header>
          </Menu.Item>
          
          <Menu.Item
            href='#Projects'>
              <Header as='h1' color='orange'>Projects</Header>
          </Menu.Item>
  
          <Menu.Item
            href='#footer'>
              <Header as='h1' color='orange'>Contact</Header>
          </Menu.Item>
        </Menu>
        </Container>
        </div>
      )
  }
}