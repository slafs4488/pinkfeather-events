import React from "react";
import "./Team.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TestimonialCard from "./TestimonialCard";
import testmonialData from "./testimonial.json";
import img_one from "./../assets/team_member_one.webp"
import img_two from "./../assets/team_member_two.webp"

function Team() {
  return (
    <div className="team" id="team">
      <h1>Our team</h1>
      <p className="mb-2">Meet the PinkFeather Events Team: Passionate Event Planners Driven by Excellence</p>

      <div className="team-data mt-5">
        <div className="team-member d-md-flex ">
          <div className="team-member-image">
            <img src={img_one} />
          </div>
          <div className="team-member-content">
            <h1>Shalini Gupta</h1>
            <h3>Founder & CEO</h3>
            <p>
            A seasoned event planner with over 15 years of experience, Shalini’s passion for perfection drives PinkFeather Events’ success. She’s known for her creativity, attention to detail, and customer-first philosophy.
            </p>
          </div>
        </div>
        <div className="team-member d-md-flex">
          <div className="team-member-image">
            <img src={img_two} />
          </div>

          <div className="team-member-content">
            <h1>Rohit Singh</h1>
            <h3>Head of Venue Management</h3>
            <p>
            Rohit’s expertise in venue management ensures that every event is hosted in a perfect location. His attention to detail guarantees that every venue is equipped with the necessary facilities to make an event successful.
            </p>
          </div>
        </div>
      </div>

      <h1>Client Testimonials</h1>
      <p className="mb-5">Hear What Our Clients Have to Say About Us</p>

      <Container>
        <Row>
          {testmonialData.map((data) => {
            return (
              <Col sm={12} md={6} className="ps-0">
                <TestimonialCard data={data} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Team;
