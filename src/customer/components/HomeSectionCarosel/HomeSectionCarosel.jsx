import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
// import { Button } from "@mui/material";
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCarosel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);
  return (
    <div className="px-4 lg:px-8">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableDotsControls
          infinite
          responsive={responsive}
        />

        {/* <button variant="contained" className="z-50", bgcolor:"white" sx={{position:'absolute', top:"8rem", right:"0rem", transform:"translateX(50%) rotate(90deg)", bgcolor:white}} aria-label="next">
            <KeyboardArrowLeftIcon sx={{transform:"Rotate(90deg)", color:"black"}}/>
        </button> */}

         {/* <button variant="contained" className="z-50", bgcolor:"white" sx={{position:'absolute', top:"8rem", left:"0rem", transform:"translateX(50%) rotate(-90deg)", bgcolor:white}} aria-label="next">
            <KeyboardArrowLeftIcon sx={{transform:"Rotate(90deg)", color:"black"}}/>
        </button>  */}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
