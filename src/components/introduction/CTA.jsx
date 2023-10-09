import CV from '../../images/RESUME.pdf'

const CTA=()=>{
    return(
        <div className="CTA">
            <a href={CV} className='btn'>Download Resume</a>
            <a href="" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA