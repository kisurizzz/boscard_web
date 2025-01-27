import aboutOne from "@/data/aboutOne";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const {
  about,
  shape1,
  shape2,
  phone,
  discount,
  tagline,
  title,
  destination,
  points,
  safariLogo,
  text
} = aboutOne;

const AboutOne = () => {
  return (
    <section className="about-one">
      <div className="about-one-shape-1 animated slideInLeft">
        <Image src={shape1} alt="" />
      </div>
      <div className="about-one-shape-2 float-bob-y">
        <Image src={shape2} alt="" />
      </div>
      <Container>
        <Row>
          <Col xl={6} className="animated fadeInLeft">
            <div className="about-one__left">
              <div className="about-one__img-box">
                <div className="about-one__img">
                  <Image src={about} alt="" />
                </div>
                <div className="about-one__call">
                  <div className="about-one__call-icon">
                    <span className="icon-phone-call"></span>
                  </div>
                  <div className="about-one__call-number">
                    <p>Book Tour Now</p>
                    <h4>
                      <a href={`tel:${phone}`}>{phone}</a>
                    </h4>
                  </div>
                </div>
                {/* <div className="about-one__discount">
                  <h2>{discount}</h2>
                  <h3>Discount</h3>
                </div> */}
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="about-one__right">
              <div className="section-title text-left">
                <span className="section-title__tagline">{tagline}</span>
                <h2 className="section-title__title">{title}</h2>
              </div>
              <div>
                {aboutOne.destination.map((paragraph, index) => (
                  <p className="about-one__right-text" key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="d-flex align-items-center gap-3 mb-5 mt-3">
                <p className="about-page__text-2 m-0">{text}</p>
                <a
                  href="https://www.safaribookings.com/"
                  title="Safaribookings"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={safariLogo}
                    alt="Safari Bookings Logo"
                    style={{ maxWidth: "150px", width: "100%", height: "auto" }}
                  />
                </a>
              </div>

              <div className="d-flex align-items-center mt-4">
                <a href="https://api.whatsapp.com/send?phone=254722121633&text=Hello,%20I%27d%20like%20to%20get%20in%20touch,%20more%20information!" className="about-one__btn thm-btn me-5"
                target="_blank"
                rel="noreferrer">
                  Book with us now
                </a>
                <a
                  href="https://www.touristlink.com/user/anne-kamwati.html?sereferer=2355CD59"
                  title="Touristlink Certified Member"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="https://cdn1.touristlink.com/assets/shared/images/badge/certified_150x150.png"
                    alt="Touristlink Certification Badge"
                    style={{ maxWidth: "150px", width: "100%", height: "auto" }}
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutOne;
