import Footer from "./Footer";
import Navigation from "./Navigation";

const FeedBack = ()=>{
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
                            <form>
                                <div className="row">
                                    <div className="col-md-5 border-right">
                                        <div className="col-md-12 mb-3">
                                            <div className="">
                                                <label htmlFor="name" className="text-white form-label">Name</label>
                                                <input type="text" id="name" name="name" className="form-control text-white bg-dark" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="email" className="text-white form-label">Email</label>
                                                <input type="email" id="email" name="email" className="form-control text-white bg-dark" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7 mt-2">
                                        <div className="">
                                            <label htmlFor="message" className="form-label text-white">Message</label>
                                            <textarea type="text" id="message" name="message" rows={4} className="form-control text-white bg-dark" required defaultValue={""} />
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