import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth, db } from "../Firebase";
import { doc,getDoc,setDoc,Timestamp } from "firebase/firestore";

export function Login(){
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("");
  let nav=useNavigate()
  const handleForm=(e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth,email,password)
    .then((userCred)=>{
      getUserData(userCred.user.uid)
    })
    .catch((err)=>{
      toast.error(err.message)
    })
  }

  const getUserData=async(userId)=>{
    let userDoc=await getDoc(doc(db,"users",userId))
    let userData=userDoc.data()
    if(userData?.status == true){
      sessionStorage.setItem("isLogin",true)
      sessionStorage.setItem("name",userData?.name)
      sessionStorage.setItem("email",userData?.email)
      sessionStorage.setItem("contact",userData?.contact)
      sessionStorage.setItem("userType",userData?.userType)
      sessionStorage.setItem("userId",userId)
      toast.success("Login successfully");
      if(userData?.userType==1){
        nav("/admin")
      } else if(userData?.userType==2){
        nav("/pgOwner")
      } else {
        nav("/")
      }
    } else{
      toast.error("Account is Blocked")
    }
  }
  const googleSignUp=()=>{
    let provider=new GoogleAuthProvider()
    signInWithPopup(auth,provider)
    .then((userCred)=>{
      saveData(userCred.user.uid,userCred)
    })
    .catch((err)=>{
      toast.error(err.message);
    })
  }

  const saveData=async(userId,userCred)=>{
    let data={
      name:userCred.user.displayName,
      email:userCred.user.email,
      contact:userCred.user.phoneNumber,
      provider:"google",
      userType:3,
      status:true,
      createdAt:Timestamp.now()
    }
    await setDoc(doc(db,"users",userId),data)
    getUserData(userId)
  }
    return(
      <>
        <main className="main">
          {/* Page Title */}
          <div className="page-title" data-aos="fade" style={{background:"url('/assets/img/hero-carousel/hero-carousel-3.jpg')",height:"450px"}}>
            <div className="heading">
              <div className="container">
                <div className="row d-flex justify-content-center text-center">
                  <div className="col-lg-2">
                    <h1 className="text-light pt-5 mt-4" >Login</h1>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="container">
            <div className="row">
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
                      placeholder="Email"
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
                      placeholder="Password"
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
                </div>
              </form>
              <button onClick={googleSignUp} className="btn btn-danger my-2 ms-2"><i className="fab fa-google"></i>&nbsp;SIGN IN WITH GOOGLE</button>
              <div className="col-md-12 mx-2">
                  Don't have the account?<br/>
                  <Link to="/register">Register</Link>
                </div>
            </div>
            </div>
          </div>
        </main>   
    </>
  )
}