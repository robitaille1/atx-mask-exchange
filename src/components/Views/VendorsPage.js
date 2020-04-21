import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import MakerItem from "../MakerItem/MakerItem"

const VendorsPage = () => {
  const vendors = [
    {
      name: "Dennis Islas",
      description:
        "Dennis is part of a small business trying to make ends meet during these trying economic times. Selling professionally (but homemade) masks. Multiple fabric selections available. Additionally, sizes for adults, youth (5-9), and toddler (2-4) available! Making masks out of Killeen. ",
      contact: {
        email: "Dennis.Islas@gmail.com",
        twitter: null,
        reddit: null,
      },
      links: {
        toPurchase: null,
        toDonate: null,
      },
      description2: {
        consumer: null,
        company: null,
      },
    },
    // {
    //   name: "Fashion By Austin",
    //   description: "Matt Swinney",
    //   contact: {
    //     email: "matt@fashionbytexas.com",
    //     twitter: null,
    //     reddit: null,
    //   },
    //   links: {
    //     toPurchase: "http://fashionbyaustin.com/buy-masks",
    //     toDonate: null,
    //   },
    //   description2: {
    //     consumer:
    //       "Support Austin fashion designers and purchase unique, fun masks via Austin Fashion Week. Masks are $10 each and made by local makers so you know you’re supporting fashion designers in their time of need. Don’t need masks but want to support? Please purchase and just note that you’d like your mask order donated through the Austin Mask Exchange.",
    //     company:
    //       "If your company is interested in custom masks for employees, please reach out to Austin Fashion Week founder Matt Swinney. They have the ability to create custom fabric and masks branded to your company for employees, reselling on your own platforms or whatever you’d need them for.",
    //   },
    // },
    {
      name: "Rage Panda Pajamas",
      description:
        "Selling masks with a website available soon. Currently busy for the rest of the week.",
      contact: {
        twitter: null,
        reddit: "Ragepandapajamas",
      },
      links: {
        toPurchase: null,
        toDonate: null,
      },
      description2: {
        consumer: null,
        company: null,
      },
    },
    {
      name: "Raji Johnson",
      description: null,
      contact: {
        email: "rjohnson0223@yahoo.com",
        twitter: null,
        reddit: null,
      },
      links: {
        toPurchase: null,
        toDonate: null,
      },
      description2: {
        consumer: null,
        company: null,
      },
    },
    {
      name: "Jane-Michael Stallings",
      description:
        "Making pleated surgical style masks in the Austin area. Selling them on a sliding scale to cover costs.",
      contact: {
        email: "uniquebeadwork@gmail.com",
        twitter: null,
        reddit: null,
      },
      links: {
        toPurchase: null,
        toDonate: null,
      },
      description2: {
        consumer: null,
        company: null,
      },
    },
    {
      name: "Morgan Spain",
      description:
        "Morgan recently taught himself to sew has made and donated many masks over the past few weeks. Currently selling masks on a sliding scale to cover the bills and support his family. Can do several styles.",
      contact: {
        email: "morgan.spain2019@gmail.com",
        twitter: null,
        reddit: null,
      },
      links: {
        toPurchase: null,
        toDonate: null,
      },
      description2: {
        consumer: null,
        company: null,
      },
    },
    // {
    //   name: "Megan Webb",
    //   description: "",
    //   contact: {
    //     email: "meganewebb@gmail.com",
    //     twitter: null,
    //     reddit: null,
    //   },
    //   links: {
    //     toPurchase: "https://growediblewalls.com/products/cloth-mask",
    //     toDonate: "https://growediblewalls.com/masks",
    //   },
    //   description2: {
    //     consumer: null,
    //     company: null,
    //   },
    // },
  ]

  return (
    <>
      <MakersDiv>
        <h2>Local Vendors</h2>
        <MakersDisplay>
          {vendors.map(vendor => (
            <MakerItem key={vendor.name} maker={vendor} />
          ))}
        </MakersDisplay>
        <Become>
          <h3 style={{ fontSize: `44px` }}>Help Us Out!</h3>
          <p style={{ lineHeight: `2`, fontSize: `20px` }}>
            If you would like to help us get masks to the people of Austin - get
            in touch! We would love to hear how you can contribute to the cause!
          </p>
          <Link to="/contact-us">
            <ContactButton>Contact</ContactButton>
          </Link>
        </Become>
      </MakersDiv>
    </>
  )
}

export default VendorsPage

const MakersDiv = styled.div`
  padding: 2rem;
  text-align: center;

  h2 {
    margin-bottom: 60px;
    font-size: 33px;
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
const Become = styled.div`
  width: 100%;
  margin: 100px auto;
  @media (min-width: 700px) {
    width: 60%;
  }
`
