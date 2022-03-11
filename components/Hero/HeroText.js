import TextTransition, { presets } from "react-text-transition";
import React, { useEffect } from "react";

const HeroText = () => {

    const TEXTS = [
        " Create",
        " Source",
        " Influence",
        " Manage",
        "Analyse",
        "Succeed"
      ];



      const [index, setIndex] = React.useState(0);

      useEffect(()=> {

        console.log('running top level' + index)

        if (index < 6) {

          const intervalId = setInterval(() =>
          setIndex(index => index + 1),
          220 // every 3 seconds
          
        )
        }

            return () => clearTimeout(intervalId);

      },[index])

    //   if (index < 4){
    //   React.useEffect(() => {

    //     const intervalId = setInterval(() =>
    //       setIndex(index => index + 1),
    //       2000 // every 3 seconds
          
    //     );
        
    //     return () => clearTimeout(intervalId);
    //   }, [index])
    // }


    return (
      <div className='absolute w-full top-[400px] md:top-[280px]'>
        <h1 className='flex h-20 items-center justify-center text-5xl'>

              <span className='font-light text-white uppercase'>We</span>
            <span className='text-alt pl-3 leading-tight drop-shadow-sm font-base uppercase'>
              {console.log(index)}
      {index == 6 ? TEXTS[0] : TEXTS[index]}
      </span>
    </h1>
    </div>
    );
};

export default HeroText;