import React, { Component } from 'react'
import { HeaderWrapper, Logo } from './style'

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderWrapper>
          <Logo>Wealth</Logo>
        </HeaderWrapper>
      </React.Fragment>
    )
  }
}

export default Header
