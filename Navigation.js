import React from "react";

import { Link } from "react-router-dom";

import { useState } from "react";

import { BsGeoAlt } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { BsHeart } from "react-icons/bs";
import { BsBag } from "react-icons/bs";

import Form from "react-bootstrap/Form";

export default function Navigation() {
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
            <Link to="/adminregister" className="ho">
              Account <CiUser className="acct-icon" />
            </Link>
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

      <div className="third-nav">
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
          home{" "}
          <Link to="/shop" className="ho">
            / mens homepage
          </Link>
        </Link>
      </div>
    </div>
  );
}
