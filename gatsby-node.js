/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const loc = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const tpl_page = loc.resolve(`src/templates/article.js`)
  const pageResult = await graphql(`
    {
      pages: allNodeArticle {
        edges {
          node {
            fields {
              slug
            }
            title
             body {
            value
            format
            processed
            summary
            }
            path {
              alias
            }
          }
        }
      }
    }
  `)

  pageResult.data.pages.edges.forEach(({ node }) => {
    createPage({
      path: node.path.alias,
      component: tpl_page,
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField, deleteNodeField } = actions
  // Use the system name of your own content type from Drupal.
  if (
    node.internal.type === `node__article`
  ) {
    const slug = `${node.path.alias}`
/*    deleteNodeField({
      node,
      name: `slug`,
      value: slug,
    })*/
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}


/*
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `node__article`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/article.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
*/
