import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {Link} from "react-router-dom"

const VerifyUser = ()=>{

const [isLoading,setIsLoading] = useState(true)
const {uid,token} = useParams()

    useEffect(async ()=>{
        // fetch(`https://auctionpointbackend.herokuapp.com/user/verify-account/1ebf1abda33c178503476212df073b73b09a48868ec6aca226caaeecc75d0dd1/627a48c12f52bf3d2857ebda`)
        let result = await fetch(`https://auctionpointbackend.herokuapp.com/user/verify-account/${token}/${uid}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });
        result = await result.json();

        if(result){
            setIsLoading(false);
        }
    },[])

    return <>
        {
            isLoading?
            <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary"></div>
            </div>
            :<div className="text-center bg-info p-5 text-black min-vh-100">
                <div className="card d-inline-block p-5 shadow">
                    <div className='bg-primary shadow' style={{ borderRadius: '200px', height: '200px', width: '200px', margin: '0 auto' }}>
                        <div className="text-white" style={{fontSize:"100px","line-height": "200px","margin-left": "-15px"}}>✓</div>
                    </div>
                    <br></br>
                    <div>
                        <h1><strong>Success</strong></h1>
                        <p>Account Verification successful<br /> You can now <Link to="/login">login!</Link></p>
                    </div>
                </div>
            </div>
        }
    </>

}

export {VerifyUser}