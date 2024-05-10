import './navbar.css';

export default function Navbar() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand mx-2 noUnderline" id="logo" href="#">ALOGO</a>
          <button
            class="navbar-toggler mx-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" style={{color:'white'}}></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mt-3 mt-md-0" >
              <li class="nav-item mx-auto mx-md-5 ">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item mx-auto mx-md-5">
                <a class="nav-link " href="#">About Us</a>
              </li>
              <li class="nav-item mx-auto mx-md-5">
                <a class="nav-link" href="#">News</a>
              </li>
              <li class="nav-item mx-auto mx-md-5">
                <a class="nav-link" href="#">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }