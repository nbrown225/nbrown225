import React from "react";
import aboutImg from '../../assets/images/aboutImg.jpg'
const About = () =>{
    return(
        <main className="card teal row" >

            <div className="col s5 card-content" id="about-info">
                <h2 className="center">Hello!</h2>
                <p className="center" id="about-p">Stufffkfanobividvinv inbndkvnmodnvepivnpiunpiunpinpin  woipwainvv forgot what i put before. will add this in later. wwikf fje  fgjo ljfcoefh jof jfoejgopflgv jmoljgvj mvnpvn dlkngv sjnv . fjljlojb aj gvj w</p>
            </div>
            <div className="col s5 card-content" id="about-img">
                <img src={aboutImg}
                alt='self image'
                className="about-img"></img>
            </div>

        </main>
    )
}

export default About