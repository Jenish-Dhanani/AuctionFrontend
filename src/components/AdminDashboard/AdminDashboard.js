import React,{useState, useEffect} from 'react';
import AdminNavbar from './AdminNavbar'
import "./AdminDashboard.css"

const AdminDashboard = () => {

  const [userList, setUserList] = useState([])
  const [user_count, setUserCount] = useState([])

  const [productsList, setProductList] = useState([]);
  const [auction_count, setAuctionCount] = useState([])
  console.log("Product List",productsList)
  console.log("Users List",userList)

  async function fetchData(){
    await fetch(
      "http://localhost:4000/user/all")
      .then((res) => res.json())
      .then((json) => {
        setUserList(json)
        console.log("Total User="+user_count);
        setUserCount(json.length);

      });

      await fetch(
        "http://localhost:4000/auction/all")
        .then((res) => res.json())
        .then((json) => {
          setProductList(json)
          console.log("Total Auctions="+auction_count);
          setAuctionCount(json.length);
        })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <AdminNavbar />
      <div className="container">
      <div>AdminDashboard</div>
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Total Users</h5>
              <h5 class="card-title">{user_count}</h5>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title"> Total Auction </h5>
              <h5 class="card-title"> {auction_count} </h5>
           </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default AdminDashboard