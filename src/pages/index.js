import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const windowBluetoothExists = typeof window !== 'undefined' && window.navigator.bluetooth
  
  return (
    <Layout>
      <SEO title="Home" />
      <h1>navigator bluetooth: </h1>
      {
        windowBluetoothExists &&
        JSON.stringify(window.navigator.bluetooth)
      }
    </Layout>
  )
}

export default IndexPage
