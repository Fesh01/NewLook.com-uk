import React from "react";

import Navigation from "../Navigation";
import Footer from "../Footer";

import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { BsHeart } from "react-icons/bs";

import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";
// import "flickity-as-nav-for";

import hero from "../images/hero.jpg";
import shirts from "../images/shop-shirts.JPEG";
import jeans from "../images/SHOP-JEANS.JPEG";
import sweats from "../images/sweats.JPEG";
import ACCESSORIES from "../images/ACCESSORIES.JPEG";
import christmas from "../images/christmas.JPEG";
import lines from "../images/lines.JPEG";
import gifts from "../images/gifts.jpeg";
import news from "../images/news.jpeg";
import nightwear from "../images/nightwear.jpeg";
import shirt from "../images/shirts 2.jpeg";
import loungewear from "../images/loungewear.jpeg";
import skinny from "../images/skinny.jpeg";
import Tshirt from "../images/T-shirts.jpeg";
import polo from "../images/polo-shirts.jpeg";
import Access from "../images/access.jpeg";
import footwear from "../images/footwear.jpeg";
import tailoring from "../images/tailoring.jpeg";
import joggers from "../images/joggers.jpeg";
import brands from "../images/brands.jpeg";
import look from "../images/look.jpg";
import black from "../images/black.jpg";
import dark from "../images/dark.jpg";
import grey from "../images/grey.jpg";
import denim from "../images/denim.jpg";
import double from "../images/double.jpg";
import red from "../images/red.jpg";
import fine from "../images/fine.jpg";
import navy from "../images/navy.jpg";
import hooded from "../images/hooded.jpg";
import color from "../images/colour.jpg";
import wish from "../images/wish.jpg";
import help from "../images/help.jpg";
import ways from "../images/ways.jpg";
import app from "../images/app.jpg";
import discount from "../images/discount.jpg";
import delivery from "../images/delivery.jpg";
import returns from "../images/return.jpg";
import sustain from "../images/sustain.jpg";

