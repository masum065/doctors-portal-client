import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import FooterCol from './FooterCol/FooterCol';
import footerBg from '../../../images/footer-bg.png';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { PrimaryBtn } from '../Hero/HeroHomeContent/HeroHomeContent';


const Footer = () => {
    const noNamed = [
        {name: "Emergency Dental Care" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
        {name: "Tooth Extraction" , link: "/tooth-extract"},
        {name: "Check Up" , link: "/checkup"},
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Emergency Dental Care" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
        {name: "Tooth Extraction" , link: "/tooth-extract"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"}
    ]
    const services = [
        {name: "Emergency Dental Care" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
        {name: "Tooth Extraction" , link: "/tooth-extract"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"}
    ]


    return (
        <FooterStyle>
            <Container>
                <Row>
                <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <PrimaryBtn>+2025550295</PrimaryBtn>
                        </div>
                    </FooterCol>
                </Row>
            </Container>
            <div style={{paddingTop: '85px', color: '#AAAEBC'}} className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
        </FooterStyle>
    );
};


const FooterStyle = styled.footer`
background-image: url(${footerBg});
padding: 100px 0 15px;


.menu-title {
    font-size: 20px;
    font-weight: 700;
    color: #60C7C7;

    
}
.footer-menu {
    a {
    padding: 4px 0;
    display: inline-block;
    color: #9ba0b0d9 !important;
    font-weight: 500;

    :hover{
        color: #6ACECE !important;
    }
}
}


.social-media {
    margin-top: 30px;
    a {
    display: inline-block;
    border-radius: 50%;
    border: 1px solid #6ACECE;
    height: 40px;
    width: 40px;
    line-height: 39px;
    text-align: center;
    color: #6ACECE;
    margin-right: 5px;
    transition: .2s;

    :hover{

        background: #6ACECE;
        color: #fff;
        }
    }

}

`
export default Footer;