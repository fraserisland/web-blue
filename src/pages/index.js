import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  console.log(window.navigator.bluetooth)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>navigator bluetooth: </h1>
      {JSON.stringify(window.navigator.bluetooth)}
    </Layout>
  )
}

export default IndexPage
