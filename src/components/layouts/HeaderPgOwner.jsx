import { Link, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

export function HeaderPgOwner(){
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
    <header id="header" className="header d-flex align-items-center fixed-top" style={{ paddingTop: "4px", paddingBottom: "4px" }}>
        <div className="container-fluid container-xl">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              {/* Logo */}
              <Link to="/pgOwner" className="logo d-flex align-items-center">
                <h1 className="sitename mb-0">
                  <span>MapMyStay</span>
                </h1>
              </Link>

              {/* Toggler */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Navbar links */}
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item m-3">
                    <Link
                      to="/pgOwner"
                      className="text-dark"
                      style={{ fontSize:20, fontWeight: 450, fontFamily: "'Poppins', sans-serif" }}
                    >
                      Dashboard
                    </Link>
                  </li>

                  <li className="nav-item dropdown mt-2">
                    <a
                      className="nav-link dropdown-toggle text-dark "
                      href="#"
                      id="cityDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ fontSize:20,fontWeight: 450, fontFamily: "'Poppins', sans-serif"}}
                    >
                      Pg
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="cityDropdown">
                      <li>
                        <Link className="dropdown-item" to="/pgOwner/pg/add">
                          Add Pg
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/pgOwner/pg/manage">
                          Manage Pg
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item m-3">
                    <Link
                      to="/pgOwner/bookingsOwner/manage"
                      className="text-dark "
                      style={{ fontSize:20,fontWeight: 450, fontFamily: "'Poppins', sans-serif" }}
                    >
                      Bookings
                    </Link>
                  </li>

                  <li className="nav-item m-3">
                    <Link
                      to="/pgOwner/contact/owner"
                      className="text-dark "
                      style={{ fontSize:20,fontWeight: 450, fontFamily: "'Poppins', sans-serif" }}
                    >
                      Contact
                    </Link>
                  </li>

                  {/* Conditional Login/Logout */}
                  <li className="nav-item m-3">
                    {isLogin ? (
                      <Link
                        to="#"
                        className="text-dark"
                        style={{ fontSize:20,fontWeight: 450, fontFamily: "'Poppins', sans-serif" }}
                        onClick={logout}
                      >
                        Logout
                      </Link>
                    ) : (
                      <Link
                        to="/login"
                        className="text-dark fs-5"
                        style={{ fontSize:20,fontWeight: 450, fontFamily: "'Poppins', sans-serif" }}
                      >
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