import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, query, Timestamp, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { db } from "../../Firebase";
import { toast } from "react-toastify";

export function RoomsDetails(){
  const nav=useNavigate()
  const {pgId} =useParams();
  const [pg,setPg]=useState();
  
  const handleBookingRequest = async (pgOwnerName,pgOwnerId,pgEmail,title,price,type) => {
  const userId=sessionStorage.getItem("userId")
  const userName=sessionStorage.getItem("name")
  const userEmail=sessionStorage.getItem("email")

  if(!userId || !userName || !userEmail){
    toast.error("Please Login first to Request Booking");
    nav("/login")
    return
  }

  const q=query(collection(db,"bookings"),where("userId","==",userId),where("pgname","==",title))

  const snap=await getDocs(q)

  if(!snap.empty){
    toast.info("You have already requested for this PG")
    return
  }

  const data = {
    userId,
    userName,
    userEmail,
    pgOwnerName:pgOwnerName,
    pgownerId:pgOwnerId,
    pgname:title,
    pgEmail:pgEmail,
    type:type,
    price,
    status: false,
    paymentStatus:false,
    createdAt: Timestamp.now()
  };

  console.log(data)
  try {
    await addDoc(collection(db, "bookings"), data);
    toast.success("Booking request sent ");
  } catch (err) {
    toast.error("Failed to send booking request ");
    console.log(err);
  }
};

  useEffect(()=>{
    const fetchPg=async()=>{
      const docRef=doc(db,"pgs",pgId);
      const docSnap=await getDoc(docRef);
      if(docSnap.exists()){
        setPg({...docSnap.data(),id:docSnap.id})
      }
    }
    fetchPg()
  },[pgId])

  if(!pg) return <p className="text-center mt-4">Loading Pg Details...</p>

  return(
    <>
      <main className="main">
        {/* Page Title */}
        <div className="page-title" data-aos="fade" style={{background:"url('/assets/img/hero-carousel/hero-carousel-3.jpg')",height:"450px"}}>
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1 className="text-light mt-5 pt-4">Room Details</h1>
                </div>
              </div>
            </div>
          </div>
          <nav className="breadcrumbs">
            <div className="container">
              <ol>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="current">Room Details</li>
              </ol>
            </div>
          </nav>
        </div>
        {/* End Page Title */}
        {/* Real Estate Section */}
        <section id="real-estate" className="real-estate section">
          <div className="container">
              <div className="row mb-5" data-aos="fade-up" data-aos-delay={100}>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <img src={pg?.imageUrl}
                  alt={pg?.title}
                  className="img-fluid rounded shadow"
                  style={{maxHeight: "400px",objectFit:"cover"}}
                  />
                </div>
                <div className="col-md-6">
                  <h2 className="mb-3">{pg?.title}</h2>

                  <ul className="list-group list-group-flush mb-3">
                  <li className="list-group-item">
                    <b>Balcony:</b> {pg?.balcony}
                  </li>
                  <li className="list-group-item">
                    <b>Meals:</b> {pg?.meals}
                  </li>
                  <li className="list-group-item">
                    <b>Size:</b> {pg?.size}
                  </li>
                  <li className="list-group-item">
                    <b>Type:</b> {pg?.type}
                  </li>
                  <li className="list-group-item">
                    <b>Price:</b> ₹{pg?.price}
                  </li>
                </ul>
                <button className="btn btn-success btn-lg" onClick={()=>{
                  handleBookingRequest(pg?.pgOwnerName,pg?.pgOwnerId,pg?.pgEmail,pg?.title,pg?.price,pg?.type)
                }}>
                  Request Booking
                </button>
                </div>
              </div>
          </div>
        </section>
        {/* /Real Estate Section */}
      </main>
      {/* Scroll Top */}

      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </>
  )
}