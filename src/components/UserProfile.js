import React from 'react'
import Navigation from './Navigation';

import { useState, useEffect } from "react";
import { ReactDOM } from 'react';

import './UserProfile.css';
import img1 from '../assests/profile_pic.png'

const UserProfile = () => {

    const userid = sessionStorage.getItem("user");

    const [userData, setUserData] = useState({})
    const [updateUser, setUpdateUser] = useState({})
    const [userAuction, setUserAuction] = useState([]);
    const [wonAuction, setWonAuction] = useState([]);

    var rowCount = 0;

  const handleChange = (e)=>{
    const {name,value} = e.target
    setUpdateUser({...updateUser, [name]:value})
  }

  useEffect(() => {
    async function fetchData(){
      await fetch(
        "http://localhost:4000/user/"+userid)
        .then((res) => res.json())
        .then((json) => {
          setUserData(json)
          setUpdateUser(json)
          //console.log(json);
        });

        await fetch(
          "http://localhost:4000/auction/"+userid)
          .then((res) => res.json())
          .then((json) => {
            setUserAuction(json)
          });

          await fetch(
            "http://localhost:4000/transaction/get_transaction/"+userid)
            .then((res) => res.json())
            .then(async (json) => {
              //setWonAuction(json)    
              const arr=[];
             for(let item of json)
             {
               console.log("auction model id="+item.auctionId);

               await fetch(
                "http://localhost:4000/auction/getBid/"+item.auctionId)
                .then((res) => res.json())
                .then((json_obj) => {
                  console.log(json_obj);
                  
                  arr.push(json_obj);
                  
                });
                
             }
             setWonAuction(arr);

            });

    }

    fetchData();
  }, [])


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

    async function handleEditProfilePic()
    {
        let profile_pic = document.getElementById("profilePic").files[0];
        console.log(profile_pic);
        const formData = new FormData();
        formData.append('avtar', profile_pic) // appending every file to formdata
        
        let result = await fetch("http://localhost:4000/fileApi/uploadFile/"+userid, {
          method: 'PUT',
          headers: {
              "Accept": "application/json"
          },
          body: formData
          });
          result = await result.json();
          console.log(result);

          window.location.reload();
    }

    async function handleEditProfile(event)
    {
      event.preventDefault();
     
      const firstName = event.target.name.value;
      const address = event.target.address.value;
      const mobileNumber = event.target.contactNumber.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
      const cnfrm_passwd = event.target.confPassword.value;
      
      if((password!=null && cnfrm_passwd!=null)&&(password==cnfrm_passwd))
      {
        console.log("Profile edited");

        let item = { firstName, address, mobileNumber, email, password };
        console.log(item);

        let result = await fetch("http://localhost:4000/user/updateUser"+userid, {
            method: 'PUT',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })

        result = await result.json()
        console.warn("result", result) 
      }
      else{
        console.log("Profile edited");

        let item = { firstName, address, mobileNumber, email };
        console.log(item);

        let result = await fetch("http://localhost:4000/user/updateUser"+userid, {
            method: 'PUT',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })

        result = await result.json()
        console.warn("result", result) 
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
                      src={userData.avtar && "http://localhost:4000/uploads/"+userData.avtar}
                      className="rounded-circle"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-12 user-detail text-center mb-2">
                    <h4 className="m-0">
                      <strong>{userData.firstName}</strong>
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
                      {userAuction && userAuction.map(row => {
                        return (
                               <div className="card-body pt-2 pb-2" key={++rowCount}>
                              <div className="body-section mb-3">
                                <h6 className="section-heading mb-1">
                                  <strong>{row.productName}</strong>
                                </h6>
                                <p className="section-content m-0">
                                  {row.productDescription}
                                </p>

                              </div>
                              
                              <div className="body-section mb-3">
                                <h6 className="section-heading mb-1">
                                  <strong>Start Date of auction</strong>
                                </h6>
                                <p className="section-content m-0">
                                    {row.startDate.toString().split("T")[0]};
                                </p>
                                <hr></hr>
                              </div>
                            </div>                        
                          );
                        })}                     
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
                          <p className="section-content m-0">{userData.firstName}</p>
                        </div>
                        <div className="body-section mb-3">
                          <h6 className="section-heading mb-1">
                            <strong>Address</strong>
                          </h6>
                          <p className="section-content m-0">
                            {userData.address}
                          </p>
                        </div>
                        <div className="body-section mb-3">
                          <h6 className="section-heading mb-1">
                            <strong>Contact Number</strong>
                          </h6>
                          <p className="section-content m-0">{userData.mobileNumber}</p>
                        </div>
                        <div className="body-section mb-3">
                          <h6 className="section-heading mb-1">
                            <strong>Email</strong>
                          </h6>
                          <p className="section-content m-0">
                           {userData.email}
                          </p>
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
                      <h6 className="mb-0">Won Bids</h6>
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
                      
                      {wonAuction.length >= 0 && wonAuction.map(row => {
                        return (
                               <div className="card-body pt-2 pb-2" key={++rowCount}>
                              <div className="body-section mb-3">
                              <h6 className="section-heading mb-1">
                                  <strong> Product </strong>
                                </h6>
                                <p className="section-content m-0">
                                    {row?.productName};
                                </p>        

                              </div>
                              
                              <div className="body-section mb-3">
                                <h6 className="section-heading mb-1">
                                  <strong> Amount </strong>
                                </h6>
                                <p className="section-content m-0">
                                    {row?.highestBid};
                                </p>
                                <hr></hr>
                              </div>
                            </div>                        
                          );
                        })} 
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
                <form onSubmit={handleEditProfile}>
                <div className="modal-body">
                    <div className='d-flex justify-content-evenly align-items-center my-3'>
                        <label htmlFor="name" className='w-50'>Name :</label>
                        <input id="name" type="text" name="firstName" className="form-input" value={updateUser.firstName || ""} onChange={handleChange}/>
                    </div>
                    <div className='d-flex justify-content-evenly align-items-center my-3'>
                            <label htmlFor="address" className='w-50'>Address :</label>
                            <input id="address" type="text" name="address" className="idm-input" value={updateUser.address || ""} onChange={handleChange}/>
                    </div>
                    <div className='d-flex justify-content-evenly align-items-center my-3'>
                        <label htmlFor="contact number" className='w-50'>Contact Number :</label>
                        <input id="contactNumber" type="text" name="mobileNumber" className="form-input" value={updateUser.mobileNumber || ""} onChange={handleChange}/>
                    </div>

                    <div className='d-flex justify-content-evenly align-items-center my-3'>
                            <label htmlFor="email" className='w-50'>Email :</label>
                            <input id="email" type="text" name="email" className="form-input" value={updateUser.email || ""} onChange={handleChange}/>
                    </div>              

                    <div className='d-flex justify-content-evenly align-items-center my-3'>
                    <input id="chp" type="checkbox" className="form-input" onClick={showchp}/>
                            <label htmlFor="password" className='w-50'>Password :</label>
                            <input id="password" type="password" className="form-input" />
                    </div>

                    
                    <div className='d-flex justify-content-evenly align-items-center my-3' id="chpass" style={{visibility: "hidden"}}>
                            <label htmlFor="conf-password" className='w-50' id="cp1">Confirm Password :</label>
                            <input id="confPassword" type="password"  className="form-input" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={handleEditProfile}>Edit Profile </button>
                </div>
                </form>
                
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
                        <input id="profilePic" type="file"  accept="image/png, image/gif, image/jpeg"  className="form-input" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={handleEditProfilePic}>change Profile picture</button>
                </div>

                
            </div>
        </div>
    </div>
    </>
  );
}

export default UserProfile