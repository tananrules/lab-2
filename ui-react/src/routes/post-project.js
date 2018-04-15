import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from '../components/Header';
import { postProject } from '../actions/jobs';

const mapDispatchToProps = dispatch => {
  return {
    postProject: (data) => dispatch(postProject(data))
  };
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.loginReducer.currentUser,
  };
}

class PostProject extends Component {

  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      skills: [],
      budget: "",

    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.postProject(this.state);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSkills(event) {
    event.preventDefault();
    let skills = event.target.value.trim().split(',').map((item) => {
      return item.toLowerCase();
    });
    this.setState({
      skills: skills
    })
  }

  handleBudget(type, event) {
    event.preventDefault();

    let budgetArr = this.state.budget.split("-");
    let min = budgetArr[0] || 0, 
        max = budgetArr[1] || 0;

    if(type === "min") {
      min = event.target.value || min;
    } else {
      max = event.target.value || max;
    }

    this.setState({
      budget: min + "-" + max
    });
  }

  resetForm(event) {
    event.preventDefault();
    this.setState({
      title: "",
      description: "",
      skills: "",
      budget: "",
    })
  }

  render() {
    let { currentUser } = this.props;

    return (
      <div className="culmn">
        <Header></Header>

        <br/><br/><br/><br/>

        <section id="post-project">
          <div className="container">
            <div className="row">
              <div className="col-md-offset-2 col-md-8">
                <form role="form" onSubmit={this.handleSubmit.bind(this)}>
                  <div className="form-group">
                    <label>Job Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter Job Title" required onChange={this.handleChange.bind(this)} />
                  </div>
                  <div className="form-group">
                    <label>Job Description</label>
                    <textarea type="text" rows="8" className="form-control" id="description" placeholder="Enter Job Description" required onChange={this.handleChange.bind(this)} />
                  </div>
                  <div className="form-group">
                    <label>Skills Required</label> (Seperate skills using " , ")
                    <textarea type="text" className="form-control" id="skills" placeholder="Enter skills required for the job" required onChange={this.handleSkills.bind(this)} />
                  </div>
                  <div className="form-group">
                    <label>Budget Range</label>
                    <div className="row">
                      <div className="col-md-6">
                        <input type="number" className="form-control" id="min" placeholder="Min $$" required onChange={this.handleBudget.bind(this, "min")} />
                      </div>
                      <div className="col-md-6">
                        <input type="number" className="form-control" id="max" placeholder="Max $$" required onChange={this.handleBudget.bind(this, "max")} />
                      </div>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button className="btn btn-default" onclick={this.resetForm.bind(this)}>Reset</button>
                    <button type="submit" className="btn btn-success">Post Job</button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostProject);

