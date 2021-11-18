import React from 'react';
import Carousel from 'react-elastic-carousel';
import userReview from "../assets/img/userReview1.png";
import Column from "../assets/img/column.svg";

function StudentTestimonial({ data }) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },  
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 }   
  ];
  return (
    <div>
      {
        <Carousel breakPoints={breakPoints} >{
          data.map((person) => {
            const { id, name, occupation, rating, testimony } = person;
            return (
              <div key={id} class="single_items lios_item">
                <div class="_testimonial_wrios shadow_none border">
                  <div class="_testimonial_flex">
                    <div class="_testimonial_flex_first">
                      <div class="_tsl_flex_thumb">
                        <img src={userReview} class="img-fluid" alt="" />
                      </div>
                      <div class="_tsl_flex_capst">
                        <h5>{name}</h5>
                        <div class="_ovr_posts"><span>{occupation}</span></div>
                        <div class="_ovr_rates"><span><i class="fa fa-star"></i></span>{rating}</div>
                      </div>
                    </div>
                    <div class="_testimonial_flex_first_last">
                      <div class="_tsl_flex_thumb">
                        <img src={Column} class="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>                  
                  <div class="facts-detail">
                    <p>{testimony}</p>
                  </div>
                </div>
              </div>
            )
          })
        }      
        </Carousel>
      }
    </div>
      
  )
}

export default StudentTestimonial
