import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import '../style/main.css';
import Image1 from "../images/Untitled design.png";
export function Home () {
    return (
        <div className="main-wrapper">
            <Header/>
            <br></br>
            <div >
                <h1>Hello!
                <br></br>This is Utkaarsh Singh,
                <br></br>I am an Aspiring<strong> Software Developer.</strong>  
                </h1>
                <img className = "Home-Image" alt="Utkarsh's_Photo" src = {Image1}/>
            </div>
            <Footer/>
        </div>
    )
}