import { AiOutlineArrowRight } from 'react-icons/ai'
import './BolgSec.scss'
import Image from 'next/image'
import Link from 'next/link'
import { blogData } from '@/constants/blogData'

export default function FeaturedBlog() {
    const selectedBlog = blogData.slice(0,3)
  return (
    <div className="featured-blog-container container">
        {
            selectedBlog.map((data) => (
                <article className="blog-article"  key={data.slug}>
                <h5>
                    {data.date}
                </h5>
                <h3>
                    {data.title}
                </h3>
                <p className='content'>
                    {data.description}
                </p>
                <Link href={`/blog/${data.slug}`} className="cta">
                    <p>Read Me</p>
                    <AiOutlineArrowRight />
                </Link>
                <div className="img">
                    <Image
                        src={data.image}
                        alt='blog pic'
                        width={1920}
                        height={1280}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        placeholder='blur'
                    />
                </div>
            </article>
            ))
        }
    </div>
  )
}
