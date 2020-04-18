import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbotron from "../components/Jumbotron/Jumbotron"
import MaskImg from "../images/masks.jpg"
import LiamImg from "../images/liam.jpg"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Jumbotron />

      <CdcInfo>
        <div>
          <h2>The CDC recommends that everyone wear cloth masks.</h2>
        </div>
        <div style={{ fontSize: `20px` }}>
          <p>
            There are many websites and organizations funneling masks to
            healthcare facilities (which is great). Our goal is to get face
            masks into the hands of the general public as quickly as possible.
          </p>
        </div>
      </CdcInfo>

      <MaskInfo>
        <ContentImg src={MaskImg} alt="masks" />
        <Content>
          <h3>What You Should Know About Face Masks</h3>
          <p>
            Layers, fabrics, filters, patterns and comfortability all make a
            difference. We’ve put together a FAQ to answer all the questions you
            may have. If your question is not addressed, do not hesitate to
            contact us.
          </p>

          <Link
            to="/faq"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <button>Learn More</button>
          </Link>
        </Content>
      </MaskInfo>
      <Where>
        <Content>
          <h3>Where Can I Get A Face Mask In Austin?</h3>
          <p>
            We are keeping a running list of all the mask creators in the
            Austin, Texas area. Reach out to one of the providers and they will
            get back to you with instructions on how to get masks.
          </p>
          <Link
            to="/directory"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <button>Learn More</button>
          </Link>
        </Content>
        <ContentImg
          style={{ marginTop: "30px" }}
          src={LiamImg}
          alt="Liam making masks"
        />
      </Where>
      <ReachOut>
        <div style={{ margin: "0px auto" }}>
          <h3>Reach out</h3>
          <p>
            If you would like masks for you or your family, please go to the
            Mask Directory page to contact a maker directly. If you would like
            to be added to the directory, have materials to contribute, or have
            any other questions - get in touch! We will get back to you as soon
            as we can.
          </p>

          <Link
            to="/contact"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <button>Reach Out</button>
          </Link>
        </div>
      </ReachOut>
    </Layout>
  )
}

export default IndexPage

const CdcInfo = styled.section`
  background: lightgray;
  /* width: 100%; */
  padding: 3rem 2rem;

  div {
    font-size: 30px;
    color: black;
    margin: 20px;
    line-height: 1.5;
  }

  h2 {
    font-size: 22px;
    @media (min-width: 700px) {
      font-size: 37px;
    }
  }
`

const MaskInfo = styled.section`
  margin-top: 40px;
  /* width: 100%; */
  padding: 2rem;
  display: block;
  /* justify-content: space-between; */

  @media (min-width: 700px) {
    display: flex;
    justify-content: space-between;
  }
`
const Content = styled.div`
  width: 100%;
  @media (min-width: 700px) {
    width: 50%;
  }

  h3 {
    font-size: 25px;
  }

  p {
    font-size: 20px;
  }

  img {
    margin-top: 20px;
  }

  button {
    padding: 10px 20px;
    background: #253551;
    color: white;
    border: none;

    &:hover {
      cursor: pointer;
      background: #25355195;
    }
  }
`

const ContentImg = styled.img`
  width: 100%;

  @media (min-width: 700px) {
    width: 40%;
  }
`

const Where = styled.section`
  margin-top: 40px;
  padding: 2rem;
  display: block;

  @media (min-width: 700px) {
    display: flex;
    justify-content: space-between;
  }
  button {
    padding: 10px 20px;
    background: #253551;
    color: white;
    border: none;

    &:hover {
      cursor: pointer;
      background: #25355195;
    }
  }
`

const ReachOut = styled.section`
  padding: 3rem 2rem;
  text-align: center;
  margin-top: 50px;
  h3 {
    font-size: 25px;
  }

  p {
    font-size: 20px;
  }
  button {
    padding: 10px 20px;
    background: #253551;
    color: white;
    border: none;

    &:hover {
      cursor: pointer;
      background: #25355195;
    }
  }

  div {
    width: 70%;
    @media (min-width: 700px) {
      width: 50%;
    }
  }
`
