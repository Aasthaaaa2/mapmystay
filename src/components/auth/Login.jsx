import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

export function Login(){
  const[email,setEmail]=useState("example@gmail.com")
  const[password,setPassword]=useState("");
  let nav=useNavigate()
  const handleForm=(e)=>{
    e.preventDefault()
    if(email=="aastha@gmail.com" && password=="2025"){
      toast.success("Form submitted successfully")
      nav("/")
    } else{
      toast.error("Invalid credentials")
    }
  }
    return(
      <>
        <main className="main">
          {/* Page Title */}
          <div className="page-title" data-aos="fade">
            <div className="heading">
              <div className="container">
                <div className="row d-flex justify-content-center text-center">
                  <div className="col-lg-2">
                    <h1>Login</h1>
                  </div>
                </div>
              </div>
            </div>
            <nav className="breadcrumbs">
              <div className="container">
                <ol>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li className="current">Login</li>
                </ol>
              </div>
            </nav>
          </div>
            <div className="col-lg-6 border border-black-700 p-2 m-5 mx-auto">
              <form
                action="forms/contact.php"
                method="post"
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay={200}
                onSubmit={handleForm}
              >
                <div className="row gy-4">
                  <div className="col-md-6 mt-5 ms-2">
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
                  <div className="col-md-6 mt-5 ms-2">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Enter Password"
                      required=""
                      value={password}
                      onChange={(e)=>{
                        setPassword(e.target.value)
                      }}
                    />
                  </div>
                  <div className="col-md-12 mx-2">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                    <button className="btn btn-dark" type="submit">LOGIN</button>
                  </div>
                  <div className="col-md-12 mx-2">
                    Don't have the account?<br/>
                    <Link to="/register">Register</Link>
                  </div>
                </div>
              </form>
            </div>
        </main>   
    </>
  )
}