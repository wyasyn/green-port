import Image from 'next/image'
import { SectionTitle } from '..'
import './Skills.scss'
import { skillsData } from '@/constants/data'

export default function Skills() {
  return (
    <div className="skills-container container">
        <SectionTitle title='Skills' description='What Am Good At' />
        <div className="skills-content">
            {
                skillsData.map((data) => (
                    <article key={data.name}>
                        <div className="img">
                            <Image
                                src={data.icon}
                                alt='Yasin Walum'
                                width={48}
                                height={48}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                placeholder='blur'
                                title={data.name}
                            />
                        </div>
                        <p>
                            {data.name}
                        </p>
                    </article>
                ))
            }
        </div>
    </div>
  )
}
