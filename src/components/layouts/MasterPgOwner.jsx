import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { HeaderPgOwner } from "./HeaderPgOwner";

export function MasterPgOwner(){
  return(
    <>
    <HeaderPgOwner/>
    <Outlet/>
    <Footer/>
    </>
  )
}
