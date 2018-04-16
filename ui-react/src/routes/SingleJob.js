import React, { Component } from 'react';
import axios from 'axios';

import Header from '../components/Header';

export default class SingleJob extends Component {

  constructor() {
    super();
    this.state = {
      singleJob: {}
    }
  }

  componentDidMount() {
    const { match } = this.props
    axios.get(`http://localhost:8080/api/jobs/${match.params.id}`).then((response) => {
      this.setState({
        singleJob: response.data
      });
    });
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

    let { singleJob } = this.state;

    return (
      <div className="culmn">
        <Header></Header>

        <br/><br/><br/><br/>

        <section id="dashboard">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <fieldset>
                  <h2>Job Details</h2>
                  <hr style={colorgraph} />
                </fieldset>
                <div id="postlist">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <div className="text-center">
                        <div className="row">
                          <div className="col-sm-9">
                            { singleJob && <h3 className="pull-left">{singleJob.title}</h3> }
                          </div>
                        </div>
                      </div>
                    </div>
                    { singleJob && <div className="panel-body">
                      {singleJob.description}
                    </div> }
                    { singleJob.skills && <div className="panel-footer">
                        {singleJob.skills.map((skill) => {
                          return(<span className="label label-default">{skill}</span>)
                        })}
                    </div>}
                  </div>

                  <div className="panel">
                    <h4><b>Details</b></h4>
                    { singleJob.owner && <div className="panel-body">
                      <b>Employer</b> {singleJob.owner.first_name} {singleJob.owner.last_name}
                    </div> }
                     { singleJob.bids && <div className="panel-body">
                      <b>No of bids yet</b> 2
                    </div> }
                    { singleJob.budget && <div className="panel-body">
                      <b>Budget Range</b> {singleJob.budget} $
                    </div> }
                  </div>

                  <div className="panel">
                    <h4><b>Bids</b></h4>
                    <ul>
                      <li>
                        <h5>Name - Tarun Arora || Budget - 80$</h5>
                        <button className="btn btn-xs btn-success">HIRE</button>
                      </li>
                       <li>
                        <h5>Name - Tarun KUMAR || Budget - 50$</h5>
                        <button className="btn btn-xs btn-success">HIRE</button>
                      </li>
                    </ul>
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