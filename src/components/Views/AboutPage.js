import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const AboutPage = props => (
  <>
    <Heading>
      <h2>When Austinites help Austinites, we all win.</h2>
    </Heading>
    <Content>
      <Img fluid={props.image} />
      <br />
      <div>
        <p>
          <strong>Austin Mask Exchange</strong> began as a collection of seven
          independent mask makers who met on social media and decided to pool
          their efforts in an attempt to provide cloth masks to everyone in
          their community who was in need.{" "}
        </p>

        <p>
          Masks work best when everyone in the community has one. Unfortunately,
          some people:
        </p>

        <p>- Cannot find a place to get a mask quickly</p>
        <p>- Cannot afford a mask</p>
        <p>- Cannot find a mask that fits</p>
        <p>- Cannot find a mask that meets their individual needs</p>
        <p>
          When a single member of our community is in any of these situations,
          it affects us all.
        </p>
        <p>
          Austin Mask Exchange started small, but we now have a group of over 30
          extremely dedicated volunteers working to get masks into the hands of
          people who need them. We have partnered with several other
          organizations who are all working to produce masks for our community.
        </p>
        <p>
          Additionally, we hope to serve as a hub of information for those
          looking to purchase masks from local vendors as well as those looking
          for other PPE or mask accessories.
        </p>
        <p>When Austinites help Austinites, we all win.</p>
        <p>
          <strong>#MaskUpAustin</strong>
        </p>
        <p>Stay Well.</p>
      </div>
    </Content>
  </>
)

export default AboutPage

const Heading = styled.div`
  padding: 2rem 1rem 0rem;
  margin-top: 30px;
  text-align: center;

  h2 {
    font-size: 1.5rem;
    @media (min-width: 950px) {
      font-size: 2rem;
    }
  }
`

const Content = styled.section`
  padding: 2rem;
  line-height: 2;

  @media (min-width: 950px) {
    display: flex;
    div {
      width: 50%;
      padding: 0rem 1rem;
    }
  }
`
