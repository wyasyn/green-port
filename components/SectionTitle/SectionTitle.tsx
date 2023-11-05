import './SectionTitle.scss'

type Title = {
    title: string
    description: string
}

export default function SectionTitle(props:Title) {
    const { title, description } = props
  return (
    <header className='section-title' >
        <div className="header-container container">
            <small>
                {title}
            </small>
            <h2>
                {description}
            </h2>
        </div>
    </header>
  )
}