export default function Home() {
  return (
    <div>
      <Navigation />
      <section>
        <div>
          <img src={hero} alt={hero} className="w-100 mt-5 mb-3" />
        </div>
      </section>

      <section className="grid-section mb-5">
        <div>
          <img src={shirts} alt={shirts} className="w-100" />
        </div>
        <div>
          <img src={jeans} alt={jeans} className="w-100" />
        </div>
        <div>
          <img src={sweats} alt={sweats} className="w-100" />
        </div>
        <div>
          <img src={ACCESSORIES} alt={ACCESSORIES} className="w-100" />
        </div>
      </section>

      <section>
        <div>
          <img src={christmas} alt={christmas} className="w-100 mb-5" />
        </div>
      </section>

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
                <img src={lines} alt={lines} />
                <p>New Lines Added!</p>
              </div>

              <div className="carousel-img">
                <img src={gifts} alt={gifts} />
                <p>Christmas Gifts</p>
              </div>

              <div className="carousel-img">
                <img src={news} alt={news} />
                <p>New in</p>
              </div>

              <div className="carousel-img">
                <img src={nightwear} alt={nightwear} />
                <p>Nightwear</p>
              </div>

              <div className="carousel-img">
                <img src={shirt} alt={shirt} />
                <p>Shirts</p>
              </div>

              <div className="carousel-img">
                <img src={loungewear} alt={loungewear} />
                <p>Loungewear</p>
              </div>

              <div className="carousel-img">
                <img src={skinny} alt={skinny} />
                <p>
                  Skinny Jeans from <br /> £16.99
                </p>
              </div>

              <div className="carousel-img">
                <img src={Tshirt} alt={Tshirt} />
                <p>T-shirts</p>
              </div>

              <div className="carousel-img">
                <img src={polo} alt={polo} />
                <p>Polo Shirts</p>
              </div>

              <div className="carousel-img">
                <img src={Access} alt={Access} />
                <p>Accessories</p>
              </div>

              <div className="carousel-img">
                <img src={footwear} alt={footwear} />
                <p>Footwear</p>
              </div>

              <div className="carousel-img">
                <img src={tailoring} alt={tailoring} />
                <p>Tailoring</p>
              </div>

              <div className="carousel-img">
                <img src={joggers} alt={joggers} />
                <p>Joggers</p>
              </div>

              <div className="carousel-img">
                <img src={brands} alt={brands} />
                <p>View All Brands</p>
              </div>
            </Flickity>
          </div>
        </Container>
      </section>

      <section>
        <div>
          <img src={look} alt={look} className="w-100 mt-5 mb-5" />
        </div>
      </section>

      <section>
        <div className="get mb-5">
          <h4>Get it, don't regret it</h4>
        </div>
      </section>

      <section className="mb-5">
        <Container>
          <div className="App-continua">
            {/* <div className='App-header'>
            </div> */}
            <Flickity
              className="carousel-nav-continua"
              options={{
                asNavFor: ".carousel-main",
                contain: true,
                pageDots: false,
              }}
            >
              <div className="carousel-img-continua">
                <div className="carousel-span">
                  <p>
                    <BsHeart className="heart ms-3" />
                  </p>
                </div>
                <img src={black} alt={black} />
                <div className="carousel-text">
                  <p className="carousel-sec">
                    Black Faux Fur Trim <br /> Hooded Parka Jacket
                  </p>
                  <h5 className="carousel-h5">£64.99</h5>
                  <Button variant="light text-dark">Choose size</Button>{" "}
                  <Button variant="success">Add to bag</Button>{" "}
                </div>
              </div>

              <div className="carousel-img-continua">
                <div className="carousel-span">
                  <p>
                    <BsHeart className="heart ms-3" />
                  </p>
                </div>
                <img src={dark} alt={dark} />
                <div className="carousel-text">
                  <p className="carousel-sec">
                    Dark Grey Cord Pocket <br /> Front Oversized Shirt
                  </p>
                  <h5 className="carousel-h5">
                    £21.74 <s>£28.99</s>
                  </h5>
                  <Button variant="light text-dark">Choose size</Button>{" "}
                  <Button variant="success">Add to bag</Button>{" "}
                </div>
              </div>

              <div className="carousel-img-continua">
                <div className="carousel-span">
                  <p>
                    <BsHeart className="heart ms-3" />
                  </p>
                </div>
                <img src={grey} alt={grey} />
                <div className="carousel-text">
                  <p className="carousel-sec">
                    Dark Grey Denim <br /> Wastern Jacket
                  </p>
                  <h5 className="carousel-h5">
                    £24.74 <s>32.99</s>
                  </h5>
                  <Button variant="light text-dark">Choose size</Button>{" "}
                  <Button variant="success">Add to bag</Button>{" "}
                </div>
              </div>

              <div className="carousel-img-continua">
                <div className="carousel-span">
                  <p>
                    <BsHeart className="heart ms-3" />
                  </p>
                </div>
                <img src={denim} alt={denim} />
                <div className="carousel-text">
                  <p className="carousel-sec">
                    Black Denim Wastern
                    <br /> Jacket
                  </p>
                  <h5 className="carousel-h5">
                    £24.74 <s>32.99</s>
                  </h5>
                  <Button variant="light text-dark">Choose size</Button>{" "}
                  <Button variant="success">Add to bag</Button>{" "}
                </div>
              </div>

              <div className="carousel-img-continua">
                <div className="carousel-span">
                  <p>
                    <BsHeart className="heart ms-3" />
                  </p>
                </div>
                <img src={double} alt={double} />
                <div className="carousel-text">
                  <p className="carousel-sec">
                    Black Denim Double <br /> Pocket Hooded Jacket
                  </p>
                  <h5 className="carousel-h5">
                    29.99 <s>£39.99</s>
                  </h5>
                  <Button variant="light text-dark">Choose size</Button>{" "}
                  <Button variant="success">Add to bag</Button>{" "}
                </div>
              </div>

              <div className="carousel-img-continua">
                <div className="carousel-span">
                  <p>
                    <BsHeart className="heart ms-3" />
                  </p>
                </div>
                <img src={red} alt={red} />
                <div className="carousel-text">
                  <p className="carousel-sec">
                    Red Check Long Sleeve <br /> Collared Pocket Shirt
                  </p>
                  <h5 className="carousel-h5">£17.99</h5>
                  <Button variant="light text-dark">Choose size</Button>{" "}
                  <Button variant="success">Add to bag</Button>{" "}
                </div>
              </div>

              <div className="carousel-img-continua">
                <div className="carousel-span">
                  <p>
                    <BsHeart className="heart ms-3" />
                  </p>
                </div>
                <img src={navy} alt={navy} />
                <div className="carousel-text">
                  <p className="carousel-sec">
                    Navy Cable Knit Long <br /> Sleeve Crew Neck
                  </p>
                  <h5 className="carousel-h5">£27.99</h5>
                  <Button variant="light text-dark">Choose size</Button>{" "}
                  <Button variant="success">Add to bag</Button>{" "}
                </div>
              </div>

              <div className="carousel-img-continua">
                <div className="carousel-span">
                  <p>
                    <BsHeart className="heart ms-3" />
                  </p>
                </div>
                <img src={fine} alt={fine} />
                <div className="carousel-text">
                  <p className="carousel-sec">
                    Black Fine Knit Crew <br /> Neck Muscle Fit Jumper
                  </p>
                  <h5 className="carousel-h5">
                    £13.49 <s>£17.99</s>
                  </h5>
                  <Button variant="light text-dark">Choose size</Button>{" "}
                  <Button variant="success">Add to bag</Button>{" "}
                </div>
              </div>

              <div className="carousel-img-continua">
                <div className="carousel-span">
                  <p>
                    <BsHeart className="heart ms-3" />
                  </p>
                </div>
                <img src={double} alt={double} />
                <div className="carousel-text">
                  <p className="carousel-sec">
                    Navy Check Double <br /> Pocket Overshirt
                  </p>
                  <h5 className="carousel-h5">
                    £24.99 <s>49.99</s>
                  </h5>
                  <Button variant="light text-dark">Choose size</Button>{" "}
                  <Button variant="success">Add to bag</Button>{" "}
                </div>
              </div>

              <div className="carousel-img-continua">
                <div className="carousel-span">
                  <p>
                    <BsHeart className="heart ms-3" />
                  </p>
                </div>
                <img src={hooded} alt={hooded} />
                <div className="carousel-text">
                  <p className="carousel-sec">
                    Black Hooded Long <br /> Puffer Jacket
                  </p>
                  <h5 className="carousel-h5">£59.99</h5>
                  <Button variant="light text-dark">Choose size</Button>{" "}
                  <Button variant="success">Add to bag</Button>{" "}
                </div>
              </div>

              <div className="carousel-img-continua">
                <div className="carousel-span">
                  <p>
                    <BsHeart className="heart ms-3" />
                  </p>
                </div>
                <img src={color} alt={color} />
                <div className="carousel-text">
                  <p className="carousel-sec">
                    Blue Color Block <br /> Hooded Puffer Jacket
                  </p>
                  <h5 className="carousel-h5">
                    £35.99 <s>£47.99</s>
                  </h5>
                  <Button variant="light text-dark">Choose size</Button>{" "}
                  <Button variant="success">Add to bag</Button>{" "}
                </div>
              </div>
            </Flickity>
          </div>
        </Container>
      </section>

      <section>
        <div>
          <img src={wish} alt={wish} className="w-100 mt-5 mb-5" />
        </div>
      </section>

      <section>
        <div className="get mb-5">
          <h4>Shopping with us</h4>
        </div>
      </section>

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
                <img src={help} alt={help} />
                <p></p>
              </div>

              <div className="carousel-img">
                <img src={ways} alt={ways} />
                <p></p>
              </div>

              <div className="carousel-img">
                <img src={app} alt={app} />
              </div>

              <div className="carousel-img">
                <img src={discount} alt={discount} />
              </div>

              <div className="carousel-img">
                <img src={delivery} alt={delivery} />
              </div>

              <div className="carousel-img">
                <img src={returns} alt={returns} />
              </div>

              <div className="carousel-img">
                <img src={sustain} alt={sustain} />
              </div>
            </Flickity>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
