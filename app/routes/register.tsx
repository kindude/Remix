import { Form } from "@remix-run/react";

export default function RegisterPage() {
    return (
      <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <form className="border p-4">
        <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter your full name" />
            <small id="nameHelp" className="form-text text-muted">Tell us your name</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    );
  }