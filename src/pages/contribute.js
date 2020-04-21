import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/Utility/seo"
import ContributePage from "../components/Views/ContributePage"

const Contribute = () => {
  const query = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "62.jpeg" }) {
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
      <SEO title="Contribute" />
      <ContributePage image={query.banner.childImageSharp.fluid} />
    </Layout>
  )
}

export default Contribute
