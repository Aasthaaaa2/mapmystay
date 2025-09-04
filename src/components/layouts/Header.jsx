import { Link, useNavigate } from 'react-router-dom';
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
      <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <h1 className="sitename">
            <span>MapMyStay</span>
          </h1>
        </Link>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">
                About
              </Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cities">Cities</Link>
            </li>
            {
              !isLogin && (
                <li className="dropdown">
                  <a href="#">
                    <span>Register</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown" />
                  </a>
                  <ul>
                    <li>
                      <Link to="/register" href="#">Register as User</Link>
                    </li>
                    <li>
                      <Link to="/regPgOwner" href="#">Register as Pg Owner</Link>
                    </li>
                  </ul>
                </li>
              )
            }
            
            {
              isLogin?
              <li>
                <Link to={"#"} onClick={logout}>Logout</Link>
              </li>
              :
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
            }
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list" />
        </nav>
      </div>
    </header>
    </>
  )
}