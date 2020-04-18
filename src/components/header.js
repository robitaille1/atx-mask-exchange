import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Burger from "../components/Burger/Burger"
import Menu from "../components/Menu/Menu"
import AmeLogo from "../images/AME-logo.png"

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <HeaderItem>
      <Link to="/">
        <LogoImg src={AmeLogo} alt="Austin Mask Exchange" />
      </Link>
      <div style={{ display: "flex" }}>
        <NavLinks>
          <Link to="/faq">FAQ</Link>
          <Link to="/directory">Request</Link>
          <Link to="/contact">Contact</Link>
        </NavLinks>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </HeaderItem>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const HeaderItem = styled.header`
  margin-bottom: 1.45rem;
  display: flex;
  margin: 0 auto;
  padding: 10px 2rem;
  justify-content: space-between;
  z-index: 1;
  @media (min-width: 750px) {
    padding: 0px 2rem;
  }

  h1 {
    margin: 0;
    font-size: 32px;
  }
  a {
    &:hover {
      color: dimgrey;
    }
  }
`
const NavLinks = styled.div`
  /* display: flex;
  flex-direction: column; */
  display: none;
  font-size: 16px;
  align-items: center;

  @media (min-width: 750px) {
    display: flex;
    flex-direction: none;
  }

  a {
    font-size: 20px;
    margin: 10px;
    color: #1b3651;
    text-decoration: none;
    &:hover {
      color: #060b10;
    }
  }

  button {
    margin-left: 5px;
    padding: 10px 20px;
    background: #253551;
    color: white;
    border: none;

    &:hover {
      cursor: pointer;
      background: #25355195;
    }
  }
`

const LogoImg = styled.img`
  height: 50px;
  @media (min-width: 750px) {
    height: 100px;
  }
`
