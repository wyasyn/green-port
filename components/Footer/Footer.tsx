import './Footer.scss'

export default function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <footer>
        <div className="footer-container container">
            <p>
                &copy;{currentYear} <span className="first">Yasin Walum</span>. All rights reserved.
            </p>
        </div>
    </footer>
  )
}
