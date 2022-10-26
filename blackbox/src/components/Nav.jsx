import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <nav>
            <Link to='/musicproduction'> Music Production</Link>
            <Link to='/Photography'> Photography</Link>
            <Link to='/equiptmentrental'>Equiptment Rental</Link>
        </nav>
    )
}