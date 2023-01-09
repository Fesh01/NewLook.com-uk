import React from "react";

import { Link } from "react-router-dom";

import { useState } from "react";
import Products from "./Products";

// import {DataContext} from '../Context/DataContext';

import { BsGeoAlt } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { BsHeart } from "react-icons/bs";
import { BsBag } from "react-icons/bs";

import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Footer from "../Footer";




// import today from "../images/today2.webp";
// import school from "../images/school.webp";
// import sleeve from "../images/sleeve.webp";
// import collar from "../images/collar.webp";

export default function Shop() {


  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };



  // const { products } = useContext(DataContext);
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

      <div className="home">
        <Link to="/" className="ho">
          home <span>/ Girls</span>
        </Link>
      </div>

      <section className="girl mt-4">
        <div>
          <h4>Girls</h4>
        </div>
        <div>
          <p>
            Fill your wardrobe with the cutest styles ever from our range of
            teens fashion. Whether you’re stocking up on denim <br /> staples or
            love pretty prints, there’s something for everyone here. Whatever it
            is you’re after, discover and shop our <br /> teens fashion.
          </p>
        </div>

        <div>
          <section className="mb-5">
            <Container>
              <div className="App">
                <Flickity
                // className="carousel-nav"
                // options={{
                //   asNavFor: ".carousel-main",
                //   contain: false,
                //   pageDots: true
                // }}
                >
                  <div className="carousel-img">
                    <Button variant="light text-dark">
                      Girls Long Sleeve Tops
                    </Button>{" "}
                  </div>

                  <div className="carousel-img">
                    <Button variant="light text-dark">Girls Briefs</Button>{" "}
                  </div>

                  <div className="carousel-img">
                    <Button variant="light text-dark">Girls sale</Button>{" "}
                  </div>

                  <div className="carousel-img">
                    <Button variant="light text-dark">Girls Cami Top</Button>{" "}
                  </div>

                  <div className="carousel-img">
                    <Button variant="light text-dark">
                      Girls Super Skinny Jeans
                    </Button>{" "}
                  </div>

                  <div className="carousel-img">
                    <Button variant="light text-dark">Girls Dresses</Button>{" "}
                  </div>

                  <div className="carousel-img">
                    <Button variant="light text-dark">Girls Clothing</Button>{" "}
                  </div>

                  <div className="carousel-img">
                    <Button variant="light text-dark">
                      Girls Party Dresses
                    </Button>{" "}
                  </div>

                  <div className="carousel-img">
                    <Button variant="light text-dark">Shoes for Girls</Button>{" "}
                  </div>

                  <div className="carousel-img">
                    <Button variant="light text-dark">Joggers for Girls</Button>{" "}
                  </div>

                  <div className="carousel-img">
                    <Button variant="light text-dark">Girls Sportwear</Button>{" "}
                  </div>

                  <div className="carousel-img">
                    <Button variant="light text-dark">Girls Trousers</Button>{" "}
                  </div>

                  <div className="carousel-img">
                    <Button variant="light text-dark">Girls Accessories</Button>{" "}
                  </div>

                  <div className="carousel-img">
                    <Button variant="light text-dark">Girls Bikins</Button>{" "}
                  </div>

                  <div className="carousel-img">
                    <Button variant="light text-dark">Girls Shorts</Button>{" "}
                  </div>
                </Flickity>
              </div>
            </Container>
          </section>
        </div>
      </section>

      <section></section>

      <section className="small-text mt-3 mb-5">
        <div>
          <p>Showing 48 of 1153 items</p>
        </div>
      </section>

      <Container>
        {/* <section className="grid-2 gap-4">
          <div>
            <Link to="/product">
              <img src={today} alt={today} className="w-100" />
            </Link>
            <h5>
              New today{" "}
              <span>
                {" "}
                <BsHeart />
              </span>
            </h5>
            <p>Girls Navy Long Zip Hoodie</p>
            <h5>£14.99</h5>
          </div>
          <div>
            <img src={school} alt={school} className="w-100" />
            <h5>
              New today{" "}
              <span>
                {" "}
                <BsHeart />
              </span>
            </h5>
            <p>Girls Black Pleated Hidded Shorts School</p>
            <h5>£12.99</h5>
          </div>
          <div>
            <img src={sleeve} alt={sleeve} className="w-100" />
            <h5>
              New today{" "}
              <span>
                {" "}
                <BsHeart />
              </span>
            </h5>
            <p>Girls Pale Blue Collared Shorts Sleeve</p>
            <h5>£6.99</h5>
          </div>
          <div>
            <img src={collar} alt={collar} className="w-100" />
            <h5>
              New today{" "}
              <span>
                {" "}
                <BsHeart />
              </span>
            </h5>
            <p>Girls White Piqué Zip Collar Polo School</p>
            <h5>£8.99</h5>
          </div>
        </section> */}

        <Products />
      </Container>

      <section className="text-center mb-5 mt-4">
        <Button variant="light">Load next 48</Button>{" "}
      </section>

      <Footer />
    </div>
  );
}

