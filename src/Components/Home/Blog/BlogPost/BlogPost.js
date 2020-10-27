import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import quote from '../../../../images/left-quote.svg';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const BlogPost = (props) => {
  const { title, description, author, authorImg, date } = props.blog;
  return (
    <Col xl={4}>
      <BlogPostStyle>
        <div className='blog-authro'>
          <img src={authorImg} alt='' />
          <h4>
            {author} <span>{date}</span>
          </h4>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>

        <Link to='/'>
          <FontAwesomeIcon icon={faLongArrowAltRight} />
        </Link>
      </BlogPostStyle>
    </Col>
  );
};

const BlogPostStyle = styled.div`
  position: relative;
  z-index:3;
  padding: 50px 30px;
    color: #3C3C3E;
    height: 310px;
    border-radius: 5px;
    margin-top: 30px;

    h3 {
        font-size: 24px;
        margin-top: 31px;
        font-weight: 400;
    }

    .blog-authro{
        position: relative;
        z-index:11;
        display: flex;
        align-items: center;
    
        img{
            max-width: 55px;
            margin-right: 15px;
        }
        h4{
            font-size: 20px;
            font-weight: 800;
    
            span{
                display: block;
                font-size: 70%;
                margin-top: 6px;
                font-weight: 400;
                color: #BDBCBF;
            }
        }
    }
    a {
        font-size: 50px;
        color: #fff;
        position: absolute;
        bottom: 0;
        opacity: 0;
    }
  ::before {
    position: absolute;
    right: 7%;
    top: 14%;
    content: '';
    width: 200px;
    height: 200px;
    background-image: url(${quote});
    background-size: cover;
    background-position: center;
    z-index: 1;
    opacity: 0;
    transition: .3s;
}

::after{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgb(25,211,174);
    background: linear-gradient(100deg, rgba(25,211,174,1) 0%, rgba(14,207,236,1) 100%);
    content: '';
    z-index: -1;
    opacity: 0;
    transition: .3s;
    border-radius: 5px;
    }


    :hover{
        color: #fff;
        a{
            opacity: 1;
        }
        .blog-authro{
            img{
                display: none;
            }
            h4{
                font-weight:600;

                span{
                    color: #fff;
                }
            }
        }
        
        ::after{
            opacity: 1;
        }
        ::before{
            opacity: .3;
            transition: .3s;
        }
        p{
            display: none;
        }
    }
    
  }
`;
export default BlogPost;
