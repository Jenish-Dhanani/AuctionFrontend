import React,{useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import AdminNavbar from './AdminNavbar'

//Toast notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DropProduct = () => {

  const [productsList, setProductList] = useState([]);
  console.log("Product List",productsList)

  async function fetchData(){
    await fetch(
      "http://localhost:4000/auction/all")
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
    console.log('You clicked delete.');
    async function deletePost() {
     await fetch("http://localhost:4000/auction/deleteAuction/"+user_id,
               { method: 'DELETE' });
      console.log('Delete successful');
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
      <h3 className='mt-4'>DropProduct</h3>
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
    </>
  )
}

export default DropProduct