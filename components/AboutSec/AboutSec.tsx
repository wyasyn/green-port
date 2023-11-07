import Image from 'next/image'
import './AboutSec.scss'
import { images } from '@/constants/images'
import { HiOutlineDownload } from 'react-icons/hi'

export default function AboutSec() {
  return (
    <div className="about-container container">
        <div className="col-1">
            <div className="about-img">
                <Image
                    src={images.abt}
                    alt='Yasin Walum'
                    width={360}
                    height={467}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder='blur'
                    title='Yasin Walum'
                />
            </div>
        </div>
        <div className="col-2">
            <strong>Yasin Walum</strong>
            <h3>Web Developer | Data Analyst</h3>
            <p>
            👋 Hello! I'm, a passionate web developer and data analyst with a love for transforming data into meaningful insights and crafting web experiences that leave a lasting impression. With a blend of creativity and analytical prowess, I bring a unique perspective to every project I undertake.
            </p>
            <a href="/assets/resume.pdf" className="btn" download='resume' >Download CV <HiOutlineDownload /></a>
        </div>
    </div>
  )
}
