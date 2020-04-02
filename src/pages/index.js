import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../static/styles/style.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>NickGenerator.io</h1>
    <p>Click the button below to get a new Nick</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
