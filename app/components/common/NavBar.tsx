import { Link, NavLink } from "@remix-run/react"


export default function Navbar() {
    return (
      <div className="container-fluid"> 
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">

          <NavLink to="/" className="navbar-brand">Remix</NavLink>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav main-navigation">
              <NavLink to="/" className="nav-link nav-link-with-margin">Home</NavLink> 
              <NavLink to="/posts" className="nav-link nav-link-with-margin">Posts</NavLink> 
              <NavLink to="/about" className="nav-link nav-link-with-margin">About</NavLink> 
              <NavLink to="/contact" className="nav-link nav-link-with-margin">Contact</NavLink> 
            </div>
            <div className="navbar-nav ms-auto">
              <NavLink to="/register" className="nav-link nav-link-with-margin">Register</NavLink>  
              <NavLink to="/login" className="nav-link nav-link-with-margin">Login</NavLink>
            </div>
          </div>
          </nav>
        </div>

    )
}
