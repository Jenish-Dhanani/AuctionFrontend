import React,{useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import AdminNavbar from './AdminNavbar'

//Toast notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DropProduct = () => {

  document.title = "Admin - AuctionPoint.com"

  const [productsList, setProductList] = useState([]);

  async function fetchData(){
    await fetch(
      "https://auctionpointbackend.herokuapp.com/auction/all")
      .then((res) => res.json())
      .then((json) => {
        setProductList(json)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  var row_count = 0;

  function handleDelete(user_id, e) {
    e.preventDefault();
    async function deletePost() {
     await fetch("https://auctionpointbackend.herokuapp.com/auction/deleteAuction/"+user_id,
               { method: 'DELETE' });
      toast.success("User deleted successfully");
      //toast error
      fetchData()
   }

   deletePost();
 }


  return (
    <>
      <AdminNavbar/>
      <ToastContainer />
      <div className='container'>
      <h1 className='text-center mt-5 mb-5'>Drop Auction</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"> Product Name</th>
            <th scope="col"> Product Description</th>
            <th scope="col"> Product Price</th>
            <th scope="col"> Start Date </th>
            <th scope="col"> End Date </th>
            <th scope="col"> Delete </th>
          </tr>
        </thead>
        <tbody>
        {productsList && productsList.map(row => {
        return (
              <tr key={row_count}>
                  <th scope="row">{++row_count}</th>
                  <td>{row.productName}</td>
                  <td>{row.productDescription}</td>
                  <td>{row.productPrice}</td>
                  <td>{row.startDate.substr(0,10)}</td>
                  <td>{row.endDate.substr(0,10)}</td>
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

export default DropProduct