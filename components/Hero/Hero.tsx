import Image from 'next/image'
import './Hero.scss'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import { socialData } from '@/constants/data'
import { images } from '@/constants/images'

export default function Hero() {
  return (
    <div className="hero">
        <div className="hero-container container">
            <div className="col-1">
                <div className="image">
                    <Image
                    src={images.profile}
                    alt='profile pic'
                    width={800}
                    height={1067}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={true}
                    placeholder='blur'
                    title='Yasin Walum'
                     />
                </div> 
                    <div className="exp">
                        <h3 className="num">
                            10 +
                        </h3>
                        <p>
                            Years of <br /> <span>Experience</span>
                        </p>
                     </div>
                     <div className="exp">
                        <h3 className="num">
                            300 +
                        </h3>
                        <p>
                            Completed<br /> <span>Projects</span>
                        </p>
                     </div>
            </div>
            <div className="col-2">
                <small>Hello, am</small>
                <h1>
                    <span className="first">Yasin</span> Walum
                </h1>
                <h3>
                   Computer Scientist 🚀
                </h3> 
                <p className='intro'>
                    Am on a Journey to innovate and create. Explore my world of code, design, and technology as I turn ideas into reality.
                </p>
                <a href='/assets/resume.pd' className="btn">
                    <AiOutlineCloudDownload />
                    <p>
                        Download CV
                    </p>
                </a>
                <div className="socials">
                    {
                        socialData.map((data) => (
                            <a href={data.link} className="social" key={data.name} title={data.name}>
                                {data.icon}
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
