import React from "react";

import { ListItem, ListItemText, Typography } from "@mui/material";

import Rating from "@mui/material/Rating";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Review = ({ name, date, review, rating, onDelete }) => {
  return (
    <>
      <ListItem
        alignItems="flex-start"
        sx={{ padding: 0, marginBottom: "50px", maxWidth: "auto" }}
      >
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "26px",
                  marginLeft: "-2px",
                }}
                component="span"
                variant="body1"
                color="text.primary"
              >
                {name}
              </Typography>
              <Typography
                sx={{ display: "inline", marginLeft: "10px" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {date}
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Rating
                name="read-only"
                value={rating}
                readOnly
                sx={{ marginTop: "7px", marginLeft: "-5px" }}
                precision={0.5}
              />
              <Typography
                component="span"
                variant="body1"
                color="text.primary"
                sx={{
                  display: "block",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "27px",
                  wordWrap: "break-word",
                }}
              >
                {review}
              </Typography>
            </React.Fragment>
          }
        />

        <DeleteForeverIcon
          fontSize="medium"
          sx={{ color: "#707070", marginRight: "5px" }}
          onClick={onDelete}
        />
      </ListItem>
    </>
  );
};

export default Review;
