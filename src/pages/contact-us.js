import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GrafImg from "../images/graf2-crop.jpeg"

const Contact = () => (
  <Layout>
    <SEO title="Contact Us" />
    <BannerImg src={GrafImg} alt="masks" />
    <Wrapper>
      <div>
        <h2>Contact Us</h2>
        <p>
          We need all the help we can get! Reach out to us if you are mask
          maker, have resources, or anything related to the cause! If you are
          looking for masks for your or your family, please fill out the form on
          the{" "}
          <Link style={{ color: "black" }} to="/mask-directory">
            directory page
          </Link>{" "}
          and a mask maker will get in contact with you.
        </p>
        <a style={{ color: "black" }} href="mailto:liam@austinmaskexchange.org">
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

  @media (min-width: 700px) {
    width: 70%;
    margin: 10px auto;
  }
`
const BannerImg = styled.img`
  width: 100%;
  height: 200px;
  @media (min-width: 700px) {
    height: 300px;
  }
`
