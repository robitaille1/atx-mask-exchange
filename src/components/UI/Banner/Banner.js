import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const banner = props => {
  return (
    <BannerDiv>
      <BackgroundImage
        style={{
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
          backgroundAttachment: `scroll`,
          height: `100%`,
          zIndex: `2`,
        }}
        fluid={props.image}
      />
    </BannerDiv>
  )
}

export default banner

const BannerDiv = styled.div`
  width: 100%;
  height: 200px;

  @media (min-width: 700px) {
    height: 250px;
  }
`
