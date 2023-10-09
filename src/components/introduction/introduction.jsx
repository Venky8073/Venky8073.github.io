import CTA from "./CTA"
import ME from '../../images/profile.jpeg'

const Intro=()=>{
    return(
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Venkatesh Gangoji</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA/>

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Intro