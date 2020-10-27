import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SectionTitle from '../SectionTitle/SectionTitle';
import wilson from '../../../images/wilson.png';
import BlogPost from './BlogPost/BlogPost';

const Blog = () => {
  const blogData = [
    {
      title: 'Check at least a doctor in a year for your teeth',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
      author: 'Dr. Cudi',
      authorImg: wilson,
      date: '23 April 2019',
    },
    {
      title: 'Two time brush in a day can keep you healthy',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
      author: 'Dr. Sinthia',
      authorImg: wilson,
      date: '23 April 2019',
    },
    {
      title: 'The tooth cancer is taking a challenge',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
      author: 'Dr. Cudi',
      authorImg: wilson,
      date: '23 April 2019',
    },
  ];
  return (
    <Container style={{ marginTop: '150px' }}>
      <Row className='justify-content-center'>
        <SectionTitle
          align='center'
          title='Our Blog'
          heading='From Our Blog News'
        />
      </Row>

      <Row style={{ marginTop: '20px' }}>
        {blogData.map((blog, index) => (
          <BlogPost key={index} blog={blog} />
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
