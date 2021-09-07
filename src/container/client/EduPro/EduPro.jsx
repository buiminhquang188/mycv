import React, { Component } from "react";

export default class EduPro extends Component {
  render() {
    return (
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Mini Project</h5>
              <p className="card-text">
                <ul>
                  <li>IOT Project</li>
                  <li>Mercedes Clone Website</li>
                  <li>List to do</li>
                  <li>Hammer, Paper, Scissors Game</li>
                  <li>Dice Game</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Education</h5>
              <p className="card-text">
                <ul>
                  <li>University of Technology and Education / 2018 - Now</li>
                  <li>Chau Thanh High School / 2015 - 2018</li>
                  <li>Kim Dong Junior High School / 2011 - 2015</li>
                  <li>Le Thanh Duy Primary School / 2006 - 2011 </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
