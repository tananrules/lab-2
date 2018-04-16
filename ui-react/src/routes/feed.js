import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import Header from '../components/Header';

export default class Feed extends Component {

  constructor() {
    super();
    this.state = {
      jobs: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/jobs').then((response) => {
      this.setState({
        jobs: response.data
      })
    })
  }

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

    let { jobs } = this.state;

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
                  {jobs.map((job) => {
                    let url = "/feed/"+job._id;
                    return (
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4><Link to={url}>{job.title}</Link></h4>
                        </div>
                        <div className="panel-body">
                          {job.description}
                        </div>
                        <br/>
                        <div className="panel-body">
                          <div className="row">
                            { job.owner && <div className="col-md-12">
                              <b>Employer</b> {job.owner.first_name} {job.owner.last_name}
                            </div> }
                            <div className="col-md-12">
                              <b>Budget Range</b> {job.budget} $
                            </div>
                            <div className="col-md-12">
                              <b>No of Bids yet</b> {job.bids.length}
                            </div>
                          </div>
                        </div>
                        <div className="panel-footer">
                          {job.skills.map((skill) => {
                            return(<span className="label label-default">{skill}</span>)
                          })}
                        </div>
                      </div>
                    )})
                  }
                </div>
              <nav aria-label="Page navigation">
                <ul class="pagination">
                  <li>
                    <a href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li><a href="#">1</a></li>
                  <li>
                    <a href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
              </div>
            </div>
          </div>

        </section>

      </div>
    );
  }
}