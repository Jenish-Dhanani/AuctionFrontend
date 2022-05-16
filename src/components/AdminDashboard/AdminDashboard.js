import React,{useState, useEffect} from 'react';
import AdminNavbar from './AdminNavbar'
import "./AdminDashboard.css"

const AdminDashboard = () => {

  document.title = "Admin - AuctionPoint.com"

  const [userList, setUserList] = useState([])
  const [user_count, setUserCount] = useState([])

  const [productsList, setProductList] = useState([]);
  const [auction_count, setAuctionCount] = useState([])

  async function fetchData(){
    await fetch(
      "https://auctionpointbackend.herokuapp.com/user/all")
      .then((res) => res.json())
      .then((json) => {
        setUserList(json)
        setUserCount(json.length);

      });

      await fetch(
        "https://auctionpointbackend.herokuapp.com/auction/all")
        .then((res) => res.json())
        .then((json) => {
          setProductList(json)
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
      <h1 className='text-center mt-5 mb-5'>Admin Dashboard</h1>
      <div className="d-flex mt-5 mb-4 fs-4 flex-wrap justify-content-center align-items-center" style={{gap:"1em"}}>
        <div className="dashboard-tile">
          <div className={`shadow rounded dashboard-tile-content bg-primary text-light`}>
              <span>
                  <span className="fw-bolder fs-2">Total Users</span>
                  <br />
                  <span className="text-white">{user_count}</span>
              </span>
          </div>
        </div>
        {/*  */}
        <div className="dashboard-tile">
          <div className={`shadow rounded dashboard-tile-content bg-primary text-light`}>
              <span>
                  <span className="fw-bolder fs-2">Total Auction</span>
                  <br />
                  <span className="text-white">{auction_count}</span>
              </span>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default AdminDashboard