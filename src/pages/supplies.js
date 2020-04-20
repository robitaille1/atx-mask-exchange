import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/Utility/seo"
import SuppliesPage from "../components/Views/SuppliesPage"

const Supplies = () => {
  const query = useStaticQuery(graphql`
    query {
      fabric: file(relativePath: { eq: "fabric.PNG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      elastic: file(relativePath: { eq: "elastic.PNG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ribbon: file(relativePath: { eq: "ribbon.PNG" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bias: file(relativePath: { eq: "bias.PNG" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thread: file(relativePath: { eq: "thread.PNG" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      copper: file(relativePath: { eq: "copper.PNG" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      machine: file(relativePath: { eq: "sewing.PNG" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      needles: file(relativePath: { eq: "needles.PNG" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      banner: file(relativePath: { eq: "cropmask.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const suppliesList = [
    {
      name: "Fabric",
      description:
        "One of our most needed items. Fabric is difficult to find these days and a run to the fabric store could cost our mask makers about three hours or critical work time. The most needed fabric types are flannel, calico, t-shirt or upholstery. ",
      image: query.fabric.childImageSharp.fluid,
    },
    {
      name: "Elastic",
      description:
        "Also in short supply right now. some makers have needed to stop sewing because they ran out. It is preferable if the elastic is about 1/4 inch wide.",
      image: query.elastic.childImageSharp.fluid,
    },
    {
      name: "Ribbon",
      description:
        "Ribbon is an alternative to elastic for some mask makers. Satin ribbon between 1/4 and 5/8 inch wide is preferred. ",
      image: query.ribbon.childImageSharp.fluid,
    },
    {
      name: "Bias Tape",
      description:
        "Bias Tape is needed at multiple stages of the mask making process. Having pre-made bias tape saves the makers valuable time.",
      image: query.bias.childImageSharp.fluid,
    },
    {
      name: "Thread",
      description:
        "With all this sewing, the Makers will sometimes run out of thread. Most of the Makers are using non-industrial sewing machines so any thread would need to fit on that.",
      image: query.thread.childImageSharp.fluid,
    },
    {
      name: "Copper Wire",
      description:
        "We use thin copper wire for the nose wire. The wire does not need to be copper as it will be sewn into the mask.",
      image: query.copper.childImageSharp.fluid,
    },
    {
      name: "Sewing Machine",
      description:
        "We do have volunteers on standby to just need a sewing machine to get started. If you have a spare machine that you might let a sewer use we would love to connect you to a volunteer.",
      image: query.machine.childImageSharp.fluid,
    },
    {
      name: "Sewing Needles",
      description:
        "Sometime our sewing needles break. Which can delay a Maker until they can get to a fabric store. Thanks to our amazing volunteers we can run a sewing needle out to a maker so that they can keep going.",
      image: query.needles.childImageSharp.fluid,
    },
  ]

  return (
    <Layout>
      <SEO title="Supplies" />
      <SuppliesPage
        image={query.banner.childImageSharp.fluid}
        supplies={suppliesList}
      />
    </Layout>
  )
}

export default Supplies
