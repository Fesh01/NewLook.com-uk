import React from "react";

import {
  MDBFooter,
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <div>
      {" "}
      <MDBFooter className="text-center bgcolor text-lg-start ">
        <section className=" justify-content-lg-between p-4 border-bottom">
          <div className="text-center">
            <h6>Sign up to our newsletter</h6>
            <p>
              Sign up to our e-mails to be the first to hear about the latest
              trends, new arrivals and exclusive offers. You can unsubscribe at
              any time.
            </p>
          </div>

          <div>
            <form action="">
              <MDBRow className="d-flex justify-content-center">
                <MDBCol md="4" start className="">
                  <MDBInput
                    contrast
                    type="email"
                    placeholder="Email address"
                    className="mb-4 bur"
                  />
                </MDBCol>

                <MDBCol size="auto">
                  <MDBBtn outline color="dark" type="submit" className="mb-4">
                    Sign me up
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </div>

          {/* <div className='me-5 d-none d-lg-block'>
        <span>Get connected with us on social networks:</span>
      </div>

      <div>
        <i className='me-4 text-reset'>
          <MDBIcon fab icon="facebook-f" />
        </i>
        <i className='me-4 text-reset'>
          <MDBIcon fab icon="twitter" />
        </i>
        <i className='me-4 text-reset'>
          <MDBIcon fab icon="google" />
        </i>
        <i className='me-4 text-reset'>
          <MDBIcon fab icon="instagram" />
        </i>
        <i className='me-4 text-reset'>
          <MDBIcon fab icon="linkedin" />
        </i>
        <i  className='me-4 text-reset'>
          <MDBIcon fab icon="github" />
        </i>
      </div> */}
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-capitalize fw-bold mb-4">
                  <MDBIcon icon="gem" className="me-3" />
                  Help
                </h6>
                <p>help Center Home</p>
                <p>Covid-19 Update</p>
                <p>security</p>
                <p>Privacy</p>
                <p>Cookies</p>
                <p>Accessibility</p>
                <p>Terms & Conditions</p>
                <p>Size Guide</p>
                <p>Site Map</p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Delivery & Returns
                </h6>
                <p className="text-reset">Delivery & Collection Options</p>
                <p className="text-reset">How to Return</p>
                <p className="text-reset">Return Policy</p>
                <p className="text-reset">Refunds</p>

                <p className="text-reset">Delivery FAQs</p>
                <p className="text-reset">Collection FAQs</p>
                <p className="text-reset">Track Your Order</p>
                <p className="text-reset">Donate with Re-Fashion</p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Shopping With Us
                </h6>
                <p>
                  <a href="#!" className="text-reset">
                    Our App
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Klarna
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    PayPal
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    New Look Card
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Gift Cards
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Student Discount
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Black Friday
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Promotions & Discounts
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    #ThatNewLookFeeling
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Company Information
                </h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  Store Locator
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  About New Look
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> Careers
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> Modern Slavery
                  Statement
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> New Look Kind
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> Hospice UK
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}
