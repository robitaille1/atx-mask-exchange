import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/Utility/seo"
import AboutPage from "../components/Views/AboutPage"

const About = () => {
  const query = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "tiger.JPG" }) {
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
      <SEO title="About Us" />
      <AboutPage image={query.image.childImageSharp.fluid} />
    </Layout>
  )
}

export default About
