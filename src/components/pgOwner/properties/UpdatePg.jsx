import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { addDoc, Timestamp,collection, getDoc, doc } from "firebase/firestore"
import { db } from "../../Firebase"
import { useParams } from "react-router-dom"

export function UpdatePg(){
  const[title,setTitle]=useState("");
  const[imageName,setImageName]=useState("")
  const[size,setSize]=useState()
  const[image,setImage]=useState({})
  const[meals,setMeals]=useState("")
  const[balcony,setBalcony]=useState("")
  const[price,setPrice]=useState()
  const[type,setType]=useState("")
  const[previousImage,setPreviousImage]=useState("")

  var{id}=useParams()
  console.log("Params is:",id);

  const fetchData=async()=>{
      let pgDoc=await getDoc(doc(db,"pgs",id))
      let pgData=pgDoc.data()
      setTitle(pgData.title)
      setPreviousImage(pgData.imageUrl)
    }
    useEffect(()=>{
      fetchData()
    },[])

  const handleForm=async (e)=>{
    e.preventDefault()
    let formData=new FormData()
    formData.append("file",image)
    formData.append("upload_preset","CitiesImage")
    try{
      const response=await axios.post(`https://api.cloudinary.com/v1_1/dpbalpopi/image/upload`,formData);
      saveData(response.data.secure_url);
    }
    catch(err){
      toast.error(err.message)
    }
  }

  const saveData=async (imageUrl)=>{
    try{
      let data={
        title,
        size,
        imageUrl,
        meals,
        balcony,
        price,
        type,
        pgOwnerId:sessionStorage.getItem("userId"),
        pgOwnerName:sessionStorage.getItem("name"),
        pgEmail:sessionStorage.getItem("email"),
        status:true,
        createdAt:Timestamp.now()
      }

      await addDoc(collection(db,"pgs"),data)
      toast.success("Pg added successfully!")
      setTitle("")
      setSize()
      setImage({})
      setImageName("")
      setMeals("")
      setBalcony("")
      setPrice("")
      setPrice("")
    }
    catch(err){
      toast.error(err.message)
    }
  }
  return(
    <>
    <main className="main">
          {/* Page Title */}
          <div className="page-title" data-aos="fade" style={{background:"url('/assets/img/hero-carousel/hero-carousel-2.jpg')",height:"450px"}}>
            <div className="heading">
              <div className="container" style={{boxShadow:"0px 0px 10px gray"}}>
                <div className="row d-flex justify-content-center text-center">
                  <div className="col-lg-2">
                    <h1 className="text-dark pt-5 mt-4">Update Pg</h1>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 border border-black-700 p-2 m-5 mx-auto">
              <img src={previousImage} height={"100px"} alt="pgImage"/>
              <form
                action="forms/contact.php"
                method="post"
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay={200}
                onSubmit={handleForm}
              >
                <div className="row gy-4">
                  <div className="col-md-6 mt-5 ms-2">
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      placeholder="Title"
                      required=""
                      value={title}
                      onChange={(e)=>{
                        setTitle(e.target.value)
                      }}
                    />
                  </div>
                  <div className="col-md-6 mt-5 ms-2">
                    <input
                      type="number"
                      className="form-control"
                      name="size"
                      placeholder="Size"
                      required=""
                      value={size}
                      onChange={(e)=>{
                        setSize(e.target.value)
                      }}
                    />
                  </div>
                  <div className="col-md-6 mt-5 ms-2">
                    <select
                      className="form-control"
                      name=""
                      required=""
                      value={meals}
                      onChange={(e)=>{
                        setMeals(e.target.value)
                      }}
                    >
                      <option selected disabled value={""}>Meal</option>
                      <option>None</option>
                      <option>Breakfast</option>
                      <option>All Meals</option>
                    </select>
                  </div>
                  <div className="col-md-6 mt-5 ms-2">
                    <select
                      className="form-control"
                      name=""
                      required=""
                      value={balcony}
                      onChange={(e)=>{
                        setBalcony(e.target.value)
                      }}
                    >
                      <option selected disabled value={""}>Balcony</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                  <div className="col-md-6 mt-5 ms-2">
                    <select
                      className="form-control"
                      name=""
                      required=""
                      value={type}
                      onChange={(e)=>{
                        setType(e.target.value)
                      }}
                    >
                      <option selected disabled value={""}>Gender</option>
                      <option>Girl</option>
                      <option>Boy</option>
                    </select>
                  </div>
                  <div className="col-md-6 mt-5 ms-2">
                    <input
                      type="number"
                      className="form-control"
                      name="price"
                      placeholder="Price"
                      required=""
                      value={price}
                      onChange={(e)=>{
                        setPrice(e.target.value)
                      }}
                    />
                  </div>
                      <div className="col-md-6 mt-5 ms-2">
                    <input
                      type="file"
                      className="form-control"
                      name="image"
                      placeholder="Image"
                      required=""
                      value={imageName}
                      onChange={(e)=>{
                        setImageName(e.target.value)
                        setImage(e.target.files[0])
                      }}
                    />
                  </div>
                  <div className="col-md-12 mx-2">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                    <button className="btn btn-dark" type="submit">SUBMIT</button>
                  </div>
                </div>
              </form>
            </div>
            </div>
          </div>
        </main>   
    </>
  )
}