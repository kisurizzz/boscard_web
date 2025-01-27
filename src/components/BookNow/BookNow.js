import bookNow from "@/data/bookNow";
import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";

const { bg, subtitle, title } = bookNow;

const BookNow = () => {
  return (
    <section className="book-now">
      <div
        className="book-now-shape"
        style={{ backgroundImage: ` url(${bg})` }}
      ></div>
      <Container>
        <Row>
          <Col xl={12}>
            <div className="book-now__inner">
              <div className="book-now__left">
                <p>{subtitle}</p>
                <h2>{title}</h2>
              </div>
              <div className="book-now__right d-flex align-items-center gap-3">
                <a
                  href="https://api.whatsapp.com/send?phone=254722121633&text=Hello,%20I%27d%20like%20to%20get%20in%20touch,%20more%20information!"
                  className="thm-btn book-now__btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book tour now
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

export default BookNow;
