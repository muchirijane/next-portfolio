import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { createClient } from 'contentful'
import prism from 'prismjs'

import Head from 'next/head'
import Image from 'next/image'

import Skeleton from '../../components/UI/Skeleton/Skeleton'
import Layout from '../../components/layout/Layout'
import { PostContainer, PostTags } from '../../styles/Post.styles'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: 'portfolio' })

  //	paths: [ { params: { slug } }, {} ]
  const paths = await res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    }
  })
  console.log(paths)

  return {
    paths,

    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const res = await client.getEntries({
    content_type: 'portfolio',
    'fields.slug': params.slug,
  })

  console.log(res.items)
  return {
    props: {
      blog: res.items[0],
    },
    revalidate: 2,
  }
}

export default function BlogContent({ blog }) {
  useEffect(() => {
    prism.highlightAll()
  }, [])
  if (!blog) return <Skeleton />

  const { featuredImage, title, tags, blogPost, slug } = blog.fields
  const tagList = tags.map((tag) => <span key={blog.sys.id}>#{tag}</span>)

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <PostContainer>
        <div>
          <Image
            src={`https:${featuredImage.fields.file.url}`}
            width={featuredImage.fields.file.details.image.width}
            height={featuredImage.fields.file.details.image.height}
            alt={featuredImage.fields.description}
          />
        </div>
        <h1>{title}</h1>

        <PostTags>{tagList}</PostTags>
        <ReactMarkdown>{blogPost}</ReactMarkdown>
      </PostContainer>
    </Layout>
  )
}
