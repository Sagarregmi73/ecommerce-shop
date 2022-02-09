import React from 'react';
import Slider from './slider.component';
import Features from './features.component';
import Category from './category.component';
const section = () => {
  return <div>
 <Slider />
 <section>
   
  <div className="container">
      <div className="row">
<Category />
<Features />

          </div>
          </div>
          </section>
  </div>
  
};

export default section;
