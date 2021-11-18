import React, { useState } from 'react'

function Reviews({reviews}) {

  return(
    reviews.map((person) => {
      const { id, name, date, rating, comment, img, like, dislike, love } = person;

      return (
        <div class="reviews-comments-item">
          <div class="review-comments-avatar">
            <img src={img} class="img-fluid" alt="" /> 
          </div>
          <div class="reviews-comments-item-text">
            <h4>{name}<span class="reviews-comments-item-date"><i class="ti-calendar theme-cl"></i>{date}</span></h4>

            <div class="listing-rating">
            <i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i>
            </div>
            <div class="clearfix"></div>
            <p>{comment}</p>
            <div class="pull-left reviews-reaction">
              <a class="comment-like active"><i class="ti-thumb-up"></i> {like}</a>
              <a class="comment-dislike active"><i class="ti-thumb-down"></i> {dislike}</a>
              <a class="comment-love active"><i class="ti-heart"></i> {love}</a>
            </div>
          </div>
        </div>
      )
    })
  )
}

export default Reviews
