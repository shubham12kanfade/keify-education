import React from 'react';
import Carousel from 'react-elastic-carousel';

function Video({ data }) {

  const breakPoints = [
    { width: 1, itemsToShow: 3 },    
  ];

  return (
    <div>
      {
        <Carousel breakPoints={breakPoints} style = {{ width: '1200px'}}>{
          data.map((video) => {
            const { id, src} = video;
            return (
              <div class="single_items lios_item">
                <div class="vdoSect border">
                  <div class="_vdo_flex">
                    <iframe width="100%" height="175" src={src}>
                    </iframe>
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

export default Video
