import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Banner from "../UI/Banner/Banner"
import ContactForm from "../ContactForm/ContactForm"

const ContactUs = props => (
  <>
    <Banner image={props.image} />
    <Wrapper>
      <div>
        <h2>Contact Us</h2>
        <p>
          We need all the help we can get! Reach out to us if you are mask
          maker, have resources, or anything related to the cause! If you are
          looking for masks for your or your family, please fill out the form on
          the{" "}
          <Link style={{ color: "black" }} to="/mask-directory">
            request
          </Link>{" "}
          and a mask maker will get in contact with you.
        </p>
        <a style={{ color: "black" }} href="mailto:liam@austinmaskexchange.org">
          liam@austinmaskexchange.org
        </a>
        <ContactForm />
      </div>
    </Wrapper>
  </>
)

export default ContactUs

const Wrapper = styled.section`
  padding: 2rem;
  line-height: 2;

  @media (min-width: 700px) {
    width: 70%;
    margin: 10px auto;
  }
  a {
    text-decoration: underline;
  }
`
