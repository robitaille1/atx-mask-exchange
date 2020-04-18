import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LiamImg from "../images/liam.jpg"

const directory = () => (
  <Layout>
    <SEO title="Mask Directory" />

    <HeaderDiv>
      <Content>
        <h2>Austin Masks</h2>
        <p>
          <strong>Update:</strong> Some makers have received quite a few
          requests over the past 24 hours and may be busy.
        </p>
        <p>
          Due to the volume of requests, we are moving to a new system to allow
          us to fill requests as quickly and seamlessly as possible. Our goal is
          still to connect individual mask-making volunteers with Austinites in
          need. Please be patient with us as we move to the new system and work
          to fill the large number of requests we have received!
        </p>{" "}
        <p>
          {" "}
          To request a mask, fill out the form below. The wonderful volunteers
          try to prioritize based on need and the date the request was received.
          One of the mask makers will reach out to you as soon as possible.{" "}
        </p>
      </Content>
      <img src={LiamImg} alt="liam making masks" />
    </HeaderDiv>

    <iframe
      src="https://services.cognitoforms.com/f/ZzzWSPClQEqAhcQV1JAnmw?id=1"
      style={{
        position: `relative`,
        minWidth: `100%`,
        width: `100%`,
      }}
      frameBorder="0"
      scrolling="yes"
      seamless="seamless"
      height="801"
      width="100%"
      title="Request a mask - form"
    ></iframe>
  </Layout>
)

export default directory

const HeaderDiv = styled.div`
  display: block;
  padding: 2rem;

  img {
    width: 100%;
  }
  div {
    width: 100%;
  }

  @media (min-width: 950px) {
    display: flex;
    justify-content: space-between;
    div {
      width: 40%;
      margin-right: 30px;
    }
    img {
      width: 50%;
    }
  }
`
const Content = styled.div`
  line-height: 2;
  h2 {
    font-size: 33px;
  }
`

// const Added = styled.section`
//   padding: 2rem;
//   margin: 50px auto;
//   text-align: center;
//   line-height: 2;

//   @media (min-width: 700px) {
//     width: 50%;
//   }

//   button {
//     padding: 10px 20px;
//     background: #253551;
//     color: white;
//     border: none;

//     &:hover {
//       cursor: pointer;
//       background: #25355195;
//     }
//   }

//   h2 {
//     font-size: 33px;
//   }
// `
