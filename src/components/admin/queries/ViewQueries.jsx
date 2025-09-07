import { collection, deleteDoc, doc, onSnapshot, query, updateDoc, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../Firebase"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"

export function ViewQueries(){
  const[queries,setQueries]=useState([])
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData=()=>{
    let q=query(collection(db,"contacts"));
    onSnapshot(q,(queriesCol)=>{
      let queriesData=queriesCol.docs.map((el)=>{
        return{...el.data(),id:el.id}
      })
      setQueries(queriesData)
    })
  }

  return(
    <>
    <div className="page-title" data-aos="fade" style={{background:"url('/assets/img/hero-carousel/hero-carousel-3.jpg')",height:"450px"}}>
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-2">
              <h1 className="text-light pt-5 mt-4">Manage Pg Owner</h1>
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
            <th>Name</th>
            <th>E-Mail</th>
            <th>Subject</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
        {queries?.length > 0 ? (
          queries.map((q,index)=>(
            <tr key={q.id || index}>
              <td>{index+1}</td>
              <td>{q.name}</td>
              <td>{q.email}</td>
              <td>{q.subject}</td>
              <td>{q.message}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colspan="7" className="text-center">
              No Queries found.
            </td>
          </tr>
        )  
        }
      </tbody>
      </table>
    </div>
    </>
  )
}