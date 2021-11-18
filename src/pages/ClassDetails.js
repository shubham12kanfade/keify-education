import React, { useState } from 'react';
import {videos} from '../data/videos';
import Video from '../component/Video';
import Cr3 from '../assets/img/cr-3.jpg';

function ClassDetails() {
	
  const [data, setData] = useState(videos);

  return (
    <div className = 'classDetails'>
      {/* <!-- ============================ Page Title Start================================== --> */}
			<div class="ed_detail_head">
				<div class="container">
					<div class="row mt-4">
						<div class="col-lg-8 col-md-12">
							<div class="row setBoxShd">
								<div class="col-lg-3 col-md-12 col-sm-12">
									<div class="authi_125">
										<div class="crs_cates cl_3"><span>Tution</span></div>
											<div class="ed_header_caption">
												<h2 class="ed_title">Class - X</h2>
											</div>
										<div class="authi_125_thumb">
											<img src="https://via.placeholder.com/700x550" class="img-fluid rounded" alt="" />
										</div>
										<a href="#" class="klio_45"><div class="lklo_45"><i class="fas fa-play"></i></div><h6>Preview</h6></a>
									</div>
								</div>
							
								<div class="col-lg-9 col-md-12 col-sm-12">
									<div class="dlkio_452">
										<div class="ed_detail_wrap">
											<h4 class="edu_title">Class Overview</h4>
											<div class="ed_header_short">
												<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. <a href="#" class="theme-cl">Read More..</a>.</p>
											</div>
											
											<div class="ed_rate_info">
												<div class="star_info">
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
												</div>
												<div class="review_counter">
													<strong class="high">4.7</strong> 3572 Reviews
												</div>
											</div>
											
										</div>
									</div>
								</div>
							</div>
							{/* <!-- ============================ Course Detail ================================== --> */}
							<section class="pt-4 pb-0 courseDetails">
								<div class="container pl-0">
									<div class="row">
										<div class="col-lg-12 col-md-12 order-lg-first pl-0 pr-0">
											<h4 class="edu_title">Course Type</h4>
											{/* <!-- All Info Show in Tab --> */}
											<div class="tab_box_info mt-4">
												<ul class="nav nav-pills mb-3 light" id="pills-tab" role="tablist">
													<li class="nav-item">
														<a class="nav-link active" id="recordedLecture-tab" data-toggle="pill" href="#recordedLecture" role="tab" aria-controls="recordedLecture" aria-selected="true">Recorded Lecture</a>
													</li>
													<li class="nav-item">
														<a class="nav-link" id="pendrive-tab" data-toggle="pill" href="#pendrive" role="tab" aria-controls="pendrive" aria-selected="false">Pendrive</a>
													</li>
												</ul>
											
												<div class="tab-content" id="pills-tabContent">
													
													{/* <!-- recordedLecture Detail --> */}
													<div class="tab-pane fade show active" id="recordedLecture" role="tabpanel" aria-labelledby="recordedLecture-tab">
														{/* <!-- Overview --> */}
														<div class="edu_wraper">
															<h4 class="edu_title">Course Overview</h4>
															<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>		
															<p>Aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto. Sam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
														</div>
													</div>
													
													{/* <!-- pendrive Detail --> */}
													<div class="tab-pane fade" id="pendrive" role="tabpanel" aria-labelledby="pendrive-tab">
														{/* <!-- Overview --> */}
														<div class="edu_wraper">
															<h4 class="edu_title">Course Overview</h4>
															<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>		
															<p>Aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto. Sam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									
								</div>
							</section>
							{/* <!-- ============================ Course Detail ================================== --> */}
						</div>
						<div class="col-lg-4 col-md-12 sideBarMe">
							<div class="ed_view_box style_2 border">
								<div class="ed_view_features">
									<div class="eld mb-1">
										<ul class="edu_list right ed_author">
											<li>
												Recorded Lectures:
												<strong class="theme-cl m-0">$149.00<span class="old_prc">$299.00</span></strong>
											</li>
											<li>
												<label class="subLbl">Choose your subscription:</label>
												<select class="form-control subPkg" id="">
													<option>12 Months <span class="saveTag">you save 75%</span></option>
													<option>12 Months <span class="saveTag">you save 75%</span></option>
													<option>12 Months <span class="saveTag">you save 75%</span></option>
													<option>12 Months <span class="saveTag">you save 75%</span></option>
												</select>
											</li>
											<li>GST:<strong>$76.1</strong></li>
											<li class="useCouponSet">Use SAVE05 and get 5% off. Limited period offer.</li>
										</ul>
									</div>
									<div class="eld mb-1">
										<ul class="edu_list right ed_author">
											<li>
												<b>Total Amount</b>:
												<strong class="theme-cl m-0">$499.00</strong>
											</li>
										</ul>
									</div>
									<div class="ed_view_link text-center">
										<a href="#" class="btn theme-light enroll-btn">Add to cart</a>
										<a href="#" class="btn theme-bg enroll-btn">Buy Now</a>
									</div>
								</div>
								
							</div>
							
						</div>
					</div>
				</div>
			</div>
			{/* <!-- ============================ Page Title End ================================== --> */}
			{/* <!-- ============================ Free Videos ================================== --> */}
			<section class="freVdo pt-5 gray">
				<div class="container">
				
					<div class="row justify-content-center">
						<div class="col-lg-7 col-md-8">
							<div class="sec-heading center">
								<h2>Free <span class="theme-cl">Videos</span></h2>
							</div>
						</div>
					</div>
					
					<div class="row justify-content-center">
						<div class="col-xl-12 col-lg-12 col-sm-12">
							<div class="vdo-slider space">
								<Video data = {data} />								
							</div>
						
						</div>
					</div>
					
				</div>
			</section>
			{/* <!-- ============================ Students Reviews End ================================== --> */}
			
			{/* <!-- ============================ Subject Start ================================== --> */}
			<section class="subjectSection">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-7 col-md-8">
							<div class="sec-heading center">
								<h2>Subjects <span class="theme-cl">For You</span></h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
							</div>
						</div>
					</div>
					
					<div class="row justify-content-center">
						
						<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
							<div class="crs_grid_list">
								
								<div class="crs_grid_list_thumb">
									<a href="course-detail.html"><img src={Cr3} class="img-fluid rounded" alt="" /></a>
								</div>
								
								<div class="crs_grid_list_caption">
									<div class="crs_lt_101">
										<span class="est st_2">CAT</span>
									</div>
									<div class="crs_lt_102">
										<h4 class="crs_tit">Quantitative Aptitude</h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
									</div>
									<div class="crs_lt_103">
										<div class="crs_info_detail">
											<ul>
												<li><i class="fa fa-video"></i><span>14 Free Videos</span></li>
												<li><i class="fa fa-video"></i><span>80 Videos</span></li>
											</ul>
										</div>
									</div>
								</div>
								
							</div>
						</div>
						
						<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
							<div class="crs_grid_list">
								
								<div class="crs_grid_list_thumb">
									<a href="course-detail.html"><img src={Cr3} class="img-fluid rounded" alt="" /></a>
								</div>
								
								<div class="crs_grid_list_caption">
									<div class="crs_lt_101">
										<span class="est st_2">CAT</span>
									</div>
									<div class="crs_lt_102">
										<h4 class="crs_tit">Quantitative Aptitude</h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
									</div>
									<div class="crs_lt_103">
										<div class="crs_info_detail">
											<ul>
												<li><i class="fa fa-video"></i><span>14 Free Videos</span></li>
												<li><i class="fa fa-video"></i><span>80 Videos</span></li>
											</ul>
										</div>
									</div>
								</div>
								
							</div>
						</div>
						<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
							<div class="crs_grid_list">
								
								<div class="crs_grid_list_thumb">
									<a href="course-detail.html"><img src={Cr3} class="img-fluid rounded" alt="" /></a>
								</div>
								
								<div class="crs_grid_list_caption">
									<div class="crs_lt_101">
										<span class="est st_2">CAT</span>
									</div>
									<div class="crs_lt_102">
										<h4 class="crs_tit">Quantitative Aptitude</h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
									</div>
									<div class="crs_lt_103">
										<div class="crs_info_detail">
											<ul>
												<li><i class="fa fa-video"></i><span>14 Free Videos</span></li>
												<li><i class="fa fa-video"></i><span>80 Videos</span></li>
											</ul>
										</div>
									</div>
								</div>
								
							</div>
						</div>
						<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
							<div class="crs_grid_list">
								
								<div class="crs_grid_list_thumb">
									<a href="course-detail.html"><img src={Cr3} class="img-fluid rounded" alt="" /></a>
								</div>
								
								<div class="crs_grid_list_caption">
									<div class="crs_lt_101">
										<span class="est st_2">CAT</span>
									</div>
									<div class="crs_lt_102">
										<h4 class="crs_tit">Quantitative Aptitude</h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
									</div>
									<div class="crs_lt_103">
										<div class="crs_info_detail">
											<ul>
												<li><i class="fa fa-video"></i><span>14 Free Videos</span></li>
												<li><i class="fa fa-video"></i><span>80 Videos</span></li>
											</ul>
										</div>
									</div>
								</div>
								
							</div>
						</div>
					
					</div>
					
					<div class="row justify-content-center">
						<div class="col-lg-7 col-md-8 mt-2">
							<div class="text-center"><a href="#" class="btn btn-md theme-bg-light theme-cl">Explore More Subjects</a></div>
						</div>
					</div>
					
				</div>
			</section>
    </div>
  )
}

export default ClassDetails
