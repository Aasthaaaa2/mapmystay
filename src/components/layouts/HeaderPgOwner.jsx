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
      <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link to="/pgOwner" className="logo d-flex align-items-center">
          <h1 className="sitename">
            <span>MapMyStay</span>
          </h1>
        </Link>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link to="/pgOwner">Dashboard</Link>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Pg</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown" />
              </a>
              <ul>
                <li>
                  <Link to="/pgOwner/pg/add" href="#">Add Pg</Link>
                </li>
                <li>
                  <Link to="/pgOwner/pg/manage" href="#">Manage Pg</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/booking">Manage Booking</Link>
            </li>
            <li>
              <Link to="/pgOwner/contact/owner">Contact</Link>
            </li>
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