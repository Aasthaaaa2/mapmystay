import { collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../Firebase"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"

export function ManageCity(){
  const[data,setData]=useState([])
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData=()=>{
    let q=query(collection(db,"cities"))
    onSnapshot(q,(cityCol)=>{
      let cityData=cityCol.docs.map((el)=>{
        return{...el.data(),id:el.id}
      })
      setData(cityData)
    })
  }

  const deleteCity=async(cityId)=>{
      Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // delete code 
         deleteDoc(doc(db,"cities",cityId))
         .then(()=>{
             Swal.fire({
               title: "Deleted!",
               text: "Your file has been deleted.",
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
    <div className="page-title" data-aos="fade" style={{background:"url('/assets/img/hero-carousel/hero-carousel-1.jpg')",height:"450px"}}>
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-2">
              <h1 className="text-dark pt-5 mt-4">Manage City</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container my-5">
      <table className="table table-bordered table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>S.NO.</th>
            <th>City Name</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((el,index)=>(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{el?.cityName}</td>
              <td>
                <img src={el?.imageUrl} style={{height:"100px", width:"100px"}}/>
              </td>
              <td>
                <Link className="btn btn-success" to={"/admin/city/update/"+el?.id}>Edit</Link>
                <Link className="btn btn-danger" onClick={()=>{deleteCity(el.id)}}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <select>
        <option>Choose city</option>
        {data?.map((el,index)=>(
            <option value={el.id}>{el.cityName}</option>
        ))}
      </select> */}
    </div>
    </>
  )
}