import { Link, useNavigate } from "react-router-dom";

export function Footer(){
  const nav=useNavigate()
  const handleClick=()=>{
    const userType=sessionStorage.getItem("userType");

    if (userType === "1") {
      nav("/admin/about");
    } else if (userType === "2") {
      nav("/pgOwner/about"); 
    } else {
      nav("/about"); 
    }

  }
  return(
    <>
        <footer id="footer" className="footer light-background mt-5 pt-5">
        <div className="container">
          <div className="row gy-3">
            <div className="col-lg-3 col-md-6 d-flex">
              <i className="bi bi-geo-alt icon" />
              <div className="address">
                <h4>Address</h4>
                <p>Sector 60 Market</p>
                <p>Mohali, Punjab -160071</p>
                <p />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex">
              <i className="bi bi-telephone icon" />
              <div>
                <h4>Contact</h4>
                <p>
                  <strong>Phone:</strong> <span>9978112233</span>
                  <br />
                  <strong>Email:</strong> <span>mapmystay@gmail.com</span>
                  <br />
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex">
              <i className="bi bi-clock icon" />
              <div>
                <h4>Opening Hours</h4>
                <p>
                  <strong>Mon-Sat:</strong> <span>11AM - 23PM</span>
                  <br />
                  <strong>Sunday</strong>: <span>Closed</span>
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4>Follow Us</h4>
              <div className="social-links d-flex">
                <a href="#" className="twitter">
                  <i className="bi bi-twitter-x" />
                </a>
                <a href="#" className="facebook">
                  <i className="bi bi-facebook" />
                </a>
                <a href="#" className="instagram">
                  <i className="bi bi-instagram" />
                </a>
                <a href="#" className="linkedin">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>{" "}
            <span>All Rights Reserved</span>
          </p>
          <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you've purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
            Designed by <a href="#" onClick={handleClick}>MapMyStay</a>
          </div>
        </div>
      </footer>
    </>
  )
}