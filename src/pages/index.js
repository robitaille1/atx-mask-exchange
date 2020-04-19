import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Utility/layout"
import SEO from "../components/Utility/seo"
import Home from "../components/Views/Home"

const IndexPage = () => {
  const query = useStaticQuery(graphql`
    query {
      maskImage: file(relativePath: { eq: "masks.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      liam: file(relativePath: { eq: "liam.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      grafitti: file(relativePath: { eq: "grafitti.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <Home images={query} />
    </Layout>
  )
}

export default IndexPage
