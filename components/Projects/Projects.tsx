import './Projects.scss'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillEye } from 'react-icons/ai'
import { projectsData } from '@/constants/projectsData'

export default function Projects() {
  return (
    <div className="projects-container container">
        {
            projectsData.map((data) => (
                <Link href={data.link}  className="project" key={data.name} target='_blank' rel='noreferrer' >
                    <Image
                        src={data.image}
                        alt='project pic'
                        width={1920}
                        height={1280}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        placeholder='blur'
                    />
                    <div className="project-info">
                        <div className="info">
                            <h2>
                                {data.name}
                            </h2>
                            <p>
                                {data.description}
                            </p>
                        </div>
                    </div>
                    <p className="badge">
                        <AiFillEye />
                    </p>
                </Link>
            ))
        }
    </div>
  )
}
