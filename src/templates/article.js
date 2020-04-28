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



/*
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
