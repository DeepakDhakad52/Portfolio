import { Link } from 'react-router-dom'
import './styles/PageNotFound.css'

function NotFound() {
    return (
        <div className='not-found'>
            <div className="mars"></div>
            <img src="https://assets.codepen.io/1538474/404.svg" className="logo-404" alt='Page Not Found' />
            <p className="title">Opps! Page Not Found</p>
            <p className="subtitle">
                You’re either misspelling the URL <br /> or requesting a page that's no longer here.
            </p>
            <div align="center">
                <Link className="btn" to="/"><i className="fa-solid fa-house"></i> Back to Home page</Link>
            </div>
            <img src="https://assets.codepen.io/1538474/astronaut.svg" className="astronaut" alt='' />
            <img src="https://assets.codepen.io/1538474/spaceship.svg" className="spaceship" alt='' />
        </div>
    )
}

export default NotFound
