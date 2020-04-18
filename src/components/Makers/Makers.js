import React from "react"
import styled from "styled-components"
import MakerItem from "./MakerItem/MakerItem"

const Makers = () => {
  return (
    <MakersDisplay>
      <MakerItem />
    </MakersDisplay>
  )
}

export default Makers

const MakersDisplay = styled.section`
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  @media (min-with: 700px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
