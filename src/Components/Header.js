import '../style/main.css';
import { Link } from 'react-router-dom';
export function Header () {
    return (
        <div className="header">
            <div className="logo"><Link to = "/" className='link'>Utkarsh Singh</Link></div>
            <div className="menu">
                <Link to = "/" className='link'>Home</Link>
                <Link to = "about-us" className='link'>About</Link>
            </div>
        </div>
    )

}