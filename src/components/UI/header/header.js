import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import React from "react"
import Burger from "../Burger/Burger"
import Menu from "../Menu/Menu"
import AmeLogo from "../../../images/AME-logo.png"
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import "../../bootstrap.min.css"

const Header = ({ open, setOpen }) => {
  return (
    <HeaderItem>
      <Link to="/">
        <LogoImg src={AmeLogo} alt="Austin Mask Exchange" />
      </Link>
      <div style={{ display: "flex" }}>
        <NavLinks>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Mask Makers
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Link to="/makers">The Makers</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/vendors">Vendors</Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Resources
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Link to="/mask-faq">Mask FAQ</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/">Accessories/Other PPE</Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Ways To Help
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Link to="/volunteer">Volunteer</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/supplies">Supplies We Need</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/">Contribute</Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Link to="/contact-us">Contact</Link>
          <Link to="/mask-directory">
            <RequestButton>Request a Mask</RequestButton>
          </Link>
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

  li {
    list-style-type: none;
  }
`
const NavLinks = styled.div`
  display: none;
  font-size: 16px;
  align-items: center;

  @media (min-width: 940px) {
    display: flex;
    flex-direction: none;
  }

  a {
    margin: 10px;
    color: #1b3651;
    text-decoration: none;
    &:hover {
      color: #060b10;
    }
  }
`

const RequestButton = styled.button`
  margin-left: 5px;
  padding: 10px 20px;
  background: #253551;
  color: white;
  border: none;

  &:hover {
    cursor: pointer;
    background: #25355195;
  }
`

const LogoImg = styled.img`
  height: 50px;
  @media (min-width: 750px) {
    height: 75px;
  }
`
