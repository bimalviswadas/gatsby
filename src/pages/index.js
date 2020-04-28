import React from "react"
import { Link } from "gatsby"
import {graphql, StaticQuery} from 'gatsby';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        allNodeArticle {
          edges {
            node {
              title
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <p>Articles from drupal:</p>
        <p>{ data.allNodeArticle.edges[0].node.title }</p>
        <p>{ data.allNodeArticle.edges[1].node.title }</p>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
        <br/>
        <Link to="/page-3">London Learning</Link>
        <br/><br/>
      </Layout>
    )}
  />
)

export default IndexPage
