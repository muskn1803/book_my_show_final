import React from 'react';

//Layout HOC
import DefaultLayoutHoc from '../layout/Default.layout';

//components
import HeroCarousel from '../Components/HeroCarousel/HeroCarousel.Component';
import PosterSlider from '../Components/PosterSlider/PosterSlider.Component';
import EntertainmentCardComponent from '../Components/Entertainment /EntertainmentCard.Component';


const HomePage = () => {

    return(
        <div>HomePage</div>
    )
}

export default DefaultLayoutHoc(HomePage);

