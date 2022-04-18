import React from 'react'
import Navigation from './Navigation';
import './UserProfile.css';
const UserProfile = () => {
    let UserDetails={
        Fname:"Richa",
        Lname:"Parikh",
        DOB:"01/01/2000",
        Email:"richa@gmail.com",
        MobileNo:"1234567890",
        Password:"12"
    }

    return (
      <>
      <Navigation />
      <div className="container mb-4">
        <div className="row">
          <div className="col-md-12 col-12 profile-main mt-4">
            <div className="row">
              <div className="col-md-12 col-12 user-detail-main border mb-3 pb-2">
                <div className="row">
                  <div className="col-md-12 col-12 profile-back">
                    <img
                      src="//nicesnippets.com/demo/profile-1.jpg"
                      className="rounded-circle"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-12 user-detail text-center mb-2">
                    <h4 className="m-0">
                      <strong>Michael Finn</strong>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-12 mt-4 pl-0 accordion-group-one">
                <div id="accordionMyStory" className="mb-2 accordion">
                  <div className="card rounded-0 story-card accordion-item">
                    <div
                      className="card-header rounded-0 pt-2 pb-2 accordion-header"
                      id="headingMyStory"
                    >
                      <h6 className="mb-0">My Story</h6>
                      <a
                        className="float-end"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseMyStory"
                        aria-expanded="true"
                        aria-controls="collapseMyStory"
                      >
                        <i className="icon fa fa-minus" />
                      </a>
                    </div>
                    <div
                      id="collapseMyStory"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingMyStory"
                      data-parent="#accordionMyStory"
                    >
                      <div className="card-body pt-2 pb-2">
                        <div className="body-section mb-3">
                          <h6 className="section-heading mb-1">
                            <strong>About</strong>
                          </h6>
                          <p className="section-content m-0">
                            Write something about you.
                          </p>
                        </div>
                        <div className="body-section mb-3">
                          <h6 className="section-heading mb-1">
                            <strong>Introduction</strong>
                          </h6>
                          <p className="section-content m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt.
                          </p>
                        </div>
                        <div className="body-section mb-3">
                          <h6 className="section-heading mb-1">
                            <strong>Achievement</strong>
                          </h6>
                          <p className="section-content m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt.
                          </p>
                        </div>
                        {/* <button className="btn btn-info btn-sm">Edit</button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-12 mt-4 accordion-group-two">
                <div id="accordionUserInfo" className="mb-2 accordion">
                  <div className="card rounded-0 info-card accordion-item">
                    <div
                      className="card-header rounded-0 pt-2 pb-2 accordion-header"
                      id="headingUserInfo"
                    >
                      <h6 className="mb-0">User Info</h6>
                      <a
                        className="float-end"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseUserInfo"
                        aria-expanded="true"
                        aria-controls="collapseUserInfo"
                      >
                        <i className="icon fa fa-minus" />
                      </a>
                    </div>
                    <div
                      id="collapseUserInfo"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingUserInfo"
                      data-parent="#accordionUserInfo"
                    >
                      <div className="card-body pt-2 pb-2">
                        <div className="body-section mb-3">
                          <h6 className="section-heading mb-1">
                            <strong>First Name</strong>
                          </h6>
                          <p className="section-content m-0">{UserDetails.Fname}</p>
                        </div>
                        <div className="body-section mb-3">
                          <h6 className="section-heading mb-1">
                            <strong>Address</strong>
                          </h6>
                          <p className="section-content m-0">
                            204 Pent Tower, sweet street, London.
                          </p>
                        </div>
                        <div className="body-section mb-3">
                          <h6 className="section-heading mb-1">
                            <strong>Contact Number</strong>
                          </h6>
                          <p className="section-content m-0">+91 9977001100</p>
                        </div>
                        <div className="body-section mb-3">
                          <h6 className="section-heading mb-1">
                            <strong>Email</strong>
                          </h6>
                          <p className="section-content m-0">
                            michael4747@gmail.com
                          </p>
                        </div>
                        <div className="body-section mb-3">
                          <h6 className="section-heading mb-1">
                            <strong>Website</strong>
                          </h6>
                          <p className="section-content m-0">abcxyz.com</p>
                        </div>
                        <button className="btn btn-danger btn-sm">Edit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-12 mt-4 pr-0 accordion-group-three">
                <div id="accordionMyTasks" className="mb-2 accordion">
                  <div className="card rounded-0 story-card accordion-item">
                    <div
                      className="card-header rounded-0 pt-2 pb-2 accordion-header"
                      id="headingMyTasks"
                    >
                      <h6 className="mb-0">My Tasks</h6>
                      <a
                        className="float-end"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseMyTasks"
                        aria-expanded="true"
                        aria-controls="collapseMyTasks"
                      >
                        <i className="icon fa fa-minus" />
                      </a>
                    </div>
                    <div
                      id="collapseMyTasks"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingMyTasks"
                      data-parent="#accordionMyTasks"
                    >
                      <div className="card-body pt-2 pb-2">
                        <div className="body-section mb-3">
                          <p className="m-0">Completed Pre-Orders - 90%</p>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-striped"
                              role="progressbar"
                              style={{ width: "10%" }}
                              aria-valuenow={10}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="body-section mb-3">
                          <p className="m-0">Completed Orders - 40%</p>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-striped bg-success"
                              role="progressbar"
                              style={{ width: "25%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="body-section mb-3">
                          <p className="m-0">Design New Ad - 20%</p>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-striped bg-info"
                              role="progressbar"
                              style={{ width: "50%" }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="body-section mb-3">
                          <p className="m-0">Conduct Feasibility Test - 60%</p>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-striped bg-warning"
                              role="progressbar"
                              style={{ width: "75%" }}
                              aria-valuenow={75}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="body-section mb-3">
                          <p className="m-0">Conduct Domain Analysis - 80%</p>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-striped bg-danger"
                              role="progressbar"
                              style={{ width: "100%" }}
                              aria-valuenow={100}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile