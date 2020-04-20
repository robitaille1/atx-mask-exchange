import React from "react"
import Layout from "../components/layout"
import SEO from "../components/Utility/seo"
import VendorsPage from "../components/Views/VendorsPage"

const Vendors = () => {
  return (
    <Layout>
      <SEO title="Vendors" />
      <VendorsPage />
    </Layout>
  )
}

export default Vendors
