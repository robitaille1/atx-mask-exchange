import React, { useState } from "react"
import PropTypes from "prop-types"
import { GlobalStyles } from "./global"
import Header from "./UI/header/header"

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="wrap">
      <GlobalStyles open={open} />
      <Header open={open} setOpen={setOpen} />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{ padding: "2rem", background: "#1b3651", color: "white" }}
        >
          <p>Austin Mask Exchange © {new Date().getFullYear()}</p>
          <p>Austin, TX</p>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
