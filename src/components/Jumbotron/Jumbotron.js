import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import SixthSt from "../../images/6thst.jpeg"

const jumbotron = () => {
  return (
    <Jumbotron>
      <div>
        <h2>Together, we can get everyone in Austin a face mask!</h2>

        <Link
          to="/directory"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          <Button>Get A Mask!</Button>
        </Link>
      </div>
    </Jumbotron>
  )
}

export default jumbotron

const Jumbotron = styled.section`
  /* width: 100%; */
  height: 80vh;
  display: flex;
  padding: 2rem;

  text-align: center;
  color: white;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
    url(${SixthSt});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: scroll;

  div {
    width: 100%;
    padding: 2rem 0px;
    max-width: 960px;
    text-align: left;

    @media (min-width: 700px) {
      width: 60%;
    }
  }

  h2 {
    font-size: 42px;
  }
`
const Button = styled.button`
  padding: 20px 30px;
  background: white;
  border: none;
  color: black;

  &:hover {
    cursor: pointer;
    background: #ffffff73;
  }
`
