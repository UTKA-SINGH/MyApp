import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import '../style/main.css';
import Image1 from "../images/WhatsApp Image 2025-02-28 at 7.09.57 PM.jpeg";
export function Home () {
    return (
        <div className="main-wrapper">
            <Header/>
            <br></br>
            <div >
                <h1>Hello!
                <br></br>This is Utkarsh Singh,
                <br></br>I am a Aspiring<strong> Software Developer.</strong>  
                </h1>
                <img className = "Home-Image" alt="Utkarsh's_Photo" src = {Image1}/>
            </div>
            <Footer/>
        </div>
    )
}