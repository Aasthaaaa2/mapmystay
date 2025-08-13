import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../Firebase";

export function ViewPg(){
  useEffect(()=>{
    fetchData()
  },[])
  const [data,setData]=useState()
  const fetchData=()=>{
    let q=query(collection(db,"pgs"))
    onSnapshot(q,(cityCol)=>{
      let pgData=cityCol.docs.map((el)=>{
        return{...el.data(),id:el.id};
      })
      setData(pgData)
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
                  <h1 className="text-light mt-5 pt-4">View Pgs</h1>
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
                <h3>
                  <a href="property-single.html" className="stretched-link">
                    {el?.title}
                  </a>
                </h3>  
                <div className="card-content d-flex flex-column justify-content-center text-center">
                      <div className="row propery-info">
                        <div className="col">Balcony</div>
                        <div className="col">Meals</div>
                        <div className="col">Size</div>
                        <div className="col">Type</div>
                        <div className="col">Price</div>
                      </div>
                      <div className="row">
                        <div className="col">{el?.balcony}</div>
                        <div className="col">{el?.meals}</div>
                        <div className="col">{el?.size}</div>
                        <div className="col">{el?.type}</div>
                        <div className="col">{el?.price}</div>
                      </div>
                    </div>
              </div>
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