import './Projects.scss'
import Image from 'next/image'
import Link from 'next/link'
import { projectsData } from '@/constants/projectsData'

export default function FeaturedProjects() {
    const selectedProjects = projectsData.slice(0,6);
  return (
    <div className="projects-container container">
        {
            selectedProjects.map((data) => (
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
                </Link>
            ))
        }
    </div>
  )
}
