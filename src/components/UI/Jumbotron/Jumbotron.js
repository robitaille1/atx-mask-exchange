import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const jumbotron = props => {
  return (
    <>
      <BackgroundImage
        style={{
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
          backgroundAttachment: `scroll`,
          height: `90vh`,
        }}
        fluid={props.image}
      >
        <Jumbotron>
          <div>
            <h2>Together, we can get everyone in Austin a face mask!</h2>
            <Link
              to="/mask-directory"
              style={{
                color: `black`,
                textDecoration: `none`,
              }}
            >
              <Button>Get A Mask!</Button>
            </Link>
          </div>
        </Jumbotron>
      </BackgroundImage>
    </>
  )
}

export default jumbotron

const Jumbotron = styled.div`
  padding: 2rem 2rem 0rem;
  display: -webkit-flex;
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  height: -webkit-fill-available;
  color: white;
  text-align: center;

  div {
    width: 100%;
    padding: 2rem 0px 0rem;
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
