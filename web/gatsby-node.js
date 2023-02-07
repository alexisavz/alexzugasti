const path = require('path')

exports.createPages = async({graphql, actions}) => {
    const {data} = await graphql(
        `query MyQuery {
            allSanityBlog {
              nodes {
                slug {
                  current
                }
              }
            }
          }`
    )
    
    data.allSanityBlog.nodes.forEach(node => {
      actions.createPage({
        path: '/blog/' + node.slug.current,
        component: path.resolve('./src/templates/blogPost.tsx'),
        context: {slug: node.slug.current}
      })
    });
}    