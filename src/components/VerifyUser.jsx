import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const VerifyUser = ()=>{

const [isPending,setIsPending] = useState(true)
const {uid,token} = useParams()

useEffect(async ()=>{
    // fetch(`http://localhost:4000/user/verify-account/1ebf1abda33c178503476212df073b73b09a48868ec6aca226caaeecc75d0dd1/627a48c12f52bf3d2857ebda`)
    let result = await fetch(`http://localhost:4000/user/verify-account/${token}/${uid}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
    result = await result.json();

    console.log(result);
    // if(result){
    //     setIsPending(true);
    // }
},[])

    return <>verify page</>

}

export {VerifyUser}