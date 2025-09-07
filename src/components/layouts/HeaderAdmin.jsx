import { Link, useNavigate } from 'react-router-dom'
import Swal from "sweetalert2"

export function HeaderAdmin(){
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
          <nav className="navbar navbar-expand-xl">
            <div className="container-fluid">
              {/* Logo */}
              <Link to="/admin" className="logo d-flex align-items-center">
                <h1 className="sitename mb-4 me-5">
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
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ marginLeft: "10px" }}>
                  <li className="nav-item m-3">
                    <Link
                      to="/admin"
                      className="text-dark "
                      style={{ fontSize:20,fontWeight: 450, fontFamily: "'Poppins', sans-serif" }}
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
                      style={{fontSize:20, fontWeight: 450, fontFamily: "'Poppins', sans-serif"}}
                    >
                      City
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="cityDropdown">
                      <li>
                        <Link className="dropdown-item" to="/admin/city/add">
                          Add City
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/admin/city/manage">
                          Manage City
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item m-3">
                    <Link
                      to="/admin/pgOwner/manage"
                      className="text-dark "
                      style={{ fontSize:20,fontWeight: 450, fontFamily: "'Poppins', sans-serif" }}
                    >
                      Manage Pg Owners
                    </Link>
                  </li>

                  <li className="nav-item m-3">
                    <Link
                      to="/admin/users/manage"
                      className="text-dark "
                      style={{ fontSize:20,fontWeight: 450, fontFamily: "'Poppins', sans-serif" }}
                    >
                      Manage Users
                    </Link>
                  </li>

                  <li className="nav-item m-3">
                    <Link
                      to="/admin/pgRooms/view"
                      className="text-dark "
                      style={{ fontSize:20,fontWeight: 450, fontFamily: "'Poppins', sans-serif" }}
                    >
                      View Rooms
                    </Link>
                  </li>

                  <li className="nav-item m-3">
                    <Link
                      to="/admin/bookings/manage"
                      className="text-dark "
                      style={{ fontSize:20,fontWeight: 450, fontFamily: "'Poppins', sans-serif" }}
                    >
                      View Bookings
                    </Link>
                  </li>

                  <li className="nav-item m-3">
                    <Link
                      to="/admin/queries"
                      className="text-dark "
                      style={{ fontSize:20,fontWeight: 450, fontFamily: "'Poppins', sans-serif" }}
                    >
                      View Queries
                    </Link>
                  </li>

                  {/* Conditional Login/Logout */}
                  <li className="nav-item m-3">
                    {isLogin ? (
                      <Link
                        to="#"
                        className="text-dark "
                        style={{ fontSize:20,fontWeight: 450, fontFamily: "'Poppins', sans-serif" }}
                        onClick={logout}
                      >
                        Logout
                      </Link>
                    ) : (
                      <Link
                        to="/login"
                        className="text-dark "
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