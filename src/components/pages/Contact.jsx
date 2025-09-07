import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useState } from "react"
import { toast } from "react-toastify"
import { db } from "../Firebase";
import { useNavigate } from "react-router-dom";
 
export function Contact(){
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [subject,setSubject]=useState("");
  const [message,setMessage]=useState("");

  const handleForm=async(e)=>{
    e.preventDefault()

  try{
    let data={
      name,
      email,
      subject,
      message,
      role:"user",
      createdAt:Timestamp.now()
    }

    await addDoc(collection(db,"contacts"),data)

    toast.success("Message sent successfully!")

    setName("")
    setEmail("")
    setSubject("")
    setMessage("")
  } catch(err){
    toast.error(err.message)
  }
} 

  return(
    <>
      <main className="main">
        {/* Page Title */}
        <div className="page-title" data-aos="fade" style={{background:"url('/assets/img/hero-carousel/hero-carousel-3.jpg')",height:"450px"}}>
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1 className="text-light" style={{marginTop:70}}>Contact</h1>
                </div>
              </div>
            </div>
          </div>
          <nav className="breadcrumbs">
            <div className="container">
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="current">Contact</li>
              </ol>
            </div>
          </nav>
        </div>
        {/* End Page Title */}
        {/* Contact Section */}
        <section id="contact" className="contact section">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="mb-4" data-aos="fade-up" data-aos-delay={200}>
              <iframe
                style={{ border: 0, width: "100%", height: 270 }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                frameBorder={0}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/* End Google Maps */}
            <div className="row gy-4">
              <div className="col-lg-4">
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <i className="bi bi-geo-alt flex-shrink-0" />
                  <div>
                    <h3>Address</h3>
                    <p>Sector 60 Market, Mohali, Punjab -160071</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <i className="bi bi-telephone flex-shrink-0" />
                  <div>
                    <h3>Call Us</h3>
                    <p>9978112233</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <i className="bi bi-envelope flex-shrink-0" />
                  <div>
                    <h3>Email Us</h3>
                    <p>mapmystay@gmail.com</p>
                  </div>
                </div>
                {/* End Info Item */}
              </div>
              <div className="col-lg-8">
                <form
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  onSubmit={handleForm}
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control" required
                        placeholder="Your Name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6 ">
                      <input
                        type="email"
                        className="form-control" required
                        name="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control" required
                        name="subject"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e)=>setSubject(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12">
                      <textarea
                        className="form-control" required
                        name="message"
                        rows={6}
                        placeholder="Message"
                        defaultValue={""}
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
              {/* End Contact Form */}
            </div>
          </div>
        </section>
        {/* /Contact Section */}
      </main>
      {/* Scroll Top */}
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </>
  )
}