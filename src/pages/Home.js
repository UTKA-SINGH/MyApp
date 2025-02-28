import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import '../style/main.css';
import Image1 from "../images/Untitled design.png";
export function Home () {
    return (
        <div className="main-wrapper">
            <Header/>
            <br></br>
            <h1>Hello!
                <br></br>This is Utkarsh Singh,
                <br></br>I am an Aspiring<strong> Software Developer.</strong>
                <img src = {Image1}/>
            </h1>
            <Footer/>
        </div>
    )
}