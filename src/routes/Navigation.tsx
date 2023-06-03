import { BrowserRouter } from "react-router-dom"
import { Routes,Route,NavLink,Navigate } from "react-router-dom";
import logo from '../logo.svg';


export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="logo" />
            <ul>
                <li>
                    <NavLink to="/home" className={({isActive})=>isActive?'nav-active':''}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about"  className={({isActive})=>isActive?'nav-active':''}>About</NavLink>
                </li>
                <li>
                    < NavLink to="/contact"  className={({isActive})=>isActive?'nav-active':''}>Contact</NavLink>
                </li>
            </ul>
            </nav>




            <Routes>
                <Route path="/home" element={<>About homepage</>} />           
                <Route path="/about" element={<>About Page</>} />
                <Route path="/contact" element={<>About Contact</>} />
                <Route path="/*" element={<Navigate to="/home" replace/>} />
            </Routes>
        </div>
    </BrowserRouter>

  )
}
