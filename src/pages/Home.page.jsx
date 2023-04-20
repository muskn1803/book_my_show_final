import React, { useState } from "react";

//Layout HOC
import DefaultLayoutHoc from '../layout/Default.layout';

//components
import HeroCarousel from "../Components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from  "../Components/PosterSlider/PosterSlider.Component";
import EntertainmentCard from "../Components/Entertainment /EntertainmentCard.Component";



const HomePage = () => {
   const [recommendedMovies, setRecommendedMovies] = useState();
   const [premierMovies, setPremierMovies ] = useState([]);
   const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);
    return (
    <>
    <HeroCarousel />
    <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">The best of Entertainment</h1>
        <EntertainmentSlider />
            </div>

            <div className="container mx-auto px-4 md:px-12 my-8">
                <PosterSlider title="Recommended Movies" 
                subject="List of recommended Movies" 
                posters={recommendedMovies}
                isDark={false}
                />
            </div>

<div className="bg-premier-800 py-12">
 <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">

    <div className="hidden md:flex">
        <img src="data:image/png;base64,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"
        aly="rupay" className="w-full h-full" />
            </div>
            <PosterSlider 
             title="Premiers"
             subject="Band new release movie every friday"
             posters={premierMovies}
             isDark={true}
            />
       </div>
  </div>
  <div className="container mx-auto px-4 md:px-12 my-8 ">
  <PosterSlider 
             title="Online Streaming events"
             subject="online stream events"
             posters={onlineStreamEvents}
             isDark={false}
            />
  </div>
  </>
    );
  };

export default DefaultLayoutHoc(HomePage);

