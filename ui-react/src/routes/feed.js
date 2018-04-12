import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import Header from '../components/Header';

export default class Feed extends Component {

	render() {
    let colorgraph = {
      height: '5px',
      borderTop: '0',
      background: '#c4e17f',
      borderRadius: '5px',
      backgroundImage: '-webkit-linear-gradient(left, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4)',
      backgroundImage: '-moz-linear-gradient(left, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4)',
      backgroundImage: '-o-linear-gradient(left, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4)',
      backgroundImage: 'linear-gradient(to right, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4)'
    }

    return (
      <div className="culmn">
        <Header></Header>

        <br/><br/><br/><br/>

        <section id="dashboard">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <fieldset>
                  <h2>Job Feed</h2>
                  <hr style={colorgraph} />
                </fieldset>
                <div id="feed">
                  <div className="panel">
                    <div className="panel-heading">
                      <div className="text-center">
                        <div className="row">
                          <div className="col-sm-9">
                            <h3 className="pull-left"><Link to="/freelancer/dashboard/single-job">Ruby on Rails Dev with React experience</Link></h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel-body">
                      I am seeking an experienced full-stack Ruby On Rails developer to help me finish up a travel website.

                      Candidate need to Work in US Timings

                      • Extensive experience with Ruby on Rails.

                      • JavaScript MVC development experience (React, Angular, Ember, etc)

                      • Extensive understanding of HTML5, CSS, Ajax, jQuery, JSON, XML

                      • Database experience (MySQL, PostgreSQL)

                      • Experience in building a high-volume, highly available, distributed web application in a hosted environment.

                      Thanks.
                    </div>
                    <div className="panel-footer">
                      <span className="label label-default">Angular JS</span> 
                      <span className="label label-default">CSS</span> 
                      <span className="label label-default">Django</span>
                      <span className="label label-default">PostgreSQL</span>
                      <span className="label label-default">HTML5</span>
                    </div>
                  </div>

                  <div className="panel">
                    <div className="panel-heading">
                      <div className="text-center">
                        <div className="row">
                          <div className="col-sm-9">
                            <h3 className="pull-left"><Link to="/freelancer/dashboard/single-job">ReactJs Frontend Developer</Link></h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel-body">
                      Help us build the future of shopping.
                      We are looking for passionate, talented, and highly motivated hands-on Front End Developers with a creative edge, strong problem-solving skills and strong on development fundamentals to work with a global brand in consumer reward space with over 10 million users.
                    </div>
                    <div className="panel-footer">
                      <span className="label label-default">React JS</span> 
                      <span className="label label-default">Node</span> 
                      <span className="label label-default">Ajax</span>
                      <span className="label label-default">HTML5</span>
                    </div>
                  </div>

                  <div className="panel">
                    <div className="panel-heading">
                      <div className="text-center">
                        <div className="row">
                          <div className="col-sm-9">
                            <h3 className="pull-left"><Link to="/freelancer/dashboard/single-job">Create EmberJS questions.</Link></h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel-body">
                      We are looking for an expert who can create MCQs/questions for EmberJS .
                      The individual in this job is responsible for creating questions which must be rich in quality. The questions should not be theoretical or plagiarized. They should be application-based that tests candidates on their development skills in technology.
                      So, you will have to create the questions considering yourself a hiring manager & aim to test the overall skills of the candidate. 
                      We will be sharing with you the Question creation guidelines with a set of sample questions.
                    </div>
                    <div className="panel-footer">
                      <span className="label label-default">Ember JS</span> 
                      <span className="label label-default">Glimmer</span> 
                      <span className="label label-default">Javascript</span>
                      <span className="label label-default">HTML</span>
                      <span className="label label-default">CSS</span>
                    </div>
                  </div>

                  <div className="panel">
                    <div className="panel-heading">
                      <div className="text-center">
                        <div className="row">
                          <div className="col-sm-9">
                            <h3 className="pull-left"><Link to="/freelancer/dashboard/single-job">Develop Desktop Application for Social Gaming Video Content Marketplace</Link></h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel-body">
                      We are currently designing and building a video gaming platform which has a focus on recording, editing and sharing gaming video content. We are in need of a developer to join our team and assist us in creating this platform. We've been doing a large amount of prototyping with one other developer and are now looking for someone else to join our team. 
                    </div>
                    <div className="panel-footer">
                      <span className="label label-default">Flash</span> 
                      <span className="label label-default">Unreal Engine</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

      </div>
    );
  }
}