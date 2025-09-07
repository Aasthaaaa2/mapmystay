import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../Firebase";

export function DashboardAdmin(){
  useEffect(()=>{
    fetchData()
  },[])
  const [cities,setCities]=useState([])
  const [pgOwners,setPgOwners]=useState([])
  const [users,setUsers]=useState([])
  const [rooms,setRooms]=useState([])
  const [bookings,setBookings]=useState([])
  const [queries,setQueries]=useState([])

  const fetchData=()=>{
    let q=query(collection(db,"cities"))
    onSnapshot(q,(citiesCol)=>{
      let citiesData=citiesCol.docs.map((el)=>{
        return{...el.data(),id:el.id}
      })
      setCities(citiesData)
    })

    let pgOwnerq=query(collection(db,"users"),where("userType","==",2))
    onSnapshot(pgOwnerq,(pgOwnerCol)=>{
      let pgOwnerData=pgOwnerCol.docs.map((el)=>{
        return{...el.data(),id:el.id}
      })
      setPgOwners(pgOwnerData)
    })

    let usersq=query(collection(db,"users"),where("userType","==",3))
    onSnapshot(usersq,(usersCol)=>{
      let usersData=usersCol.docs.map((el)=>{
        return{...el.data(),id:el.id}
      })
      setUsers(usersData)
    })

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

    let queriesq=query(collection(db,"contacts"))
    onSnapshot(queriesq,(queriesCol)=>{
      let queriesData=queriesCol.docs.map((el)=>{
        return{...el.data(),id:el.id}
      })
      setQueries(queriesData)
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
                <div className="col-lg-8">
                  <h1 className="text-light" style={{marginTop:60}}>Admin</h1>
                </div>
              </div>
            </div>
          </div>
          <nav className="breadcrumbs">
            <div className="container">
              <ol>
                <li>
                  <Link to="/admin" >Home</Link>
                </li>
                <li className="current">Admin</li>
              </ol>
            </div>
          </nav>
        </div>
        {/* End Page Title */}

        <h1 className="mt-4 mb-4 text-center font-weight-bold ">Welcome Admin!</h1>

        <section id="services" className="services section">
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="service-item  position-relative">
                  <Link to="/admin/users/manage">
                    <div className="icon">
                      <i className="bi bi-activity" />
                    </div>
                    <h3>Total Users</h3>
                     <h2 className="display-4 text-secondary"> {users.length>0?users.length:"0"}</h2>
                  </Link>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="service-item position-relative">
                  <Link to="/admin/pgOwner/manage">
                    <div className="icon">
                      <i className="bi bi-broadcast" />
                    </div>
                    <h3>Total Pg Owners</h3>
                    <h2 className="display-4 text-secondary">{pgOwners.length>0?pgOwners.length:"0"}</h2>
                  </Link>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="service-item position-relative">
                  <Link to="/admin/city/manage" >
                    <div className="icon">
                      <i className="bi bi-easel" />
                    </div>
                    <h3>Total Cities</h3>
                    <h2 className="display-4 text-secondary">{cities.length>0?cities.length:"0"}</h2>
                  </Link>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="service-item position-relative">
                  <Link to="/admin/pgRooms/view" >
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
                  <Link to="/admin/bookings/manage" >
                    <div className="icon">
                      <i className="bi bi-calendar4-week" />
                    </div>
                    <h3>Total Bookings</h3>
                    <h2 className="display-4 text-secondary">{bookings.length>0?bookings.length:"0"}</h2>
                  </Link>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                <div className="service-item position-relative">
                  <Link to="/admin/queries" >
                    <div className="icon">
                      <i className="bi bi-chat-square-text" />
                    </div>
                    <h3>Total Queries</h3>
                    <h2 className="display-4 text-secondary">{queries.length>0?queries.length:"0"}</h2>
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