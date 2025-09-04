import { collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../Firebase";
import Swal from "sweetalert2";

export function ViewRooms(){
  const [data,setData]=useState([])
  const [cities,setCities]=useState({})

  useEffect(()=>{
    fetchData()
    fetchCities()
  },[])
  
  const fetchData=()=>{
    let q=query(collection(db,"pgs"))
    onSnapshot(q,(cityCol)=>{
      let pgData=cityCol.docs.map((el)=>{
        return{...el.data(),id:el.id};
      })
      setData(pgData)
    })
  }
  const fetchCities=()=>{
    let q=query(collection(db,"cities"));
    onSnapshot(q,(cityCol)=>{
      let cityMap={};
      cityCol.docs.forEach((el)=>{
        cityMap[el.id]=el.data().cityName;
      })
      setCities(cityMap)
    })
  }

  const deleteRoom=async(roomId)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "This room will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteDoc(doc(db, "pgs", roomId))
          .then(() => {
            Swal.fire("Deleted!", "Room has been deleted.", "success");
          })
          .catch((err) => {
            Swal.fire("Error", err.message, "error");
          });
      }
    });
  }

  return(
    <>
      <main className="main">
        {/* Page Title */}
        <div className="page-title" data-aos="fade" style={{background:"url('/assets/img/hero-carousel/hero-carousel-1.jpg')",height:"450px"}}>
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1 className="text-dark mt-5 pt-4">View Rooms</h1>
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
                <li className="current">View Pgs</li>
              </ol>
            </div>
          </nav>
        </div>
        {/* End Page Title */}
        {/* Real Estate Section */}
        <section id="real-estate" className="real-estate section">
          <div className="container">
            <div className="row">
            {data?.map((el,index)=>(
              <div
                className="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100}
              >
              <div className="card">
                <img
                  src={el?.imageUrl}
                  alt=""
                  className="img-fluid"
                />
              <div className="card-body">
                <h3 className="text-light">
                    {el?.title}
                </h3>  
                <div className="card-content d-flex flex-column justify-content-center text-center">
                      <div className="row propery-info">
                        <div className="col">City</div>
                        <div className="col">Balcony</div>
                        <div className="col">Meals</div>
                        <div className="col">Size</div>
                        <div className="col">Type</div>
                        <div className="col">Price</div>
                      </div>
                      <div className="row">
                        <div className="col">
                          {cities[el?.cityId]}
                        </div>  
                        <div className="col">{el?.balcony}</div>
                        <div className="col">{el?.meals}</div>
                        <div className="col">{el?.size}</div>
                        <div className="col">{el?.type}</div>
                        <div className="col">{el?.price}</div>
                      </div>
                </div>
              </div>
             </div>
             
             <div className="d-flex justify-content-center mt-3">
                <button className="btn btn-danger" onClick={()=>deleteRoom(el.id)}>Delete</button>
             </div>
            </div>
            ))}
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