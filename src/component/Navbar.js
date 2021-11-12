import React from 'react';
import Logo from '../assets/img/logo.png';

function Navbar() {
  return (
    <div class="header header-light head-shadow">
      <div class="container">
        <nav id="navigation" class="navigation navigation-landscape">
          <div class="nav-header">
            <a class="nav-brand" href="#">
              <img src={Logo} class="logo" alt="" />
            </a>
            <div class="nav-toggle"></div>
            <div class="mobile_nav">
              <ul>
                <li>
                  <a href="login.html" class="crs_yuo12 w-auto text-white theme-bg">
                    <span class="embos_45"><i class="fas fa-sign-in-alt mr-1"></i>Sign In</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="nav-menus-wrapper">
            <ul class="nav-menu">
              <li><a href="#">Tuition</a></li>
              <li><a href="#">GATE</a></li>
              <li><a href="#">University Exam</a></li>
            </ul>
            
            <ul class="nav-menu nav-menu-social align-to-right">
              
              <li>
                <a href="signup.html" class="alio_green">
                  <i class="fas fa-sign-in-alt mr-1"></i><span class="dn-lg">Register</span>
                </a>
              </li>
              <li>
                <a href="login.html" class="alio_green">
                  <i class="fas fa-sign-in-alt mr-1"></i><span class="dn-lg">Login</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar


