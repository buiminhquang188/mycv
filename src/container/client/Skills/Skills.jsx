import React, { Component } from "react";
import "./Skills.scss";
export default class Skills extends Component {
  render() {
    return (
      <div className="row row-cols-1 row-cols-md-2 skills">
        <div className="col mb-4">
          <div className="card h-100 skills__technical">
            <div className="card-body">
              <h5 className="card-title">TECHNICAL SKILLS</h5>
              <p className="card-text">
                <ul>
                  <li>HTML5</li>
                  <li>CSS</li>
                  <li>SASS</li>
                  <li>BOOTSTRAP</li>
                  <li>ES6</li>
                  <li>AXIOS</li>
                  <li>REACTJS</li>
                  <li>VERSION CONTROL (GITHUB)</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100 skills__soft">
            <div className="card-body">
              <h5 className="card-title">SOFT SKILLS</h5>
              <p className="card-text">
                <p className="h5">Communication</p>
                <p className="pl-2 text-justify mr-5">
                  Through 3 years of learning and training in university, my
                  communicate have improved which I could speak fluently and
                  also that has taught me listening, respecting other people.
                </p>
                <p className="h5">Teamwork</p>
                <p className="pl-2 text-justify mr-5">
                  Have a good sense of teamwork. Knowing how to motivated
                  teammates to achieve the goal.
                </p>
                <p className="h5">Typing Skill</p>
                <p className="pl-2 text-justify mr-5">
                  One of my best record in typing speed is about 90WPM. I also
                  have Microsoft Office Specialist (MOS) — Word in 2017 which I
                  could do a lot of fundamental skill set.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
