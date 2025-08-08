import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { Master } from "./components/layouts/Master"
import { MasterPgOwner } from "./components/layouts/MasterPgOwner"
import { MasterAdmin } from "./components/layouts/MasterAdmin"
import { About } from "./components/pages/About"
import { Agents } from "./components/pages/Agents"
import { Contact } from "./components/pages/Contact"
import { Error } from "./components/pages/Error"
import { Home } from "./components/pages/Home"
import { Properties } from "./components/pages/Properties"
import { PropertySingle } from "./components/pages/PropertySingle"
import { ServiceDetails } from "./components/pages/ServiceDetails"
import { Services } from "./components/pages/Services"
import { StarterPage } from "./components/pages/StarterPage"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {ToastContainer} from "react-toastify"
import { RegisterPgOwner } from "./components/auth/RegisterPgOwner"
import { AddCity }from "./components/admin/cities/AddCity"
import { AddPg } from "./components/pgOwner/properties/AddPg"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master/>}>
          <Route index element={<Home/>}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="services" element={<Services/>}></Route>
          <Route path="properties" element={<Properties/>}></Route>
          <Route path="agents" element={<Agents/>}></Route>
          <Route path="contact" element={<Contact/>}></Route>
          <Route path="contact" element={<Contact/>}></Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="register" element={<Register/>}></Route>
          <Route path="/regPgOwner" element={<RegisterPgOwner/>}></Route>
        </Route>

        {/* PgOwner */}
        <Route path="/pgOwner" element={<MasterPgOwner/>}>
          <Route path="pg/add" element={<AddPg />} />
        </Route>

       {/* Admin */}
       <Route path="/admin" element={<MasterAdmin />}>
           <Route path="city/add" element={<AddCity />} />
       </Route>


      <Route path="*" element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </>
  )
}
export default App
