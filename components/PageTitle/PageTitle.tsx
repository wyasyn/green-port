import './PageTitle.scss'
type PageTitleProps = {
    description: string
    name: string
}

export default function PageTitle(props: PageTitleProps ) {
    const {description, name} = props
  return (
        <header className='page-title'>
            <div className="container">
                <small>
                    {description}
                </small>
                <h1>
                    {name}
                </h1>
            </div>
        </header>
  )
}
