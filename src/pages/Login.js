import React from 'react';
import B9 from '../assets/img/b-9.png'

function Login() {
  return (
    <div className = 'login'>
      <section>
				<div class="container">
					<div class="row justify-content-center">
					
						<div class="col-xl-7 col-lg-8 col-md-12 col-sm-12">
							<form>
								<div class="crs_log_wrap bx-shd-wrap">
									<div class="crs_log__thumb">
										<img src={B9} class="img-fluid" alt="" />
									</div>
									<div class="crs_log__caption">
										<div class="rcs_log_123">
											<div class="rcs_ico"><i class="fas fa-lock"></i></div>
										</div>
										
										<div class="rcs_log_124">
											<div class="Lpo09"><h4>Login Your Account</h4></div>
											<div class="form-group">
												<label>Email-Id/Mobile Number</label>
												<input type="text" class="form-control" placeholder="support@keify.com" />
											</div>
											<div class="form-group">
												<label>Password</label>
												<input type="text" class="form-control" placeholder="*******" />
											</div>
											<div class="form-group">
												<button type="button" class="btn full-width btn-md theme-bg text-white">Login</button>
											</div>
										</div>
									</div>
									<div class="crs_log__footer d-flex justify-content-between">
										<div class="fhg_45"><p class="musrt">Don't have account? <a href="signup.html" class="theme-cl">SignUp</a></p></div>
										<div class="fhg_45"><p class="musrt"><a href="forgot.html" class="text-danger">Forgot Password?</a></p></div>
									</div>
								</div>
							</form>
						</div>

					</div>
				</div>
			</section>
    </div>
  )
}

export default Login
