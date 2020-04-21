import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/Utility/seo"

const NotFoundPage = () => (
  <Layout>
    <div style={{ textAlign: `center`, margin: `5rem` }}>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/">
        <button
          style={{
            color: `white`,
            background: "#1b3651",
            border: `none`,
            padding: `10px 20px`,
          }}
        >
          Go Home
        </button>
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
