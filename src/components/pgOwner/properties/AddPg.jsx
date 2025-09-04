import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { addDoc, Timestamp,collection, getDocs } from "firebase/firestore"
import { db } from "../../Firebase"

export function AddPg(){
  const[title,setTitle]=useState("");
  const[imageName,setImageName]=useState("")
  const[size,setSize]=useState()
  const[image,setImage]=useState({})
  const[meals,setMeals]=useState("")
  const[balcony,setBalcony]=useState("")
  const[price,setPrice]=useState()
  const[type,setType]=useState("")
  const[city,setCity]=useState("")
  const[cities,setCities]=useState([])

  useEffect(()=>{
    const fetchCities=async()=>{
      const snapshot=await getDocs(collection(db,"cities"));
      setCities(snapshot.docs.map(doc=>({id:doc.id,...doc.data()})))
    }
    fetchCities();
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
        cityId:city,
        pgOwnerId:sessionStorage.getItem("userId"),
        pgName:sessionStorage.getItem("name"),
        pgEmail:sessionStorage.getItem("email"),
        status:true,
        createdAt:Timestamp.now()
      }

      await addDoc(collection(db,"pgs"),data)
      toast.success("City added successfully!")

      setTitle("")
      setSize()
      setImage({})
      setImageName("")
      setMeals("")
      setBalcony("")
      setPrice("")
      setType("")
      setCity("")
    }
    catch(err){
      toast.error(err.message)
    }
  }
  return(
    <>
    <main className="main">
          {/* Page Title */}
          <div className="page-title" data-aos="fade" style={{background:"url('/assets/img/properties/property-1.jpg')",height:"450px"}}>
            <div className="heading">
              <div className="container">
                <div className="row d-flex justify-content-center text-center">
                  <div className="col-lg-2">
                    <h1 className="text-dark pt-5 mt-4">Add Pg</h1>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 border border-black-700 p-2 m-5 mx-auto shadow-lg rounded-4 bg-white">
              <form
                action="forms/contact.php"
                method="post"
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay={200}
                onSubmit={handleForm}
              >
                <div className="row gy-4">
                  <div className="col-11 mt-5 mx-auto">
                    <select className="form-control" required 
                    value={city}
                    onChange={(e)=>setCity(e.target.value)}>
                      <option disabled value="">Select City</option>
                      {cities.map(c=>(
                        <option key={c.id} value={c.id}>{c.cityName}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-11 mt-5 mx-auto">
                    <input
                      type="text"
                      className="form-control" required
                      name="title"
                      placeholder="Title"
                      value={title}
                      onChange={(e)=>{
                        setTitle(e.target.value)
                      }}
                    />
                  </div>
                  <div className="col-11 mt-5 mx-auto">
                    <input
                      type="number"
                      className="form-control" required
                      name="size"
                      placeholder="Size"
                      value={size}
                      onChange={(e)=>{
                        setSize(e.target.value)
                      }}
                    />
                  </div>
                  <div className="col-11 mt-5 mx-auto">
                    <select
                      className="form-control" required
                      name=""
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
                  <div className="col-11 mt-5 mx-auto">
                    <select
                      className="form-control" required
                      name=""
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
                  <div className="col-11 mt-5 mx-auto">
                    <select
                      className="form-control" required
                      name=""
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
                  <div className="col-11 mt-5 mx-auto">
                    <input
                      type="number"
                      className="form-control" required
                      name="price"
                      placeholder="Price"
                      value={price}
                      onChange={(e)=>{
                        setPrice(e.target.value)
                      }}
                    />
                  </div>
                      <div className="col-11 mt-5 mx-auto">
                    <input
                      type="file"
                      className="form-control" required
                      name="image"
                      placeholder="Image"
                      value={imageName}
                      onChange={(e)=>{
                        setImageName(e.target.value)
                        setImage(e.target.files[0])
                      }}
                    />
                  </div>
                  <div className="d-flex justify-content-center mt-3">
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