import React from 'react'
import Navigation from './Navigation';

import { useState } from "react";
import { ReactDOM } from 'react';

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

    const showchp = () =>
    {
      
       var x = document.getElementById('chp');
      var y  = document.getElementById('chpass');
        if(x.checked)
        {
          y.style.visibility = "visible";
        }
        else
        {
          y.style.visibility = "hidden";
        }
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
                      <br></br>
                      <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#EditProfilePic">
                          Edit Profile Picture
                        </button>
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
                      <h6 className="mb-0">My Auction</h6>
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
                            <strong>Product Name</strong>
                          </h6>
                          <p className="section-content m-0">
                            Sample Product Name
                          </p>

                        </div>
                        
                        <div className="body-section mb-3">
                          <h6 className="section-heading mb-1">
                            <strong>Date of acution</strong>
                          </h6>
                          <p className="section-content m-0">
                              Auction Date
                          </p>
                          <hr></hr>
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
                        <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#EditProfile">
                          Edit
                        </button>
                        {/* <button className="btn btn-danger btn-sm">Edit</button> */}
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
                      <h6 className="mb-0">My Bid</h6>
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
                          <h6 className="section-heading mb-1">
                            <strong>Product Name</strong>
                          </h6>
                          <p className="section-content m-0">
                            Sample Product Name
                          </p>
                        </div>
                        
                        <div className="body-section mb-3">
                          <h6 className="section-heading mb-1">
                            <strong>Date of acution</strong>
                          </h6>
                          <p className="section-content m-0">
                              Auction Date
                          </p>
                          <hr></hr>
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


          {/* Edit Profile */}
    <div className="modal fade" id="EditProfile" tabIndex="-1" aria-labelledby="EditProfileLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="EditProfileLabel">Edit Profile</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className='d-flex justify-content-evenly align-items-center my-3'>
                        <label htmlFor="name" className='w-50'>Name :</label>
                        <input id="name" type="text" className="form-input" />
                    </div>
                    <div className='d-flex justify-content-evenly align-items-center my-3'>
                            <label htmlFor="address" className='w-50'>Address :</label>
                            <input id="address" type="text" className="idm-input" />
                    </div>
                    <div className='d-flex justify-content-evenly align-items-center my-3'>
                        <label htmlFor="contact number" className='w-50'>Contact Number :</label>
                        <input id="contact number" type="text" className="form-input" />
                    </div>

                    <div className='d-flex justify-content-evenly align-items-center my-3'>
                            <label htmlFor="email" className='w-50'>Email :</label>
                            <input id="email" type="text" className="form-input" />
                    </div>

                    <div className='d-flex justify-content-evenly align-items-center my-3'>
                            <label htmlFor="website" className='w-50'>Website :</label>
                            <input id="website" type="text" className="form-input" />
                    </div>

                    <div className='d-flex justify-content-evenly align-items-center my-3'>
                    <input id="chp" type="checkbox" className="form-input" onClick={showchp}/>
                            <label htmlFor="password" className='w-50'>Password :</label>
                            <input id="password" type="password" className="form-input" />
                    </div>

                    
                    <div className='d-flex justify-content-evenly align-items-center my-3' id="chpass" style={{visibility: "hidden"}}>
                            <label htmlFor="conf-password" className='w-50' id="cp1">Confirm Password :</label>
                            <input id="conf-password" type="password"  className="form-input" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Edit Profile </button>
                </div>

                
            </div>
        </div>
    </div>



              {/* Edit Profile pic */}
              <div className="modal fade" id="EditProfilePic" tabIndex="-1" aria-labelledby="EditProfilePicLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="EditProfilePicLabel">Edit Profile Picture</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className='d-flex justify-content-evenly align-items-center my-3'>
                        <label htmlFor="profile pic" className='w-50'>Upload Profile Picture:</label>
                        <input id="name" type="file"  accept="image/png, image/gif, image/jpeg"  className="form-input" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">change Profile picture</button>
                </div>

                
            </div>
        </div>
    </div>
    </>
  );
}

export default UserProfile