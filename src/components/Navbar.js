import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { MessageService } from "../services/MessageService";
// import { useNavigate } from "react-router-dom";

function Navbar(){

    // const navigate = useNavigate();
    // const addToCart = ()=>navigate('/cart');

    const [isLoggedIn,setIsLoggedIn] = useState(false);
   

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            setIsLoggedIn(true);
        }
        MessageService.getMessage().subscribe(loggedIn =>{
            setIsLoggedIn(loggedIn);
            console.log('in nav useeffect logged in value:',loggedIn);
        });

    },[]);

    
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img
              alt="Flipkart"
              className="navbar-brand img-fluid"
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
            ></img>
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/products"}>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/users"}>
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/cart"}>
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/todo"}>
                  Todo
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}

            <div className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {isLoggedIn ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/profile"}>
                        Profile
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/logout"}>
                        Logout
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/register"}>
                        Register
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/login"}>
                        Login
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;