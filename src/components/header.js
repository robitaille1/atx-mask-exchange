import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <HeaderItem>
    <h1>
      <Link
        to="/"
        style={{
          color: `black`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>

    <NavLinks>
      <Link to="/">MaskFAQ</Link>
      <Link to="/">Mask Directory</Link>
      <Link to="/">Gallery</Link>
      <Link to="/">Blog</Link>
      <Link to="/">Contact Us</Link>
      <button>Donate</button>
    </NavLinks>
  </HeaderItem>
)

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
  padding: 2rem;
  justify-content: space-between;
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
  display: inline-flex;
  font-size: 16px;
  align-items: center;

  a {
    margin: 5px;
    color: black;
    text-decoration: none;
    &:hover {
      color: dimgrey;
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
