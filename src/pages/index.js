import React from "react"
import {Link} from "gatsby"
import {graphql, StaticQuery} from 'gatsby';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/govuk-frontend-3.6.0.min.css"

export const query = graphql`
  query allNodeArticle {
    allNodeArticle {
      edges {
        node {
          id
          title
          body {
            value
            format
            processed
            summary
          }
        }
      }
    }
  }
`

const IndexPage = ({data}) => (
  <Layout>
    <br/><br/>
    <div className="govuk-width-container">
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
      <div>
        <h2 className={"govuk-heading-l"}>Articles from drupal:</h2>
        {data.allNodeArticle.edges.map(({node}) => (
          <div>
            <h3 className={"govuk-heading-m"}>{node.title}</h3>
            <div className="govuk-body" dangerouslySetInnerHTML={{__html: node.body.value}}/>
          </div>
        ))}
      </div>

      <h1 className={"govuk-heading-xl"}>Hi people</h1>
      <p className="govuk-body">Welcome to your new Gatsby site.</p>
      <p className="govuk-body">Now go build something great.</p>
      <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
        <Image/>
      </div>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-one-half">
          <Link to="/page-2/" class="govuk-link">Go to page 2</Link>
          <br/><br/><br/>
          <Link to="/page-3" class="govuk-link">London Learning</Link>
          <br/><br/><br/>
          <Link to="/article/first" class="govuk-link">Drupal article 1</Link>
          <br/><br/><br/>
          <Link to="/article/second" class="govuk-link">Drupal article 2</Link>
          <br/><br/><br/>
          <Link to="/article/third" class="govuk-link">Drupal article 3</Link>
          <br/><br/><br/><br/>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
