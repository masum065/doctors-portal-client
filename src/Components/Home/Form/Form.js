import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import formBg from '../../../images/makeAppintmentBg.png'
import { PrimaryBtn } from '../../Shared/Hero/HeroHomeContent/HeroHomeContent';
import SectionTitle from '../SectionTitle/SectionTitle';

const Form = () => {
    return (
        <FormContainerStyle>
           <Container>
               <Row className="justify-content-center">
                   <SectionTitle white align="center" title="Contact Us" heading="Always Connect With Us"/>
               </Row>
                <Row className="justify-content-center">
                    <Col lg={9}>
                    <FormStyle>
                        <form>
                            <input type="email" placeholder="Email Address"/>
                            <input type="text" placeholder="Subject"/>
                            <textarea name="message" placeholder="Message"></textarea>
                            <PrimaryBtn>Submit</PrimaryBtn>
                        </form>
                    </FormStyle>
                    </Col>
                </Row>   
            </Container> 
        </FormContainerStyle>
    );
};

const FormContainerStyle = styled.section`
background-image: url(${formBg});
background-size: cover;
background-position: center;
position: relative;
z-index: 1;
margin-top: 100px;
padding: 50px 0;
color: #fff;


::before {
  position: absolute;
  content: '';
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #383f52;
  opacity: 0.95;
  z-index: -1;
}

`


const FormStyle = styled.div`

margin-top: 50px;

input, textarea {
    width: 100%;
    padding: 16px 20px;
    border: none;
    margin: 8px;
    border-radius: 5px;
}
textarea{
    resize: none;
    min-height:180px;
}
button{
    margin: 0 auto;
    width: 180px;
}
`

export default Form;