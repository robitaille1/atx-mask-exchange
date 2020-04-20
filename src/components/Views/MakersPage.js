import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import MakerItem from "../MakerItem/MakerItem"

const MakersPage = () => {
  const makers = [
    {
      name: "'Obibaby'",
      description: "Lives in NW Austin and is donating masks to those in need!",
      contact: {
        twitter: null,
        reddit: "obibaby",
      },
    },
    {
      name: "Adina McFadden",
      description:
        "Adina is located in 78759 and is donating masks for those in need.",
      contact: {
        twitter: null,
        reddit: null,
      },
    },
    {
      name: "Alan Bernstein",
      description:
        "Alan is a new mask maker but happy to donate masks to individuals and families who need them. Located in 78752. ",
      contact: {
        twitter: null,
        reddit: null,
      },
    },
    {
      name: "Bradford Kinney",
      description:
        "Mask maker in Central Austin. Providing masks for free to those that need them. ",
      contact: {
        twitter: null,
        reddit: null,
      },
    },
    {
      name: "Dakotah",
      description:
        "Dakotah makes masks in S, M, and L with a 3D printer. They use makeup remover pads as the filter and don't compress the face/nose. Located in South Austin, 78747.  Contact by email for more details. Masks are free. Donations accepted. ",
      contact: {
        twitter: null,
        reddit: null,
      },
    },
    {
      name: "Elle Scott",
      description:
        "Making masks and donating them to those in need. Located in 78741. ",
      contact: {
        twitter: null,
        reddit: null,
      },
    },
    {
      name: "Heidi Torrico",
      description:
        "Providing masks to those that need them. Donations appreciated.",
      contact: {
        twitter: null,
        reddit: null,
      },
    },
    {
      name: "Jacqueline",
      description:
        "Jacqueline lives in Kyle and is donating masks to those that need them. Donations to cover costs appreciated but not necessary.",
      contact: {
        twitter: null,
        reddit: "spikemonst3r",
      },
    },
    {
      name: "Janis",
      description: null,
      contact: {
        twitter: null,
        reddit: null,
      },
    },
    {
      name: "Julie",
      description: "From South Austin",
      contact: {
        twitter: null,
        reddit: null,
      },
    },
    {
      name: "Karen",
      description: "From Lakeway",
      contact: {
        twitter: null,
        reddit: null,
      },
    },
    {
      name: "Kelly Barrera ",
      description:
        "Kelly is giving masks to those in need. Donations greatly appreciated but not necessary! She lives in South Austin.",
      contact: {
        twitter: null,
        reddit: "Pecan76",
      },
    },
    {
      name: "Kelly",
      description:
        "Making masks in Southwest Austin, between Oak Hill and Circle C. Kelly is making and giving masks for free and asks that any donations be sent to local food banks instead. ",
      contact: {
        twitter: "",
        reddit: "kellyhitchcock",
      },
    },
    {
      name: "Konani",
      description:
        "Mask maker in the Arboretum area! Distributing masks while social distancing. Able to facilitate contactless mask drop offs. Masks are free.",
      contact: {
        twitter: "airismile",
        reddit: null,
      },
    },
    {
      name: "LeeAnne",
      description: "Located in Cedar Park. Making masks for free.",
      contact: {
        twitter: null,
        reddit: "Gdvybs",
      },
    },
    {
      name: "Lizzie Kronberg ",
      description:
        "Lizzie is working hard to support everyone she can with masks. Masks are free. Donations for materials appreciated.",
      contact: {
        twitter: null,
        reddit: "lizzayyyy96 ",
      },
    },
    {
      name: "Liam Kozma",
      description:
        "Reach out to Liam on Reddit or by email. Liam lives in South Austin. Liam is making masks by request for free - donations appreciated. ",
      contact: {
        twitter: null,
        reddit: "kozmaniac22",
      },
    },
    {
      name: "Magellan School Makers",
      description:
        "The Magellan International School, in collaboration with Colab Community Makers, are pooling resources to provide PPE for those in need in the Austin community. From handmade cloth masks to 3D printed face shields and laser cut ear savers, their goal is to support those in the front line of the Covid-19 response.",
      contact: {
        twitter: null,
        reddit: null,
      },
    },
    {
      name: "Megan",
      description: null,
      contact: {
        twitter: null,
        reddit: null,
      },
    },
    {
      name: "Rage Panda Pajamas",
      description: null,
      contact: {
        twitter: null,
        reddit: "Ragepandapajamas",
      },
    },
    {
      name: "Raji",
      description: null,
      contact: {
        twitter: null,
        reddit: null,
      },
    },
    {
      name: "Rhonda",
      description: "From Buda",
      contact: {
        twitter: null,
        reddit: null,
      },
    },
    {
      name: "Steven Palmer",
      description:
        "Donating pleated masks to those in need. Limited quantity available. Lives in Round Rock. ",
      contact: {
        twitter: null,
        reddit: null,
      },
    },
    {
      name: "Teresa Escarsega",
      description:
        "Making masks for free.  Donations appreciated to support purchase of additional materials. Located in Pflugerville. ",
      contact: {
        twitter: null,
        reddit: null,
      },
    },
  ]

  return (
    <>
      <MakersDiv>
        <h2>The Makers</h2>
        <MakersDescription>
          The volunteer mask makers are incredible people. These are the members
          of our community working behind the scenes to fill mask requests for
          those in need. All of these individuals are purchasing materials out
          of their own pockets. Although donation are not expected, they are
          always appreciated.
        </MakersDescription>
        <MakersDisplay>
          {makers.map(maker => (
            <MakerItem key={maker.name} maker={maker} />
          ))}
        </MakersDisplay>
        <div style={{ width: `60%`, margin: `100px auto` }}>
          <h3 style={{ fontSize: `44px` }}>Become a Maker</h3>
          <p style={{ lineHeight: `2`, fontSize: `20px` }}>
            If you would like to help us get masks to the people of Austin - get
            in touch! We would love to hear how you can contribute to the cause!
          </p>
          <Link to="/contact-us">
            <ContactButton>Contact</ContactButton>
          </Link>
        </div>
      </MakersDiv>
    </>
  )
}

export default MakersPage

const MakersDiv = styled.div`
  padding: 2rem;
  text-align: center;

  h2 {
    font-size: 33px;
  }
`
const MakersDescription = styled.p`
  padding: none;
  line-height: 2;
  font-size: 20px;
  @media (min-width: 700px) {
    padding: 1rem 3rem;
  }
`

const MakersDisplay = styled.section`
  display: block;

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 850px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
const ContactButton = styled.button`
  padding: 10px 20px;
  background: #253551;
  color: white;
  border: none;

  &:hover {
    cursor: pointer;
    background: #25355195;
  }
`
