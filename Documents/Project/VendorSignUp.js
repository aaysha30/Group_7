import React from 'react'
import { Link } from 'react-router-dom'
import './home1.css'
import './style1.css'

export default function Signup() {
    return (
        <div>
            <section className="signin-page account">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="block text-center my-3">
                        <h2 className="text-center">Vendor SignUp</h2>
                        <form className="text-left clearfix my-3" action="index.html">
                            <div className="form-group">
                            <input type="text" className="form-control my-3"  placeholder="First Name" name='firstname' required />
                            </div>
                            <div className="form-group">
                            <input type="text" className="form-control my-3"  placeholder="Last Name" name='lastname' required />
                            </div>
                            <div className="form-group">
                            <input type="text" className="form-control my-3"  placeholder="Mobileno" name='mobileno' required />
                            </div>
                            <div className="form-group">
                            <input type="email" className="form-control my-3"  placeholder="Email" name='email' required />
                            </div>
                            <div className="form-group">
                            <input type="password" className="form-control my-3"  placeholder="Password" name='password' required />
                            </div>
                            <div className="form-group">
                            <input type="text" className="form-control my-3"  placeholder="Gender" name='gender' required />
                            </div>
                            <div className="text-center">
                            <button type="submit" className="btn btn-main text-center my-3">Sign In</button>
                            </div>
                        </form>
                        <p className="mt-20">Already have an account ?<Link to="/">Login</Link></p>
                        {/* <p><a href="forget-password.html">Forgot your password?</a></p> */}
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
