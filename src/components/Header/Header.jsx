import logo from "../../assets/LeSweetGato.png";
import { Nav } from "../Nav/Nav.jsx";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
 
   return( 
     <header>
      
        <div className="logo-container">

         <Link to="/">         
          <img src={logo} alt="logo bakery" />
          <span>Le Sweet Gato Bakery</span>
         </Link>
         
         </div>
         <Nav />
     </header>
     );
};