import React from "react"
import styled from "styled-components"
import SixthSt from "../../images/6thst.jpeg"

const jumbotron = () => {
  return (
    <Jumbotron>
      <div
        style={{
          width: `60%`,
          padding: `2rem 0px`,
          maxWidth: `960px`,
          textAlign: `left`,
        }}
      >
        <h2>Together, we can get everyone in Austin a face mask!</h2>
        <Button>Get a mask!</Button>
      </div>
    </Jumbotron>
  )
}

export default jumbotron

const Jumbotron = styled.section`
  width: 100%;
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

  h2 {
    font-size: 42px;
  }
`
const Button = styled.button`
  padding: 10px 20px;
  background: white;
  border: none;
  color: black;

  &:hover {
    cursor: pointer;
    background: #ffffff73;
  }
`
