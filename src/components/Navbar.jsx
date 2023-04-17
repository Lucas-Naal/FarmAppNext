import React, { Component } from 'react'
import { Menu, Segment, Icon } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name='Inicio'
            active={activeItem === 'Inicio'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Productos'
            active={activeItem === 'Productos'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Contacto'
            active={activeItem === 'Contacto'}
            onClick={this.handleItemClick}
            position='right' // Alinea el icono a la derecha
          >
            <Icon name='user' /> Mi perfil
          </Menu.Item>
        </Menu>
      </Segment>
    )
  }
}
