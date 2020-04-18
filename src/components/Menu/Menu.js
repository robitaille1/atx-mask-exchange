import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import MaskImg from "../../images/AustinMask.png"

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/faq" onClick={() => setOpen(!open)}>
        FAQ
      </Link>
      <Link to="/directory" onClick={() => setOpen(!open)}>
        Request a Mask
      </Link>
      <Link to="/contact" onClick={() => setOpen(!open)}>
        Contact
      </Link>
      <img
        style={{ alignSelf: "center" }}
        src={MaskImg}
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
  img {
    width: 70%;
    margin: 10px auto;
    @media (min-width: 600px) {
      width: 30%;
      margin: 0px;
    }
  }
  a {
    font-size: 2rem;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #1b3651;
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: 600px) {
      font-size: 1.5rem;
      text-align: center;
    }
    @media (max-width: 360px) {
      font-size: 1rem;
    }
    &:hover {
      color: darkgray;
    }
  }
`
