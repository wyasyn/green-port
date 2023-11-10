import Image from 'next/image'
import './Footer.scss'
import { socialData } from '@/constants/data'
import Link from 'next/link'

export default function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <footer>
        <div className="footer-container container">
          <Link className="logo" href='/'>
            <Image
              src='/images/code.png'
              alt='logo'
              width={32}
              height={32}
              />
          </Link>
            <p>
            &copy; {currentYear} <a href='/' className="first">Yasin Walum</a>. All rights reserved.
            </p>
          <div className="social">
            {
              socialData.map((data) => (
                <Link href={data.link} target='_blank' rel='noreferer' title={data.name} key={data.name} >{data.icon}</Link>
              ))
            }
          </div>
        </div>
    </footer>
  )
}
