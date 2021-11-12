import React from 'react';
import GooglePlay from '../assets/img/icon-googleplay.svg';
import AppStore from '../assets/img/icon-appstore.svg'

function Footer() {
  return (
    <footer class="skin-light-footer style-2">
      <div class="footer-middle">
        <div class="container">
          <div class="row">            
            <div class="col-lg-4 col-md-4">
              <div class="footer_widget">
                <h4 class="extream mb-3">Get the App</h4>
                <p>Download our mobile app to enjoy internet free streaming of videos lectures and for a seamless user experience</p>
                <div class="foot-news-last">
                  <a href="#" target="_blank">
                    <img src={GooglePlay} alt="icon-googleplay" />
                  </a>
                  <a href="#" target="_blank">
                    <img src={AppStore} alt="icon-appstore" />
                  </a>
                </div>
              </div>
            </div>
            
            <div class="col-lg-8 col-md-8 ml-auto">
              <div class="row">
                <div class="col-lg-4 col-md-4">
                  <div class="footer_widget">
                    <h4 class="widget_title">Exams</h4>
                    <ul class="footer-menu">
                      <li><a href="#">MBA</a></li>
                      <li><a href="#">GATE</a></li>
                      <li><a href="#">CUCET</a></li>
                      <li><a href="#">MBA/BBA after 12th</a></li>                        
                    </ul>
                  </div>
                </div>
                    
                <div class="col-lg-4 col-md-4">
                  <div class="footer_widget">
                    <h4 class="widget_title">About Us</h4>
                    <ul class="footer-menu">
                      <li><a href="#">About Keify</a></li>                      
                      <li><a href="#">Refund &amp; Cancellation</a></li>
                      <li><a href="#">Terms and Conditions</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Contact Us</a></li>            
                    </ul>
                  </div>
                </div>
            
                <div class="col-lg-4 col-md-4">
                  <div class="footer_widget">
                    <h4 class="widget_title">Helpline</h4>
                    <p class="mb-3 font-16">
                      <i class="fas fa-phone-alt"></i> +91 1234567890
                    </p>
                    <p class="mb-1">
                      Time : 9:00 AM – 9:00 PM | Monday to Saturday
                    </p>
                    <p class="mb-3 font-14">
                      <i class="fa fa-envelope"></i> 
                      <a class="mb-3 font-12" href="mailto:support@keify.com">
                        support@keify.com
                      </a>
                    </p>
              
                    <div class="d-flex">
                      <a href="#" target="_blank" class="facebook socila-icon-box">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" target="_blank" class="twitter socila-icon-box">
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a href="#" target="_blank" class="instagram socila-icon-box">
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a href="#" target="_blank" class="youtube socila-icon-box">
                        <i class="fab fa-youtube"></i>
                      </a>
                      <a href="#" target="_blank" class="telegram socila-icon-box">
                        <i class="fab fa-telegram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom br_light">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12 col-md-12 text-center">
              <p class="mb-0">© 2021 Keify.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
