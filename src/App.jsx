import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { Master } from "./components/layouts/Master"
import { MasterPgOwner } from "./components/layouts/MasterPgOwner"
import { MasterAdmin } from "./components/layouts/MasterAdmin"
import { About } from "./components/pages/About"
import { Contact } from "./components/pages/Contact"
import { Error } from "./components/pages/Error"
import { Home } from "./components/pages/Home"
import { Properties } from "./components/pages/Properties"
import { Services } from "./components/pages/Services"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {ToastContainer} from "react-toastify"
import { RegisterPgOwner } from "./components/auth/RegisterPgOwner"
import { AddCity }from "./components/admin/cities/AddCity"
import { AddPg } from "./components/pgOwner/properties/AddPg"
import { ManageCity } from "./components/admin/cities/ManageCity"
import { ManagePg } from "./components/pgOwner/properties/ManagePg"
import { ManagePgOwner } from "./components/admin/pgOwners/ManagePgOwner"
import { ViewCity } from "./components/users/pages/ViewCity"
import { ViewRooms } from "./components/admin/pgRooms/ViewRooms"
import { UpdateCity } from "./components/admin/cities/UpdateCity"
import { UpdatePg } from "./components/pgOwner/properties/UpdatePg"
import { UpdateUsers } from "./components/admin/users/UpdateUsers"
import { UpdatePgOwner } from "./components/admin/pgOwners/UpdatePgOwner"
import { CityRooms } from "./components/users/pages/CityRooms"
import { RoomsDetails } from "./components/users/pages/RoomsDetails"
import { ContactOwner } from "./components/pages/ContactOwner"
import { ManageBookingOwner } from "./components/pgOwner/bookings/ManageBookingOwner"
import { ViewBookings } from "./components/users/bookings/ViewBookings"
import { ViewBookingsAdmin } from "./components/admin/bookings/ViewBookingsAdmin"
import { DashboardAdmin } from "./components/admin/dashboard/DashboardAdmin"
import { DashboardPgOwner } from "./components/pgOwner/dashboard/DashboardPgOwner"
import { ViewQueries } from "./components/admin/queries/ViewQueries"
import { ManageUsers } from "./components/admin/users/ManageUsers"

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
          <Route path="contact" element={<Contact/>}></Route>
          <Route path="contact" element={<Contact/>}></Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="regPgOwner" element={<RegisterPgOwner/>}></Route>
          <Route path="register" element={<Register/>}></Route>
          <Route path="cities" element={<ViewCity/>}></Route>
          <Route path="/city/:cityId" element={<CityRooms />} />
          <Route path="/roomDetails/:pgId" element={<RoomsDetails/>}/>
          <Route path="bookings" element={<ViewBookings/>}/>
        </Route>

        {/* PgOwner */}
        <Route path="/pgOwner" element={<MasterPgOwner/>}>
          <Route index element={<DashboardPgOwner/>}></Route>
          <Route path="about" element={<About/>}/>
          <Route path="pg/add" element={<AddPg />} />
          <Route path="pg/manage" element={<ManagePg/>}/>
          <Route path="pg/update/:id" element={<UpdatePg/>}/>
          <Route path="contact/owner" element={<ContactOwner/>}></Route>
          <Route path="bookingsOwner/manage" element={<ManageBookingOwner/>}></Route>
        </Route>

       {/* Admin */}
       <Route path="/admin" element={<MasterAdmin />}>
           <Route index element={<DashboardAdmin/>}/>
           <Route path="about" element={<About/>}/>
           <Route path="city/add" element={<AddCity />} />
           <Route path="city/manage" element={<ManageCity/>}/>
           <Route path="city/update/:id" element={<UpdateCity/>}/>
           <Route path="pgOwner/manage" element={<ManagePgOwner/>}/>
           <Route path="pgOwner/update/:id" element={<UpdatePgOwner/>}/>
           <Route path="users/manage" element={<ManageUsers/>}/>
           <Route path="users/update/:id" element={<UpdateUsers/>}/>
           <Route path="pgRooms/view" element={<ViewRooms/>}/>
           <Route path="bookings/manage" element={<ViewBookingsAdmin/>}/>
           <Route path="queries" element={<ViewQueries/>}/>
       </Route>


      <Route path="*" element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </>
  )
}
export default App
