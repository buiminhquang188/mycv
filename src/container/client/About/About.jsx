import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  IdcardOutlined,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import "./About.scss";
export default class About extends Component {
  render() {
    return (
      <div className="about my-5">
        <div className="row align-items-center">
          <div className="col-4 about__images">
            <div className="card h-100">
              <img
                className="card-img-top rounded"
                src="./assets/images/IMG_0186.jpg"
                alt
              />
            </div>
          </div>
          <div className="col-8 about__card">
            <div className="card h-100">
              <div className="card-body">
                <div className="about__title">
                  <p className="h1 pl-4 text-info">Bùi Minh Quang</p>
                </div>
                <div className="about__info">
                  <ul>
                    <li className="pb-2">
                      <IdcardOutlined className="about__info-icon" />
                      <span className="about__info-text">Intership</span>
                    </li>
                    <li className="pb-2">
                      <UserOutlined className="about__info-icon" />
                      <span className="about__info-text">
                        18 Nguyen Hue, Phuoc Hiep Ward, Ba Ria City
                      </span>
                    </li>
                    <li className="pb-2">
                      <MailOutlined className="about__info-icon" />
                      <a
                        className="about__info-text"
                        href="mailto:buiminhquang189@gmail.com"
                      >
                        buiminhquang189@gmail.com
                      </a>
                    </li>
                    <li className="pb-2">
                      <PhoneOutlined className="about__info-icon" />
                      <a className="about__info-text" href="tel:+0395120065">
                        0395120065
                      </a>
                    </li>
                    <li className="pb-2">
                      <GithubOutlined className="about__info-icon" />
                      <a
                        className="about__info-text"
                        href="http://github.com/buiminhquang188"
                        target="_blank"
                      >
                        buiminhquang188
                      </a>
                    </li>
                  </ul>
                  <div className="about__me">
                    <p>
                      Hi. Welcome to my CV! I'm Quang and i'm looking for an
                      intership positions at your company. I'm currently
                      studying at HCMC University of Technology and Education.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
