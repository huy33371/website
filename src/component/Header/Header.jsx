import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark text-light py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3">
            <h1 className="mb-0">Phone Store</h1>
          </div>
          <div className="col-md-6">
            <form className="input-group">
              <input type="text" className="form-control" placeholder="Search phones..." />
              <button className="btn btn-outline-light" type="button">Search</button>
            </form>
          </div>
          <div className="col-md-3 text-end">
          <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
            {/* Thay thế nút "Sign Up" bằng Link */}
            <Link to="/register" className="btn btn-primary">Sign Up</Link>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <nav>
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Featured</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">New Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
