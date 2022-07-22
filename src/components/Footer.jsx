import React from "react";
import styled from "styled-components";
import { social } from "../utils/constants";
import { BsGeoAlt, BsTelephone, BsEnvelope } from "react-icons/bs";

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="about-container">
          <h2>About us</h2>
          <h6>
            Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit.
            Expedita, a?
          </h6>
          <div className="social">
            <h3>Stay In Touch</h3>
            <ul className="social-icons">
              {social.map((social) => {
                const { id, url, icon } = social;
                return (
                  <li key={id} className="social-icon">
                    <a href={url}>{icon}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="info-container">
          <h2>Information</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <div className="contact">
            <h4>Contact us</h4>
            <div>
              <span>
                <BsGeoAlt />
              </span>
              1 Weert Nederland
            </div>
            <div>
              <span>
                <BsTelephone />
              </span>
              (+316 000 0000 00)
            </div>
            <div>
              <span>
                <BsEnvelope />
              </span>
              sales@mail.com
            </div>
          </div>
        </div>
      </div>

      <h5 className="last-footer">
        {new Date().getFullYear()} &copy; <span>Lady Nina</span>
      </h5>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background: #d9d9d9;

  .container {
    margin: 0 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 2rem;
    padding-bottom: 3rem;
  }

  .about-container h6 {
    font-size: 1.5rem;
  }

  .social {
    margin-top: 2.4rem;

    .social-icons {
      margin-top: 1.3rem;
      display: flex;
      align-items: center;

      li a {
        padding-right: 1rem;
        font-size: 1.5rem;

        a {
          color: black;
        }
      }
    }
  }

  .contact {
    margin-top: 2.4rem;

    div span {
      padding-right: 1.5rem;
      padding-top: 1rem;
      text-align: center;
    }
  }

  .last-footer {
    height: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;
