import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/Utility/seo"
import MaskFaq from "../components/Views/MaskFaq"

const Maskfaq = () => {
  const query = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "screenmask.PNG" }) {
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
      <SEO title="FAQ" />
      <MaskFaq image={query.banner.childImageSharp.fluid} />
    </Layout>
  )
}

export default Maskfaq
