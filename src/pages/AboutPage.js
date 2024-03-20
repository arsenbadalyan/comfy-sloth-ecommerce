import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img className="img" src={aboutImg} alt="about image" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
            <p>
            At Comfy Sloth, our story begins with a simple yet profound belief: that everyone deserves a space that feels like home. Inspired by the pursuit of comfort and style, we embarked on a mission to curate a collection that transcends mere furniture and decor. Driven by our passion for creating cozy sanctuaries, we've carefully selected each piece to reflect our commitment to quality, comfort, and timeless design. From the softest throws to the sturdiest sofas, every item in our collection is thoughtfully chosen to help you craft your perfect comfort zone. But our journey doesn't stop there. We're dedicated to not only providing exceptional products but also to fostering a community where comfort is celebrated and creativity thrives. Join us as we continue to inspire and be inspired by the endless possibilities of designing your own cozy haven. Welcome to Comfy Sloth – where comfort is not just a luxury, but a way of life.
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
