import Footer from "./Footer";
import Navigation from "./Navigation";
import { useState } from "react";

const FeedBack = ({notify})=>{

    const feedback = {
        userid: "",
        date: "",
        comment: ""
    }

    const [userFeedback, setfeedback] = useState(feedback);

    async function handleSubmit(event) {

        event.preventDefault();
        const userId = sessionStorage.getItem("user");
        const comments = event.target.message.value;
        const date = new Date();

        let item = { userId, date, comments };

        let result = await fetch("https://auctionpointbackend.herokuapp.com/feedback/add_feedback", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })

        result = await result.json()
        console.warn("result", result)
        notify("Feedback added.")
        document.getElementById("feedback-form").reset()
    }

        return (
            <div>
                <Navigation/>
                <div className="container my-5 py-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8 bg-dark px-5 rounded z-depth-5 mt-5">
                            <div className="row">
                                <div className="card-header bg-dark mt-4">
                                    <h1 className="text-white">FeedBack</h1>
                                    <div className="col-sm-12 border border-bottom border-primary" />
                                </div>
                            </div>
                            <form onSubmit={handleSubmit} id="feedback-form"  name="Feedback">
                                <div className="row">
                                    <div className="col-md-12 mt-2">
                                        <div className="">
                                            <label htmlFor="message" className="form-label text-white">Message</label>
                                            <textarea type="text" id="message" name="message" rows={4} className="form-control text-white bg-dark" required defaultValue={""}/>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 my-4">Send Feedback</button>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
}
export {FeedBack};