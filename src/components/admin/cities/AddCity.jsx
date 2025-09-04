import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { addDoc, Timestamp,collection } from "firebase/firestore"
import { db } from "../../Firebase"

export function AddCity(){
  const[cityName,setCityName]=useState("");
  const[imageName,setImageName]=useState("")
  const[image,setImage]=useState({})

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
        cityName,
        imageUrl,
        status:true,
        createdAt:Timestamp.now()
      }

      await addDoc(collection(db,"cities"),data)
      toast.success("City added successfully!")
      setCityName("")
      setImage({})
      setImageName("")
    }
    catch(err){
      toast.error(err.message)
    }
  }
  return(
    <>
    <main className="main">
          {/* Page Title */}
          <div className="page-title" data-aos="fade" style={{background:"url('/assets/img/hero-carousel/hero-carousel-1.jpg')",height:"450px"}}>
            <div className="heading">
              <div className="container" style={{boxShadow:"0px 0px 10px gray"}}>
                <div className="row d-flex justify-content-center text-center">
                  <div className="col-lg-2">
                    <h1 className="text-dark pt-5 mt-4"  >Add City</h1>
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
                  <div className="col-11 mt-5 ms-2">
                    <input
                      type="text"
                      className="form-control" required
                      name="cityName"
                      placeholder="City Name"
                      value={cityName}
                      onChange={(e)=>{
                        setCityName(e.target.value)
                      }}
                    />
                  </div>
                  <div className="col-11 mt-5 ms-2">
                    <input
                      type="file"
                      className="form-control" required
                      name="text"
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