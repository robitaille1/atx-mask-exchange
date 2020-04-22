import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Banner from "../UI/Banner/Banner"
import MakerItem from "../MakerItem/MakerItem"

const accessoriesPage = props => {
  const sections = [
    {
      title: "Mask Ear Savers",
      suppliers: [
        {
          name: "Magellan School Makers",
          description:
            "The Magellan International School, in collaboration with Colab Community Makers, are pooling resources to provide PPE for those in need in the Austin community. From handmade cloth masks to 3D printed face shields and laser cut ear savers, their goal is to support those in the front line of the Covid-19 response.",
          contact: {
            twitter: null,
            reddit: null,
            email: null,
          },
          links: {
            mag: "https://www.magellanschool.org/",
            colab: "http://www.colabcommunitymakers.org/",
          },
        },
        {
          name: "Rachel",
          description:
            "Making knitted ear savers. To make request please find them on Facebook at North ATX Ear Savers or email the address above",
          contact: {
            twitter: null,
            reddit: null,
            email: "cr1315@gmail.com",
          },
        },
      ],
    },
    {
      title: "Face Sheilds",
      suppliers: [
        {
          name: "Magellan School Makers",
          description:
            "The Magellan International School, in collaboration with Colab Community Makers, are pooling resources to provide PPE for those in need in the Austin community. From handmade cloth masks to 3D printed face shields and laser cut ear savers, their goal is to support those in the front line of the Covid-19 response.",
          contact: {
            twitter: null,
            reddit: null,
            email: null,
          },
          links: {
            mag: "https://www.magellanschool.org/",
            colab: "http://www.colabcommunitymakers.org/",
          },
        },
        {
          name: "Arash Saberi",
          description: null,
          contact: {
            twitter: null,
            reddit: null,
            email: "arashsaberi@hotmail.com",
          },
        },
      ],
    },
    {
      title: "3D Printed Masks",
      suppliers: [
        {
          name: "Dakotah",
          description:
            "Dakotah makes masks in S, M, and L with a 3D printer. They use makeup remover pads as the filter and don't compress the face/nose. Located in South Austin, 78747.  Contact by email for more details. Masks are free. Donations accepted. ",
          contact: {
            twitter: null,
            reddit: null,
            email: "dhicock@gmail.com",
          },
        },
      ],
    },
  ]
  return (
    <>
      <Banner image={props.image} alt="making masks" />
      <div style={{ padding: `2rem` }}>
        <h4 style={{ margin: `30px 0px` }}>
          The vendors below are offering PPE and accessories at little to no
          cost. If you have a need, please contact these vendors/volunteers
          directly.
        </h4>
        <AccDiv>
          {sections.map(section => (
            <>
              <h2>{section.title}</h2>
              <AccDisplay>
                {section.suppliers.map(supplier => (
                  <MakerItem maker={supplier} />
                ))}
              </AccDisplay>
            </>
          ))}
        </AccDiv>
        <Contact>
          <h4>Do you offer other types of PPE for the public?</h4>
          <p>
            We are always looking for other ways to offer the community
            protection. If you are making ear savers or face shields, please let
            us know.{" "}
          </p>
          <Link to="/contact-us">
            <button>Contact</button>
          </Link>
        </Contact>
      </div>
    </>
  )
}

export default accessoriesPage

const AccDisplay = styled.section`
  display: block;

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 850px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
const AccDiv = styled.div`
  text-align: left;
  margin: 50px 0px;
  @media (min-width: 700px) {
    text-align: center;
  }
`

const Contact = styled.div`
  @media (min-width: 700px) {
    width: 50%;
    margin: 50px auto;
    text-align: center;
  }

  button {
    color: white;
    background: #1b3651;
    padding: 10px;
    border: none;
    cursor: pointer;

    &:hover {
      background: #1b3651d1;
    }
  }
`
