import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import MaskLogo from "../../../images/AustinMask.png"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

const Menu = ({ open, setOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggle = () => setDropdownOpen(prevState => !prevState)
  const [dropdownOpen2, setDropdownOpen2] = useState(false)
  const toggle2 = () => setDropdownOpen2(prevState => !prevState)
  const [dropdownOpen3, setDropdownOpen3] = useState(false)
  const toggle3 = () => setDropdownOpen3(prevState => !prevState)

  return (
    <StyledMenu open={open}>
      <Link to="/" onClick={() => setOpen(!open)}>
        <p>Home</p>
      </Link>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Mask Makers</DropdownToggle>
        <DropdownMenu>
          <Link to="/makers" onClick={() => setOpen(!open)}>
            <DropdownItem>The Makers</DropdownItem>
          </Link>
          <Link to="/vendors" onClick={() => setOpen(!open)}>
            <DropdownItem>Vendors</DropdownItem>
          </Link>
        </DropdownMenu>
      </Dropdown>
      <Dropdown isOpen={dropdownOpen2} toggle={toggle2}>
        <DropdownToggle caret>Resources</DropdownToggle>
        <DropdownMenu>
          <Link to="/mask-faq" onClick={() => setOpen(!open)}>
            <DropdownItem>Mask FAQ</DropdownItem>
          </Link>
          <Link to="/" onClick={() => setOpen(!open)}>
            <DropdownItem>Accessories/Other PPE</DropdownItem>
          </Link>
        </DropdownMenu>
      </Dropdown>
      <Dropdown isOpen={dropdownOpen3} toggle={toggle3}>
        <DropdownToggle caret>Ways to Help</DropdownToggle>
        <DropdownMenu>
          <Link to="/volunteer" onClick={() => setOpen(!open)}>
            <DropdownItem>Volunteer</DropdownItem>
          </Link>
          <Link to="/supplies" onClick={() => setOpen(!open)}>
            <DropdownItem>Supplies We Need</DropdownItem>
          </Link>
          <Link to="/contribute" onClick={() => setOpen(!open)}>
            <DropdownItem>Contribute</DropdownItem>
          </Link>
        </DropdownMenu>
      </Dropdown>
      <Link to="/gallery" onClick={() => setOpen(!open)}>
        <p>Gallery</p>
      </Link>
      <Link to="/contact-us" onClick={() => setOpen(!open)}>
        <p>Contact</p>
      </Link>
      <Link to="/mask-directory" onClick={() => setOpen(!open)}>
        <p
          style={{
            color: `white`,
            background: `#1b3651`,
            width: `100%`,
            padding: `1rem .5rem`,
            margin: "0px auto",
            textAlign: `center`,
          }}
        >
          Request a Mask
        </p>
      </Link>
      <img
        style={{ alignSelf: "center" }}
        src={MaskLogo}
        alt="mask logo without text"
      />
    </StyledMenu>
  )
}
export default Menu

const StyledMenu = styled.nav`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  background: white;
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  z-index: 9;
  p {
    font-size: 20px;
    margin-bottom: 2px;
  }
  ul {
    padding-left: 0px;
  }
  li {
    padding: 5px;
  }

  button {
    color: #1b3651;
    font-weight: bold;
    font-size: 20px;
    background: white;
    border: none;
    padding: 10px 2rem;
  }
  img {
    width: 30%;
    margin: 0px auto;
    @media (min-width: 600px) {
      width: 30%;
      margin: 0px;
    }
  }
  a {
    font-size: 1rem;
    padding: 10px 2rem;
    font-weight: bold;
    color: #1b3651;
    text-decoration: none;
    transition: color 0.3s linear;
    @media (min-width: 600px) {
      font-size: 1.5rem;
    }
    @media (max-width: 336px) {
      font-size: 0.7rem;
    }
    &:hover {
      color: darkgray;
    }
  }
`
