import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../Firebase";

export function DashboardPgOwner(){
  useEffect(()=>{
    fetchData()
  },[])
  const [rooms,setRooms]=useState([])
  const [bookings,setBookings]=useState([])

  const fetchData=()=>{

    let roomsq=query(collection(db,"pgs"))
    onSnapshot(roomsq,(pgCol)=>{
      let pgData=pgCol.docs.map((el)=>{
        return{...el.data(),id:el.id}
      })
      setRooms(pgData)
    })

    let bookingsq=query(collection(db,"bookings"))
    onSnapshot(bookingsq,(bookingsCol)=>{
      let bookingsData=bookingsCol.docs.map((el)=>{
        return{...el.data(),id:el.id}
      })
      setBookings(bookingsData)
    })
  }
  return(
    <>
      <main className="main">
        {/* Page Title */}
        <div className="page-title" data-aos="fade" style={{background:"url('/assets/img/hero-carousel/hero-carousel-3.jpg')",height:"450px"}}>
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8 ">
                  <h1 className="text-light" style={{marginTop:60}}>Pg Owner</h1>
                </div>
              </div>
            </div>
          </div>
          <nav className="breadcrumbs">
            <div className="container">
              <ol>
                <li>
                  <Link to="/pgOwner" >Home</Link>
                </li>
                <li className="current">Pg Owner</li>
              </ol>
            </div>
          </nav>
        </div>
        {/* End Page Title */}

        <h1 className="mt-4 mb-4 text-center font-weight-bold ">Welcome Pg Owner!</h1>

        <section id="services" className="services section">
          <div className="container">
            <div className="row gy-4">

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="service-item position-relative">
                  <Link to="/pgOwner/pg/manage">
                    <div className="icon">
                     <i className="bi bi-bounding-box-circles" />
                    </div>
                    <h3>Total Rooms</h3>
                    <h2 className="display-4 text-secondary">{rooms.length>0?rooms.length:"0"}</h2>
                  </Link>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <div className="service-item position-relative">
                  <Link to="/pgOwner/bookingsOwner/manage" >
                   <div className="icon">
                    <i className="bi bi-calendar4-week" />
                   </div>
                    <h3>Total Bookings</h3>
                    <h2 className="display-4 text-secondary">{bookings.length>0?bookings.length:"0"}</h2>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
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