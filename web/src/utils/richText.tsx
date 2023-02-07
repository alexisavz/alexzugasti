import { getGatsbyImageData } from "gatsby-source-sanity"
import BlockContent from "@sanity/block-content-to-react"
import { Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { SanityRawText } from "./SanityTypes"
const dataset = 'production'
const projectId = 'ua0pwfin'


const Figure = ({ node }: {node: any}) => {
    const fluidProps = getGatsbyImageData(
      node?.image?.asset?._id,
      {},
      { dataset, projectId }
    )
    return (
      <figure>
        {fluidProps && <GatsbyImage image={fluidProps} alt={node.altText} />}
      </figure>
    )
  }

  export const defaultSerializers = {
    marks: {
      em: ({props}: {props: any}) => <i>{props.children}</i>,
      strong: ({props}: {props: any}) => <strong>{props.children}</strong>,
      code: ({props}: {props: any}) => (
        <code dangerouslySetInnerHTML={{ __html: props.children }} />
      ),
      color: ({props}: {props: any}) => (
        <span style={{ color: props.mark.hex }}>{props.children}</span>
      ),
      link: ( {mark}: {mark: any}, {children}: {children: any} ) => {
        return mark.href?.includes("climatecheck.com") ? (
          <Link
            to={
              mark.href?.substring(mark.href?.indexOf("climatecheck.com") + 16) ||
              "/"
            }
          >
            {children[0]}
          </Link>
        ) : (
          <a href={mark.href}>{children[0]}</a>
        )
      },
    },
    types: {
      code: ({props}: {props: any}) => (
        <pre data-language={props.node.language}>
          <props.node.code>{props.node.code}</props.node.code>
        </pre>
      ),
      reference: ({ node }: {node: any}) => <div>{node.reference}</div>,
      customImage: Figure,
  
      // block: props => {
      //   console.log(props)
      //   return <></>
      // },
    },
  }
  
  type Props = {
    blocks: SanityRawText[] | SanityRawText
    serializers?
    className?: string
  }
  
  export const BaseBlockContent: React.FC<Props> = ({
    blocks,
    serializers,
    className,
  }) => {
    const serializersDict = { ...serializers, ...defaultSerializers }
    return (
      <BlockContent
        serializers={serializersDict}
        blocks={blocks}
        className={className}
      />
    )
  }
  