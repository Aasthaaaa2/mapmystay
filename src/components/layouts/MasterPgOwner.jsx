import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { HeaderPgOwner } from "./HeaderPgOwner";
import { useEffect } from "react";

export function MasterPgOwner(){
  let nav=useNavigate()
  useEffect(()=>{
    let isLogin=sessionStorage.getItem("isLogin");
    let userType=sessionStorage.getItem("userType");
    if(!isLogin || userType!='2'){
      console.log("user not login");
      nav("/login")
    }
  })
  return(
    <>
    <HeaderPgOwner/>
    <Outlet/>
    <Footer/>
    </>
  )
}
