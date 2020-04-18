import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MaskImg from "../images/masks.jpg"

const Contact = () => (
  <Layout>
    <SEO title="Contact Us" />
    <BannerImg />
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
const BannerImg = styled.div`
  width: 100%;
  height: 200px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
    url(${MaskImg});
`
// const ContactForm = styled.form`
//   margin: 10px auto;
//   width: 40%;
//   display: flex;
//   flex-direction: column;

//   input {
//     padding: 10px;
//   }

//   textarea {
//     height: 100px;
//     resize: none;
//   }

//   button {
//     padding: 10px 20px;
//     background: #253551;
//     color: white;
//     border: none;
//     width: 30%;
//     margin: 15px 0px;

//     &:hover {
//       cursor: pointer;
//       background: #25355195;
//     }
//   }
// `
