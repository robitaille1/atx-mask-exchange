import React from "react"
import Layout from "../components/layout"
import SEO from "../components/Utility/seo"
import ContactUs from "../components/Views/ContactUs"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact Us" />
      <ContactUs />
    </Layout>
  )
}

export default Contact
