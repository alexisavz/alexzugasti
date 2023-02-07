import * as React from "react"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"
import { PortableText } from "@portabletext/react"
import imageUrlBuilder from '@sanity/image-url'
import urlBuilder from "@sanity/image-url"


const urlFor = source => urlBuilder({projectId: 'ua0pwfin', dataset:'production'}).image(source)

const serializer = {
    types: {
        customImage: props => (<figure>
            <img src={urlFor(props.value.image.asset)} alt={props.value.altText} />
        </figure>)
    }
}

const BlogPost = ({data}) => {
  
    data.sanityBlog
  return (
    <Layout>
        <div>
            <h1>{data.sanityBlog.title}</h1>
            <h3>{data.sanityBlog.description}</h3>
            <div>
                <PortableText value={data.sanityBlog._rawContent} components={serializer}/>
            </div>
        </div>
    </Layout>
  )
}

export const query = graphql `
    query MyQuery($slug: String) {
        sanityBlog(slug: {current: {eq: $slug}}) {
        title
        slug {
            current
        }
        publishedAt
        _rawContent
        description
        }
    }
`

export default BlogPost

export const Head = () => <title>Alex Zugasti</title>;