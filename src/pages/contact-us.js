import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/Utility/seo"
import ContactUs from "../components/Views/ContactUs"

const Contact = () => {
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
      <SEO title="Contact Us" />
      <ContactUs image={query.banner.childImageSharp.fluid} />
    </Layout>
  )
}

export default Contact
