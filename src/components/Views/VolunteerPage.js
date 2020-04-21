import React from "react"
import styled from "styled-components"
import ContactForm from "../ContactForm/ContactForm"
import Banner from "../UI/Banner/Banner"

const volunteerPage = props => (
  <>
    <Banner image={props.image} alt="masks" />
    <h2 style={{ marginTop: `30px`, textAlign: `center` }}>
      Types of Volunteers We Need
    </h2>
    <VolDiv>
      <div>
        <strong>Mask Makers:</strong> We desperately need more volunteers to
        help us create masks for those in need. No matter your skill level, we
        need your help. We receive daily requests for masks, and need assistance
        in fulfilling those requests.
      </div>
      <div>
        <strong>Mask Runners:</strong> Our mask makers are doing their best at
        the moment to create masks and deliver them to those in need. We are
        seeking some volunteers who would be able to assist in the delivery
        aspect from maker to those in need. This is very important as it would
        allow the maker to continue to create masks, and it would also speed up
        the process from requesting a mask to receiving a mask.{" "}
      </div>
    </VolDiv>
    <StyledH3>
      If you would like to help us get masks to the people of Austin - get in
      touch! We would love to hear how you can contribute to the cause!
    </StyledH3>
    <FormDiv>
      <ContactForm />
    </FormDiv>
  </>
)

export default volunteerPage

const VolDiv = styled.section`
  display: block;
  margin-top: 30px;
  @media (min-width: 700px) {
    display: flex;
  }
  div {
    width: 90%;
    padding: 1rem;
    margin: 10px auto;
    @media (min-width: 700px) {
      margin: 10px 20px;
      width: 50%;
    }
  }
`
const StyledH3 = styled.h3`
  width: 80%;
  margin: 30px auto;
  @media (min-width: 700px) {
    width: 70%;
  }
`

const FormDiv = styled.div`
  width: 80%;
  margin: 20px auto;
  @media (min-width: 700px) {
    width: 50%;
  }
`
