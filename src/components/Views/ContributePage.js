import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const contributePage = props => (
  <div>
    <BackgroundImage
      style={{
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundAttachment: `scroll`,
        height: `90vh`,
        zIndex: `2`,
      }}
      fluid={props.image}
      alt="masks"
    >
      <Jumbotron>
        <div style={{ padding: `0px` }}>
          <h2>Contribute</h2>
          <p>
            Contribute here support the website and a pool of funds that we can
            use to supply mask makers offering free masks.{" "}
          </p>
          <p>
            Note: If you are getting a mask from a mask maker and are able,
            please prioritize supporting them directly. It is the best way to
            support this effort.{" "}
          </p>
          <p>Contributions are completed through Paypal.</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://secure.squarespace.com/checkout/donate?donatePageId=5e9763efe66dac089d3012ab&ss_cid=a6d66bf4-235e-46a7-a2ea-38b7dcb5e7f0&ss_cvisit=1587492677280&ss_cvr=f1f9a546-9741-4b49-a5ea-43fc60d26dc6%7C1587160209958%7C1587486713286%7C1587492677158%7C24"
          >
            <button>Contribute</button>
          </a>
          <br />
          <p style={{ color: `lightgrey`, fontSize: `10px` }}>
            Please note that we are not a 501c3 organization, we are a group of
            community volunteers working to make sure that everyone in Austin
            has a face mask. Contribution are not tax deductible.
          </p>
        </div>
      </Jumbotron>
    </BackgroundImage>
  </div>
)

export default contributePage

const Jumbotron = styled.div`
  padding: 2rem 2rem 0rem;
  display: -webkit-flex;
  display: block;
  background-color: rgba(0, 0, 0, 0.4);
  height: -webkit-fill-available;
  color: white;
  text-align: left;

  div {
    width: 100%;
    padding: 2rem 0px 0rem;
    max-width: 960px;
    text-align: left;

    @media (min-width: 700px) {
      width: 50%;
    }
  }

  h2 {
    font-size: 42px;
  }

  button {
    color: white;
    background: #1b3651;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
`
