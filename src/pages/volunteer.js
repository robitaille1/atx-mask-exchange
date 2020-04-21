import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/Utility/seo"
import VolunteerPage from "../components/Views/VolunteerPage"

const Volunteer = () => {
  const query = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "cropmask.jpg" }) {
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
      <SEO title="Volunteer" />
      <VolunteerPage image={query.banner.childImageSharp.fluid} />
    </Layout>
  )
}

export default Volunteer
