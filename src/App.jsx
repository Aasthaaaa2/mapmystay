import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { Master } from "./components/layouts/Master"
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
        </Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </>
  )
}
export default App
