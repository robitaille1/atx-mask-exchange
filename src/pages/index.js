import React from "react"
import Layout from "../components/Utility/layout"
import SEO from "../components/Utility/seo"
import Home from "../components/Views/Home"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Home />
    </Layout>
  )
}

export default IndexPage
