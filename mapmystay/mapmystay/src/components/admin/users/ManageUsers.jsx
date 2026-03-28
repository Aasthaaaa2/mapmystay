import { collection, deleteDoc, doc, onSnapshot, query, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../Firebase"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"

export function ManageUsers(){
  const[data,setData]=useState([])
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData=()=>{
    let q=query(collection(db,"users"))
    onSnapshot(q,(usersCol)=>{
      let usersData=usersCol.docs.map((el)=>{
        return{...el.data(),id:el.id}
      })
      setData(usersData)
    })
  }

  const changeStatus=async(userId,status)=>{
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
          // delete code 
           updateDoc(doc(db,"users",userId),{status:!status})
           .then(()=>{
               Swal.fire({
                 title: "Changed!",
                 text: "The status has been changed.",
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
              <h1 className="text-light pt-5 mt-4">Manage Users</h1>
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
            <th>Name</th>
            <th>E-Mail</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {data
          .filter((el) => el?.userType === 3)
          .map((el, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{el?.name}</td>
              <td>{el?.email}</td>
              <td>{el?.contact}</td>
              <td>
                <Link className={`btn ${el?.status ? "btn-success" : "btn-danger" }`} onClick={()=>{changeStatus(el.id,el?.status)}}>{el.status?"Active":"Inactive"}</Link>
              </td>
            </tr>
          ))}
      </tbody>
      </table>
    </div>
    </>
  )
}