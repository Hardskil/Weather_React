import React from 'react';
import "../Style/Reviews.css";
import ViewComponent from '../Components/ViewComponent';
function Reviews() {
    return ( 
        <div>
            <div className='Reviews'>
                <h3 className='reviews-title'>Страница с отзывами</h3>
                    <p className='reviews-description'>Здесь вы можете оставить отзывы о покупках или об облсуживании</p>
                <ViewComponent />
            </div>
            
        </div>
     );
}

export default Reviews;