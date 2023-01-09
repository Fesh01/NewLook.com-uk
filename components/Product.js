import React from "react";

import { Link } from "react-router-dom";

import { useState } from "react";

import { BsGeoAlt } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { BsHeart } from "react-icons/bs";
import { BsBag } from "react-icons/bs";
import { RiPaypalFill } from 'react-icons/ri'

// import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";

import Form from "react-bootstrap/Form";
import Carousel from 'react-bootstrap/Carousel';
import Footer from "../Footer";
// import SingleProduct from "./SingleProduct";
// import Button from "react-bootstrap/Button";
// import { Container } from "react-bootstrap";
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBInput,
//   MDBBtn,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
// } from "mdb-react-ui-kit";

import gurl_1 from '../images/girl-small.jpg';
import gurl_2 from '../images/girl-small 2.jpg';
import gurl_3 from '../images/girl-small-3.jpg';
import gurl_4 from '../images/girl-small-4.jpg';
import gurl_5 from '../images/girl-gift.jpg';
import girl_1 from '../images/girl-big1.jpg';
import girl_2 from '../images/girl-big2.jpg';
import girl_3 from '../images/girl-big3.jpg';
import girl_4 from '../images/girl-big4.jpg';
import girl_5 from '../images/girl-big5.jpg';
import icon from '../images/icon.svg';
// import hood_1 from '../images/girl-hoodie 1.jpg';
// import hood_2 from '../images/girl-hoodies 2.jpg';
// import hood_3 from '../images/girl-hoodies 3.jpg';
// import hood_4 from '../images/girl-hoodies 4.jpg';
// import hood_5 from '../images/girl-hoodies 5.jpg';
// import hood_6 from '../images/girl-hoodies 6.jpg';
// import hood_7 from '../images/girl-hoodies 7.jpg';
// import hood_8 from '../images/girl-hoodies 8.jpg';


export default function Product() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div>
      <main className="starter_nav">
        <div className="">
          <p className="nav-text">
            {" "}
            <BsGeoAlt className="fill_icon" /> Find a store
          </p>
        </div>
        <div className="second-text">
          <p>new look</p>
        </div>
        <div className="third-text">
          <p>
            Account <CiUser className="acct-icon" />
          </p>
        </div>
      </main>

      <div className="Big-nav">
        <div className="small-nav">
          <div>
            <div
              className=""
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              christmas
            </div>

            {isHovering && (
              <div className="small-nav_ul">
                <p>christmas & gifting</p>
                <p>beauty & home</p>
              </div>
            )}
          </div>

          <div>
            <div
              className=""
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              womens
            </div>

            {isHovering && (
              <div className="small-nav_ul">
                <p>clothing</p>
                <p>shoes & boots</p>
                <p>accessories & bags</p>
                <p>brands</p>
              </div>
            )}
          </div>

          <div>
            <div
              className=""
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              kids
            </div>

            {isHovering && (
              <div className="small-nav_ul">
                <p>girls</p>
                <p>boys</p>
                <p>brands</p>
              </div>
            )}
          </div>

          <div>
            <div
              className=""
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              mens
            </div>

            {isHovering && (
              <div className="small-nav_ul">
                <p>clothing</p>
                <p>brands</p>
                <p>basics -from £5.99</p>
                <p>shoes & boots</p>
                <p>accessories</p>
              </div>
            )}
          </div>

          <div>
            <div
              className=""
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              sales
            </div>

            {isHovering && (
              <div className="small-nav_ul">
                <p>womens</p>
                <p>girls</p>
                <p>boys</p>
                <p>mens</p>
              </div>
            )}
          </div>
        </div>

        <div>
          <Form className="form">
            <Form.Control
              type="search"
              placeholder="Search"
              className="search it"
              aria-label="Search"
            />
            <CiSearch className="sea" />
            <BsHeart className="heart ms-3" />
            <BsBag className="bag" />
          </Form>
        </div>
      </div>

      <div className="third-nav shop-nav">
        <div className="third">
          <p>Up to 50% off selected styles* Shop offer in store & online</p>

          <div className="text">
            {" "}
            <span>*T&Cs apply.</span> Selected lines only.
          </div>
        </div>
      </div>

      <div className="home ">
        <Link to="/" className="ho less">
          
           home /<span > Girls / Girls clothing / Girls Hoodies & Sweatshirts /</span> Girl Navy Long Zip Hoodies
        </Link>
      </div>

      <section className="w-100 mt-4 mb-5 d-flex ">
        <div className="gurl-image gap-2">
        <img src={gurl_1} alt={gurl_1}  className='w-25 img'/>
        <img src={gurl_2} alt={gurl_2}  className='w-25'/>
        <img src={gurl_3} alt={gurl_3} className='w-25' />
        <img src={gurl_4} alt={gurl_4}  className='w-25'/>
        <img src={gurl_5} alt={gurl_5}  className='w-25'/>
        </div>

        <div className="gurl-image_2">
        <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block "
           src={girl_1} alt={girl_1} />
        
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
           src={girl_2} alt={girl_2} 
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={girl_3} alt={girl_3} 
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={girl_4} alt={girl_4} 
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={girl_5} alt={girl_5} 
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>

        <div className="gurl-text">
          <div className="d-flex navy">
              <p>Girls Navy Long Zip Hoodie</p>
              <BsHeart className="icon"/>
          </div>
          <div className="£">
            <h5>£14.99</h5>
          </div>
          <div className="mt-4 pay">
            <p>Pay in 3 interest free payments</p>
            
            <div className="klar d-flex">
            <button>Klarna.</button>
            <RiPaypalFill className="klar-icon"/><p className="mb-3 me-2 klar-p"> Pay<span className="span text-info">Pal</span></p>
            
            <p className="more">Learn more</p>
            </div>
          </div>

          <div className="mt-3 d-flex mb-4">
            <select className="">Choose size
              <option>Choose size</option>
              <option>9 years</option>
              <option>10-11 years</option>
              <option>12-13 years</option>
              <option>14-15 years</option>
            </select>
            <p className="select mt-2 ms-4">Size Guide</p>
          </div>

          <div className="btn-btn d-flex mb-5">
            <button className="info mb-4">add to bag</button>
            <button className="info-2"><BsGeoAlt className="fill_icon"/>Find in store</button>
          </div>

          <div className="bood p-3 mb-5">
            <div className="d-flex ms-5 gap-4 boo mt-4">
         <img
          className="mb-3 "
          src={icon} alt={icon} 
        /><h4>  FREE express Click & Collect on <br /> orders over £34.99</h4>
        </div>
        <p className="boo-p">Hurry, order before 6pm on 21st December</p>
        
          
          <div className="d-flex free">

            <p>Free Delivery</p>
          <p> 
          </p>
            <p>Free Returns</p>
            
          </div>
          </div>
          <div className="care">
              <h6>
                product Details & Care Guide
              </h6>
              <p></p>
              <p>Girls. Perfect for hobbies and PE, opt for this navy zip <br/> hoodie. Coordinate with the matching joggers.</p>
          </div>

        </div>
      </section>

      {/* <section>
        <SingleProduct />
      </section> */}

      <Footer />
    </div>
  );
}
