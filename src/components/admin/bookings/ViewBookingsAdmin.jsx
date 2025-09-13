
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, Timestamp, updateDoc, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../Firebase"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { toast } from "react-toastify"

export function ViewBookingsAdmin(){
  const[data,setData]=useState([])
  useEffect(()=>{
    fetchData()
  },[])

  const fetchData=()=>{
    let q=query(collection(db,"bookings"))
    onSnapshot(q,(bookingCol)=>{
      let bookingData=bookingCol.docs.map((el)=>{
        return{...el.data(),id:el.id}
      })
      setData(bookingData)
    })
  }

  return(
    <>
    <div className="page-title" data-aos="fade" style={{background:"url('/assets/img/hero-carousel/hero-carousel-3.jpg')",height:"450px"}}>
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-2">
              <h1 className="text-light pt-5 mt-4">View Bookings</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container my-5 table-responsive">
      <table className="table table-bordered table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>S.NO.</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Pg Owner Name</th>
            <th>Pg Owner Email</th>
            <th>Pg Name</th>
            <th>Price</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((el,index)=>(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{el?.userName}</td>
              <td>{el?.userEmail}</td>
              <td>{el?.pgOwnerName}</td>
              <td>{el?.pgEmail}</td>
              <td>{el?.pgname}</td>
              <td>&#8377;{el?.price}</td>
              <td>
                  {el?.status === false ? (
                    <span className="btn btn-warning text-dark fs-6">
                      Confirmation Pending
                    </span>
                  ) : el?.paymentStatus ? (
                    <span className="btn btn-success fs-6">
                      Payment Completed
                    </span>
                  ) : (
                    <span className="btn btn-success fs-6">
                      Payment Pending
                    </span>
                  )}
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}