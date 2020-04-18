import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import React from "react"
// import Burger from "../components/Burger/Burger"
// import Menu from "../components/Menu/Menu"

const Header = ({ siteTitle }) => {
  // const [open, setOpen] = useState(false)

  return (
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
      <div>
        <NavLinks>
          <Link to="/faq">FAQ</Link>
          <Link to="/directory">Request a Mask</Link>
          {/* <Link to="/">Gallery</Link> */}
          {/* <Link to="/">Blog</Link> */}
          <Link to="/contact">Contact Us</Link>
          {/* <button>Donate</button> */}
        </NavLinks>
        {/* <div>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div> */}
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
  padding: 2rem;
  justify-content: space-between;
  /* width: 100%; */
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
  /* display: none; */

  /* @media (min-width: 700px) { */
  display: inline-flex;
  font-size: 16px;
  align-items: center;
  /* } */

  a {
    margin: 10px;
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
