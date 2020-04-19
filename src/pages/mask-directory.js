import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/Utility/seo"
import MaskDirectory from "../components/Views/MaskDirectory"

const Maskdirectory = () => {
  const query = useStaticQuery(graphql`
    query {
      imageLiam: file(relativePath: { eq: "chillin.JPG" }) {
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
      <SEO title="Mask Directory" />
      <MaskDirectory image={query} />
    </Layout>
  )
}

export default Maskdirectory
