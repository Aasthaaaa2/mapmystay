import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { auth, db } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore"

export function RegisterPgOwner(){
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[contact,setContact]=useState()
  const[password,setPassword]=useState("")
  const[address,setAddress]=useState()
  const[city,setCity]=useState("")

  const handleForm=(e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCred)=>{
      toast.success("registered successfully")
      saveData(userCred.user.uid)
      
    })
    .catch((err)=>{
      toast.error(err.message)
    })
  }

  const nav=useNavigate()
  const saveData=async(userId)=>{
    let data={
      name,
      email,
      password,
      contact,
      userType:2,
      status:true,
      createAt:Timestamp.now()
    }
    await setDoc(doc(db,"users",userId),data)
    nav("/login")
  }
  return(
    <>
    <main className="main">
      {/* Page Title */}
      <div className="page-title" data-aos="fade" style={{background:"url('/assets/img/hero-carousel/hero-carousel-3.jpg')", height:"450px"}}>
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1 className="text-light pt-5 mt-4">Register</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 border border-black-700 p-4 m-5 mx-auto shadow-lg rounded-4 bg-white">
        <form
          action="forms/contact.php"
          method="post"
          className="php-email-form"
          data-aos="fade-up"
          data-aos-delay={200}
          onSubmit={handleForm}
        >
          <div className="row gy-4">
            <div className="col-md-12">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
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
                placeholder="Email"
                required=""
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
              />
            </div>
            <div className="col-md-12">
              <input
                type="text"
                className="form-control"
                name="contact"
                placeholder="Contact"
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
                type="text"
                className="form-control"
                name="address"
                placeholder="Address"
                required=""
                value={address}
                onChange={(e)=>{
                  setAddress(e.target.value)
                }}
              />
            </div>
             {/* <div className="col-md-12">
              <select
                className="form-control"
                name="city"
                required=""
                value={city}
                onChange={(e)=>{
                  setCity(e.target.value)
                }}>
                  <option value="">--Select City--</option>
                  <option value="jalandhar">Jalandhar</option>
                  <option value="mohali">Mohali</option>
                  <option value="ludhiana">Ludhiana</option>
                  <option value="hoshiarpur">Hoshiarpur</option>
                  <option value="phagwara">Phagwara</option>
                </select>
            </div> */}
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