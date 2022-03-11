import React from 'react';
import HeroText from './HeroText';
import Image from 'next/image';

const HeroVideo = () => {

    return (
<>
            <video className={` w-screen h-2/3 md:h-[500px] brightness-[.9] max-w-4xl scale-100 relative m-auto object-cover overflow-hidden`} loop autoPlay muted>
  <source src="homebackground.mp4" type="video/mp4" />
                   
</video>


<HeroText />

</>

    );
};

export default HeroVideo;