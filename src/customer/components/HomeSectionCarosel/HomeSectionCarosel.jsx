import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { mens_kurta } from "../../../Data/mens_kurta";
// import { Button } from "@mui/material";
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCarosel = ({data}) => {
    // const [activeIndex,setActiveIndex]=useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

//   const slidePrev=()=>setActiveIndex(activeIndex-1);
//   const slideNext=()=>setActiveIndex(activeIndex+1);

//   const syncActiveIndex=({item})=>setActiveIndex(item);


  const items = data.slice(0,20).map((item) => <HomeSectionCard product={item}/>);
  return (
    <div className="px-4 lg:px-8">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableDotsControls
          responsive={responsive}
        //   onSlideChange={syncActiveIndex}
        //   activeIndex={activeIndex}
        />

          {/* { activeIndex !== items.length-5 && <button variant="contained" className="z-50", bg-white onClick={slideNext} sx={{position:'absolute', top:"8rem", right:"0rem", transform:"translateX(50%) rotate(90deg)", bgcolor:white}} aria-label="next">
            <KeyboardArrowLeftIcon sx={{transform:"Rotate(90deg)", color:"black"}}/>
        </button> }  */}

          {/* {activeIndex !== 0 && <button onClick={slidePrev} variant="contained" className="z-50", bgcolor:"white" sx={{position:'absolute', top:"8rem", left:"0rem", transform:"translateX(50%) rotate(-90deg)", bgcolor:white}} aria-label="next">
            <KeyboardArrowLeftIcon sx={{transform:"Rotate(90deg)", color:"black"}}/>
          </button>  }  */}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
