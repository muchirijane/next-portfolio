import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import Link from 'next/link'
import { BlogContent, BlogItems, BlogTagWrapper } from './BlogCard.styles'
export default function PortfolioCard({ blog }) {
  const { title, slug, tags, description, thumbnail } = blog.fields
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <Link href={`/blog/${slug}`}>
      <BlogContent
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div>
          <Image
            src={`https:${thumbnail.fields.file.url}`}
            width={thumbnail.fields.file.details.image.width}
            height={thumbnail.fields.file.details.image.height}
          />
        </div>
        <BlogItems>
          <h3>{title}</h3>
          <p>{description}</p>
          <BlogTagWrapper>
            {tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </BlogTagWrapper>
        </BlogItems>
      </BlogContent>
    </Link>
  )
}
