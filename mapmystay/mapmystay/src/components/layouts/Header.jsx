import { Link, NavLink, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

export function Header(){
  let isLogin=sessionStorage.getItem("isLogin")
  let nav=useNavigate()
  const logout=()=>{
    Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Logout!"
        }).then((result) => {
          if (result.isConfirmed) {
            sessionStorage.clear()
            nav("/login")
            Swal.fire({
              title: "Logout!",
              icon: "success"
            });
          }
        });
  }
  return(
    <>
      <header id="header" className="header d-flex align-items-center fixed-top" style={{ paddingTop: "2px", paddingBottom: "2px" }}>
        <div className="container-fluid container-xl ">
          <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
            <Link to="/" className="logo d-flex align-items-center">
              <h1 className="sitename">
                <span>MapMyStay</span>
              </h1>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li class="nav-item m-4">
                  <Link to="/" className="text-dark fs-5" style={{
                      fontWeight: "500",
                      fontFamily: "'Poppins', sans-serif",
                      color: "#333",
                  }}>Home</Link>
                </li>
              <li class="nav-item m-4">
                <Link to="/about" className="text-dark fs-5" style={{
                        fontWeight: "500",
                        fontFamily: "'Poppins', sans-serif",
                        color: "#333",
                      }}>
                      About
                </Link>

              </li>
              <li class="nav-item m-4">
                <Link to="/services" className="text-dark fs-5" style={{
                        fontWeight: "500",
                        fontFamily: "'Poppins', sans-serif",
                        color: "#333",
                      }}>Services</Link>
              </li>
              <li class="nav-item m-4">
                <Link to="/cities" className="text-dark fs-5" style={{
                        fontWeight: "500",
                        fontFamily: "'Poppins', sans-serif",
                        color: "#333",
                      }}>Cities</Link>
              </li>
              {
                isLogin ? (
                  <li class="nav-item m-4">
                    <Link to="/bookings" className="text-dark fs-5" style={{
                        fontWeight: "500",
                        fontFamily:"'Poppins',sans-serif",
                        color: "#333",
                    }}>Bookings</Link>
                  </li>
                ) : null
              }
              
              <li class="nav-item m-4">
                <Link to="/contact" className="text-dark fs-5" style={{
                        fontWeight: "500",
                        fontFamily:"'Poppins',sans-serif",
                        color: "#333",
                    }}>Contact</Link>
              </li>
                {
                    !isLogin && (
                      <li className="nav-item dropdown m-3" >
                        <a
                          className="nav-link dropdown-toggle text-dark fs-5"
                          href="#"
                          id="registerDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{
                          fontWeight: "500",
                          fontFamily: "'Poppins', sans-serif",
                          color: "#333",
                          }}
                        >
                          Register
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="registerDropdown">
                          <li>
                            <Link className="dropdown-item text-dark" to="/register" style={{
                              fontWeight: "500",
                              fontFamily: "'Poppins', sans-serif",
                              color: "#333",
                            }}>
                              Register as User
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item text-dark" to="/regPgOwner" style={{
                            fontWeight: "500",
                            fontFamily: "'Poppins', sans-serif",
                            color: "#333",
                            }}>
                              Register as PG Owner
                            </Link>
                          </li>
                        </ul>
                      </li>
                    )
                  }
                  <li className="nav-item m-3">
                    {isLogin ? (
                      <Link className="nav-link text-dark fs-5" to="#" style={{
                      fontWeight: "500",
                      fontFamily: "'Poppins', sans-serif",
                      color: "#333",
                    }} onClick={logout}>
                        Logout
                      </Link>
                    ) : (
                      <Link className="nav-link text-dark fs-5" to="/login" style={{
                      fontWeight: "500",
                      fontFamily: "'Poppins', sans-serif",
                      color: "#333",
                    }}>
                        Login
                      </Link>
                    )}
                </li>
              </ul>
            </div>
          </div>
         </nav>
        </div>
      </header>
    </>
  )
}




