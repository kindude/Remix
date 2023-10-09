import { Link } from "@remix-run/react"


export default function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid"> {/* Use container-fluid instead of container */}
          <a href="#" className="navbar-brand">Tutorial Republic</a>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
              <a href="#" className="nav-item nav-link active">Home</a>
              <a href="#" className="nav-item nav-link">Services</a>
              <a href="#" className="nav-item nav-link">About</a>
              <a href="#" className="nav-item nav-link">Contact</a>
            </div>
            <div className="navbar-nav ms-auto">
              <a href="#" className="nav-item nav-link">Register</a>
              <a href="#" className="nav-item nav-link">Login</a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
