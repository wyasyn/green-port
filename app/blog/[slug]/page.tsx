// pages/posts/[slug].js
import './blog-page.scss'
import { blogData } from '@/constants/blogData';
import Image from 'next/image';

type Props = {
  params: {
    slug: string
  }
}

export default function BlogPage({ params }: Props) {
  const blog = blogData.find((blog) => blog.slug === params.slug);
  if (!blog) {
    return <main className='blog-page' > <h1>Blog not found</h1></main>;
  }
  return (
    <main className='blog-page'>
      <div className="container">
        <h1>{blog.title}</h1>
        <h3>{blog.description}</h3>
        <div className="img">
        <Image
            src={blog.image}
            alt='blog pic'
            width={1920}
            height={1280}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder='blur'
          />
        </div>
        <p>{blog.content}</p>
      </div>
    </main>
  );
}


