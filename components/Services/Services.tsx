import { servicesData } from '@/constants/data'
import './Services.scss'

export default function Services() {
  return (
    <div className="services-container container">
        {
            servicesData.map((data) => (
                <article key={data.name}>
                    {data.icon}
                    <h3>
                        {data.name}
                    </h3>
                    <p>
                        {data.description}
                    </p>
                </article>
            ))
        }
    </div>
  )
}
