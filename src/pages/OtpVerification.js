import React from 'react';
import B9 from '../assets/img/b-9.png';

function OtpVerification() {
  return (
    <div classname = 'OtpVerification'>
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
											<div class="Lpo09 mb-4"><h4>OTP Verification</h4></div>
											<h4 class="otpRecNo mb-4 text-center">Enter the OTP sent to ******4569</h4>
											<div class="form-group otpCenterColl text-center">
												<input type="text" class="form-control otpEnty" id="otpNo1"/>
												<input type="text" class="form-control otpEnty" id="otpNo2"/>
												<input type="text" class="form-control otpEnty" id="otpNo3"/>
												<input type="text" class="form-control otpEnty" id="otpNo4"/>
											</div>
											<div class="form-group mb-4">
												<h4 class="editPhNo mb-3">
													<a href="#">
														<i class="fas fa-pencil-alt"></i> Edit Phone Number
													</a>
												</h4>
												<input type="text" class="form-control enterPhNo" id="phNoEdit" style = {{display: 'none'}}/>
											</div>
											<div class="form-group">
												<button type="button" class="btn full-width btn-md theme-bg text-white">Verify & Continue</button>
											</div>
										</div>
									</div>
									<div class="crs_log__footer d-flex justify-content-between">
										<div class="fhg_45"><p class="musrt">Don't have account? <a href="signup.html" class="theme-cl">SignUp</a></p></div>
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

export default OtpVerification
