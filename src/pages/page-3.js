import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page three" />
    <h1>London Learning</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
