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
      <Link to="/">
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
          <Link to="/" onClick={() => setOpen(!open)}>
            <DropdownItem>Bulk Needs</DropdownItem>
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
          <Link to="/contact-us" onClick={() => setOpen(!open)}>
            <DropdownItem>Become a Maker</DropdownItem>
          </Link>
          <Link to="/supplies" onClick={() => setOpen(!open)}>
            <DropdownItem>Supplies We Need</DropdownItem>
          </Link>
          <Link to="/contact-us" onClick={() => setOpen(!open)}>
            <DropdownItem>Contribute</DropdownItem>
          </Link>
        </DropdownMenu>
      </Dropdown>
      <Link to="/contact-us" onClick={() => setOpen(!open)}>
        <p>Contact</p>
      </Link>
      <Link to="/mask-directory" onClick={() => setOpen(!open)}>
        <p
          style={{
            color: `white`,
            background: `#1b3651`,
            width: `50%`,
            padding: `1rem .5rem`,
            margin: "0px auto",
          }}
        >
          Request a Mask
        </p>
      </Link>
      {/* <Link to="/" onClick={() => setOpen(!open)}>
        Home
      </Link>
      <Link to="/makers" onClick={() => setOpen(!open)}>
        The Makers
      </Link>
      <p>Mask Makers</p>
      <ul>
        <Link to="/makers" onClick={() => setOpen(!open)}>
          <li>The Makers</li>
        </Link>
        <Link to="/vendors" onClick={() => setOpen(!open)}>
          <li>Vendors</li>
        </Link>
      </ul>
      <p>Resources</p>
      <ul>
        <Link to="/mask-faq" onClick={() => setOpen(!open)}>
          <li>Mask FAQ</li>
        </Link>
        <Link to="/" onClick={() => setOpen(!open)}>
          <li>Accessories/Other PPE</li>
        </Link>
      </ul>
      <p>Ways to help</p>
      <ul>
        <Link to="/mask-faq" onClick={() => setOpen(!open)}>
          <li>Become a Maker</li>
        </Link>
        <Link to="/supplies" onClick={() => setOpen(!open)}>
          <li>Supplies We Need</li>
        </Link>
        <Link to="/" onClick={() => setOpen(!open)}>
          <li>Contribute</li>
        </Link>
      </ul>
      <Link to="/mask-directory" onClick={() => setOpen(!open)}>
        Request a Mask
      </Link>
      <Link to="/contact-us" onClick={() => setOpen(!open)}>
        Contact
      </Link> */}
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
  text-align: center;
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
    /* letter-spacing: 0.5rem; */
    font-size: 20px;
    background: white;
    border: none;
    padding: 16px 0px;
  }
  img {
    width: 70%;
    margin: 10px auto;
    @media (min-width: 600px) {
      width: 50%;
      margin: 0px;
    }
  }
  a {
    font-size: 1rem;
    padding: 1rem 0;
    font-weight: bold;
    /* letter-spacing: 0.5rem; */
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
