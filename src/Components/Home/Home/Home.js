import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Doctors from '../Doctors/Doctors';
import Form from '../Form/Form';
import Header from '../Header/Header';
import MakeAppintment from '../MakeAppointment/MakeAppintment';
import Services from '../Services/Services';
import Textimonial from '../Testiomnial/Textimonial';

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <About />
      <MakeAppintment />
      <Textimonial />
      <Blog />
      <Doctors/>
      <Form/>
      <Footer/>
    </>
  );
};

export default Home;
