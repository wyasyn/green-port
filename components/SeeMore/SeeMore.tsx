import Link from 'next/link'
import './SeeMore.scss'

type Prop = {
    link: string
}

export default function SeeMore({link}: Prop) {
  return (
    <div className="container see-more">
        <Link href={link} >
            See More
        </Link>
    </div>
  )
}
