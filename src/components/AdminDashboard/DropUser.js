import React,{useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import AdminNavbar from './AdminNavbar';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const DropUser = () => {

  document.title = "Admin - AuctionPoint.com"
  const [userList, setUserList] = useState([])
  var row_count = 0;

  async function fetchData(){
    await fetch(
      "https://auctionpointbackend.herokuapp.com/user/all")
      .then((res) => res.json())
      .then((json) => {
        setUserList(json)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  function handleDelete(user_id, e) {
     e.preventDefault();
     async function deletePost() {
      await fetch("https://auctionpointbackend.herokuapp.com/user/deleteUser/"+user_id,
                { method: 'DELETE' })
                .then(async response =>{
                  if(!response.ok)
                  {
                    toast.error("Error deleting user");
                  }
                  else{
                    // toastr.success('User deleted successfully', 'Delete status', {displayDuration:3000})
                    toast.success("User deleted successfully");
                  }
                })

        fetchData()
    }

    deletePost();
  }

  return (
    <>
      <AdminNavbar/>
      <ToastContainer />
      <div className='container'>
      <h1 className='text-center mt-5 mb-5'>Drop User</h1>
        <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Aadhar Number</th>
            <th scope="col">Email Id</th>
            <th scope="col">isVerified </th>
            <th scope="col"> Delete </th>
          </tr>
        </thead>
        <tbody>
        {userList && userList.map(row => {
        return (
              <tr key={row_count}>
                  <th scope="row">{++row_count}</th>
                  <td>{row.firstName}</td>
                  <td>{row.lastName}</td>
                  <td>{row.aadharNumber}</td>
                  <td>{row.email}</td>
                  <td>{row.isVerified+""}</td>
                  <td><FontAwesomeIcon icon={faTrash} onClick={(e) => handleDelete(row._id, e)}/></td>
              </tr>
          );
        })}
        </tbody>
      </table>
      </div>
    </>
  )
}
