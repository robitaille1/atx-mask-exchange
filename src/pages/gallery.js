import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/Utility/seo"
import GalleryPage from "../components/Views/GalleryPage"

const Gallery = () => {
  const query = useStaticQuery(graphql`
    query {
      pic1: file(relativePath: { eq: "chillin.JPG" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pic2: file(relativePath: { eq: "chillin2.PNG" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pic3: file(relativePath: { eq: "chillin3.PNG" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      liam2: file(relativePath: { eq: "liam2.PNG" }) {
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
      <SEO title="Gallery" />
      <GalleryPage images={query} />
    </Layout>
  )
}

export default Gallery
