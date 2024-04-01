import React from "react"
import { graphql } from "gatsby"

const PostsPage = ({ data }) => {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.allSanityPost.edges.map(({ node }) => (
          <li key={node._id}>{node.title}</li>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  query PostsQuery {
    allSanityPost {
      edges {
        node {
          title
          _id
          slug {
            current
          }
          body {
            _rawJson
          }
        }
      }
    }
  }
`

export default PostsPage
