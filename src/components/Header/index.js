import React from 'react'
import logoSrc from '../../assets/logo-inverted.png'
import styled from 'styled-components'

const NavBar = styled.section`
  width: 100%;
  height: 60px;
  margin-top: 20px;
  display: flex;
`

const NavBarLogo = styled.img`
  height: 100%;
  line-height: 60px;
`

const NavBarLogoGroup = styled.div`
  height: 100%;
  width: 100%;
  float: left;
`

const NavBarItem = styled.a`
  height: 100%;
  text-decoration: none;
  color: white;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  margin-left: 60px;
  line-height: 60px;
  padding: 25px;
  cursor: pointer;
`

const NavBarItemGroup = styled.div`
  float: right;
  width: 100%;
  text-align: right;
`

export default function Header() {
  return (
    <NavBar>
      <NavBarLogoGroup>
        <NavBarLogo src={logoSrc} />
      </NavBarLogoGroup>
      <NavBarItemGroup>
        <NavBarItem href="#info-section">About</NavBarItem>
        <NavBarItem href="https://medium.com/@murcul" target="_blank">Blog</NavBarItem>
      </NavBarItemGroup>
    </NavBar>
  )
}