import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.nodeArticle
  return (
    <Layout>
      <div>
        <h1>{ post.title }</h1>
        <small><em>{ Date(post.created) }</em></small>
        <div style={{ maxWidth: `900px`, marginBottom: `1.45rem`, width: `100%` }}>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.body.value }}></div>
      </div>
    </Layout>
  )
}


export const query = graphql`
  query($id: String!) {
    nodeArticle(id: { eq: $id }) {
      title
      body {
        value
      }
      created
    }
  }
`

/* 1

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <br/><br/><br/>
      <div>Hello blog post</div>
      <br/><br/><br/>
    </Layout>
  )
}

*/


/* 2
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <br/><br/><br/>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <br/><br/><br/>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
*/
