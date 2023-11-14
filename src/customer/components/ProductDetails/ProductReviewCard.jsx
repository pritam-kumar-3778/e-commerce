import React from "react";
import { Grid, Box, Avatar, Rating } from "@mui/material";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              R
            </Avatar>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p>Anurag</p>
              <p>Oct 10 2023</p>
            </div>
          </div>

          <Rating value={4.5} name="half-rating" readOnly precision={.5}/>
          <p className="font-semibold opacity-75 text-lg">
            I love this t-shirt to wear.Nice t-shirt.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
