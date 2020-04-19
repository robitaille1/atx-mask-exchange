import React from "react"
import Layout from "../components/layout"
import SEO from "../components/Utility/seo"
import MakersPage from "../components/Views/MakersPage"

const Makers = () => {
  return (
    <Layout>
      <SEO title="Makers" />
      <MakersPage />
    </Layout>
  )
}

export default Makers
