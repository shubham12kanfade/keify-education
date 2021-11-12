import React from 'react';
import B9 from '../assets/img/b-9.png'

function Signup() {
  return (    
    <div className="signup">
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
											<div class="rcs_ico"><i class="fas fa-user"></i></div>
										</div>
										
										<div class="rcs_log_124">
											<div class="Lpo09"><h4>Register Your Account</h4></div>
											<div class="form-group row mb-0">
												<div class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
													<div class="form-group">
														<label>First Name</label>
														<input type="text" class="form-control" placeholder="First Name" />
													</div>
												</div>
												<div class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
													<div class="form-group">
														<label>Last Name</label>
														<input type="text" class="form-control" placeholder="Last Name" />
													</div>
												</div>
											</div>
											<div class="form-group">
												<label>Email</label>
												<input type="text" class="form-control" placeholder="support@keify.com" />
											</div>
											<div class="form-group row mb-0">
												<div class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
													<div class="form-group">
														<label>Select State</label>
														<select class="form-control" id="states" placeholder="Select State">
 														  <option value="Andhra Pradesh">Andhra Pradesh</option>
															<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
															<option value="Arunachal Pradesh">Arunachal Pradesh</option>
															<option value="Assam">Assam</option>
															<option value="Bihar">Bihar</option>
															<option value="Chandigarh">Chandigarh</option>
															<option value="Chhattisgarh">Chhattisgarh</option>
															<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
															<option value="Daman and Diu">Daman and Diu</option>
															<option value="Delhi">Delhi</option>
															<option value="Lakshadweep">Lakshadweep</option>
															<option value="Puducherry">Puducherry</option>
															<option value="Goa">Goa</option>
															<option value="Gujarat">Gujarat</option>
															<option value="Haryana">Haryana</option>
															<option value="Himachal Pradesh">Himachal Pradesh</option>
															<option value="Jammu and Kashmir">Jammu and Kashmir</option>
															<option value="Jharkhand">Jharkhand</option>
															<option value="Karnataka">Karnataka</option>
															<option value="Kerala">Kerala</option>
															<option value="Madhya Pradesh">Madhya Pradesh</option>
															<option value="Maharashtra">Maharashtra</option>
															<option value="Manipur">Manipur</option>
															<option value="Meghalaya">Meghalaya</option>
															<option value="Mizoram">Mizoram</option>
															<option value="Nagaland">Nagaland</option>
															<option value="Odisha">Odisha</option>
															<option value="Punjab">Punjab</option>
															<option value="Rajasthan">Rajasthan</option>
															<option value="Sikkim">Sikkim</option>
															<option value="Tamil Nadu">Tamil Nadu</option>
															<option value="Telangana">Telangana</option>
															<option value="Tripura">Tripura</option>
															<option value="Uttar Pradesh">Uttar Pradesh</option>
															<option value="Uttarakhand">Uttarakhand</option>
															<option value="West Bengal">West Bengal</option>
 														</select>
													</div>
												</div>
												<div class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
													<div class="form-group">
														<label>Select City</label>
														<select class="form-control" id="city" placeholder="Select a city">
 														   <option>Nagpur</option>
 														   <option>Akola</option>
 														   <option>Amravati</option>
 														   <option>Mumbai</option>
 														</select>
													</div>
												</div>
											</div>
											<div class="form-group">
												<label>Phone Number</label>
												<input type="text" class="form-control" placeholder="Phone number" />
											</div>
											<div class="form-group">
												<label>Password</label>
												<input type="text" class="form-control" placeholder="*******" />
											</div>
											<div class="form-group">
												<button type="button" class="btn full-width btn-md theme-bg text-white">Sign Up</button>
											</div>
										</div>
									</div>
									<div class="crs_log__footer d-flex justify-content-between">
										<div class="fhg_45"><p class="musrt">Already have account? <a href="login.html" class="theme-cl">Login</a></p></div>
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

export default Signup
