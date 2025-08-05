import { Link } from "react-router-dom";
import { useState } from "react";

export function Register(){
  const[name,setName]=useState("")
  const[email,setEmail]=useState("example@gmail.com")
  const[contact,setContact]=useState()
  const[password,setPassword]=useState("")
  const[confirmPassword,setConfirmPassword]=useState("")
  return(
    <>
      <main className="main">
      {/* Page Title */}
      <div className="page-title" data-aos="fade" style={{background:"url('/assets/img/hero-carousel/hero-carousel-3.jpg')", height:"450px"}}>
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1 className="text-light">Register</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 border border-black-700 p-4 m-5 mx-auto">
        <form
          action="forms/contact.php"
          method="post"
          className="php-email-form"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="row gy-4">
            <div className="col-md-12">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                required=""
                value={name}
                onChange={(e)=>{
                  setName(e.target.value)
                }}
              />
            </div>
            <div className="col-md-12">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Your Email"
                required=""
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
              />
            </div>
            <div className="col-md-12">
              <input
                type="number"
                className="form-control"
                name="contact"
                placeholder="contact"
                required=""
                minLength={10}
                maxLength={10}
                value={contact}
                onChange={(e)=>{
                  setContact(e.target.value)
                }}
              />
            </div>
            <div className="col-md-12">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Set password"
                required=""
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
              />
            </div>
            <div className="col-md-12">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Confirm password"
                required=""
                value={confirmPassword}
                onChange={(e)=>{
                  setConfirmPassword(e.target.value)
                }}
              />
            </div>
            <div className="col-md-12 ">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
              <button className="btn btn-dark" type="submit">Register Now</button>
            </div>
            <div className="col-md-12">
              Already Registered?<br/>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </form>
      </div>
    </main>  
    </>
  )
}