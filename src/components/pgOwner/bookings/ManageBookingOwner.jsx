
import { collection, deleteDoc, doc, onSnapshot, query, updateDoc, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../Firebase"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { toast } from "react-toastify"

export function ManageBookingOwner(){
  const[data,setData]=useState([])
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData=()=>{
    const ownerId=sessionStorage.getItem("userId");

    console.log(ownerId);
    let q=query(collection(db,"bookings"),
    where("pgownerId","==",ownerId))
    onSnapshot(q,(bookingCol)=>{
      let bookingData=bookingCol.docs.map((el)=>{
        return{...el.data(),id:el.id}
      })
      setData(bookingData)
    })
  }

 const changeStatus=async(paymentId,status)=>{
     Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Change"
       }).then((result) => {
         if (result.isConfirmed) {
            updateDoc(doc(db,"bookings",paymentId),{status:!status})
            .then(()=>{
                Swal.fire({
                  title: "Changed!",
                  text:  "The status has been Changed.",
                  icon: "success"
                });
            })
            .catch((err)=>{
               toast.error(err.message)
            })
         }
       });
   }
  return(
    <>
    <div className="page-title" data-aos="fade" style={{background:"url('/assets/img/hero-carousel/hero-carousel-3.jpg')",height:"450px"}}>
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-2">
              <h1 className="text-light pt-5 mt-4">Manage Bookings</h1>
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
            <th>Pg Name</th>
            <th>Price</th>
            <th>Actions</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((el,index)=>(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{el?.userName}</td>
              <td>{el?.userEmail}</td>
              <td>{el?.pgname}</td>
              <td>&#8377;{el?.price}</td>
              <td>
                <Link
                  className={`btn ${el.status ? "btn-success" : "btn-danger"}`}
                  onClick={() => changeStatus(el.id, el?.status)}
                >
                  {el.status ? "Confirmed" : "Pending"}
                </Link>
              </td>
              <td>
                <td>
                  {el.paymentStatus ? (
                    <span className="btn btn-success fs-6">Completed</span>
                  ) : (
                    <span className="btn btn-danger text-light fs-6 ">Pending</span>
                  )}
                </td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}