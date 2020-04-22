import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/Utility/seo"
import AccessoriesPage from "../components/Views/AccessoriesPage"

const Accessories = () => {
  const query = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "screen.PNG" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Accessories" />
      <AccessoriesPage image={query.banner.childImageSharp.fluid} />
    </Layout>
  )
}

export default Accessories
