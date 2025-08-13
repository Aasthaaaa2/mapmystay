import { collection, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../Firebase"
import { Link } from "react-router-dom"

export function ManagePg(){
  const[data,setData]=useState([])
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData=()=>{
    let q=query(collection(db,"pgs"))
    onSnapshot(q,(pgCol)=>{
      let pgData=pgCol.docs.map((el)=>{
        return{...el.data(),id:el.id}
      })
      setData(pgData)
    })
  }
  return(
    <>
    <div className="page-title" data-aos="fade" style={{background:"url('/assets/img/hero-carousel/hero-carousel-1.jpg')",height:"450px"}}>
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-2">
              <h1 className="text-dark pt-5 mt-4">Manage Pgs</h1>
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
            <th>Title</th>
            <th>Size</th>
            <th>Title</th>
            <th>Balcony</th>
            <th>Type</th>
            <th>Meals</th>
            <th>Price</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((el,index)=>(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{el?.title}</td>
              <td>{el?.size}</td>
              <td>{el?.title}</td>
              <td>{el?.balcony}</td>
              <td>{el?.type}</td>
              <td>{el?.meals}</td>
              <td>{el?.price}</td>
              <td>
                <img src={el?.imageUrl} style={{height:"100px", width:"100px"}}/>
              </td>
              <td>
                <Link className="btn btn-success" to={"/pgOwner/pg/update/"+el.id}>Edit</Link>
                <Link className="btn btn-danger" onClick={()=>deletePg(el.id)}>Delete</Link>
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