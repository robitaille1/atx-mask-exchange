import React from "react"
import styled from "styled-components"
import Banner from "../UI/Banner/Banner"
import Img from "gatsby-image"

const SuppliesPage = props => (
  <>
    <Banner image={props.image} />
    <div style={{ padding: `2rem` }}>
      <p style={{ padding: `2rem`, fontSize: `22px` }}>
        Mask Makers go through supplies quickly. If you have supplies on hand
        that you might be willing to donate, the mask makers could use them!
      </p>
      <SuppliesDisplay>
        {props.supplies.map(supply => (
          <SupplyCard key={supply.name}>
            <Img fluid={supply.image} />
            <div>
              <h3>{supply.name}</h3>
              <p>{supply.description}</p>
            </div>
          </SupplyCard>
        ))}
      </SuppliesDisplay>
    </div>
  </>
)

export default SuppliesPage

const SuppliesDisplay = styled.section`
  display: block;

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const SupplyCard = styled.div`
  text-align: center;
  margin: 20px;
  line-height: 2;
  h3 {
    font-size: 35px;
  }
  p {
    font-size: 16px;
  }
`
