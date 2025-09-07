
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, Timestamp, updateDoc, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../Firebase"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { toast } from "react-toastify"

export function ViewBookings(){
  const[data,setData]=useState([])
  useEffect(()=>{
    fetchData()
  },[])

  const fetchData=()=>{
    const userId=sessionStorage.getItem("userId");
    console.log(userId);
    let q=query(collection(db,"bookings"),
    where("userId","==",userId))
    onSnapshot(q,(bookingCol)=>{
      let bookingData=bookingCol.docs.map((el)=>{
        return{...el.data(),id:el.id}
      })
      setData(bookingData)
    })
  }
   const handlePay=(id ,pgname,amt)=>{
        console.log(id,name);
        const options = {
            key: "rzp_test_REGDFtTH2ozd7r", 
            amount: amt *100 , 
            currency: "INR",
            name: "MapMyStay",
            description: "Test Transaction",
            handler: async function (response) {
                
            console.log("This is response", response);
            try{
              await updateDoc(doc(db,"bookings",id),{
                paymentStatus:true,
                PaymentId: response.razorpay_payment_id
              })
              const paymentData = {
                bookingId:id,
                pgname:pgname,
                status: true,
                PaymentId: response.razorpay_payment_id,
                createdAt:Timestamp.now()
              }

              await addDoc(collection(db, "payments"), paymentData);
              
              toast.success("Booking Successful");
            } catch(err){
              console.error(err);
              toast.error("Booking Unsuccessful");
            }

            },
            prefill: {
              name: "Aastha",
              email: "aastha@example.com",
              contact: "9868486942",
            },
            notes: {
              address: "Test Address",
            },
            theme: {
              color: "#3bcc33ff",
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
        return options
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
    <div className="container my-5">
      <table className="table table-bordered table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>S.NO.</th>
            <th>Pg Owner Name</th>
            <th>Pg Owner Email</th>
            <th>Pg Name</th>
            <th>Price</th>
            <th>Booking</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((el,index)=>(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{el?.pgOwnerName}</td>
              <td>{el?.pgEmail}</td>
              <td>{el?.pgname}</td>
              <td>{el?.price}</td>
              <td>
                <td>
                  {el.status ? (
                    <span className="btn btn-success  fs-6">Confirmed</span>
                  ) : (
                    <span className="btn btn-warning text-dark fs-6 ">Pending</span>
                  )}
                </td>
              </td>
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
                    <Link
                      className="btn btn-success"
                      onClick={() => handlePay(el.id, el.pgname, el.price)}
                    >
                      Book & Pay
                    </Link>
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