import React from 'react'
import Cr3 from '../assets/img/cr-3.jpg';
const Subject = (props) =>{
    return (
        <>
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
										<h4 class="crs_tit">{props.title}</h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
									</div>
									<div class="crs_lt_103">
										<div class="crs_info_detail">
											<ul>
												<li><i class="fa fa-video"></i><span>{props.freenum} Free Videos</span></li>
												<li><i class="fa fa-video"></i><span>{props.totalnum} Videos</span></li>
											</ul>
										</div>
									</div>
								</div>
								
							</div>
						</div>
        </>
    );
}

export default Subject
