import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import '../style/main.css';
export function About () {
    return (
        <div className="about-wrapper">
            <Header/>
            <br></br>
            <h1>Utkarsh Singh</h1>
            <br></br>
            <p>Currently pursuing a <strong>Bachelor of Computer Applications (BCA),</strong> with a strong foundation in <strong>software development</strong>, <strong>data structures</strong>, <strong>operating systems</strong>, and <strong>database management</strong>. Proficient in <strong>Core Java</strong>, <strong>JSP</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and frameworks like <strong>Spring MVC</strong>. Experienced in <strong>Oracle SQL</strong> for database-driven applications. Familiar with <strong>computer networking</strong> and <strong>system architecture</strong>. Passionate about problem-solving, web development, and writing efficient code. Constantly learning and working on real-world projects to enhance my technical skills. Open to opportunities in software development and IT.</p>
            <Footer/>
        </div>
    )
}