import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MaskImg from "../images/croppedmask.jpg"

const Contact = () => (
  <Layout>
    <SEO title="Contact Us" />
    <BannerImg src={MaskImg} alt="masks" />
    <Wrapper>
      <div>
        <h2>Contact Us</h2>
        <p>
          We need all the help we can get! Reach out to us if you are mask
          maker, have resources, or anything related to the cause! If you are
          looking for masks for your or your family, please fill out the form on
          the directory page and a mask maker will get in contact with you.
        </p>
        <a href="mailto:liam@austinmaskexchange.org">
          liam@austinmaskexchange.org
        </a>
      </div>
    </Wrapper>
  </Layout>
)

export default Contact

const Wrapper = styled.section`
  padding: 2rem;
  line-height: 2;
`
const BannerImg = styled.img`
  width: 100%;
  height: 200px;
  @media (min-width: 700px) {
    height: 300px;
  }
`
