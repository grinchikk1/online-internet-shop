import React from "react";
import { ListItem, ListItemText, Typography } from "@mui/material";
// import ReplyIcon from "@mui/icons-material/Reply";
import Rating from "@mui/material/Rating";
// import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteReview } from "../../features/review/reviewSlice";

const Review = ({ name, date, review, rating, onDelete }) => {
  // const dispatch = useDispatch()
  // const { comments } = useSelector(state => state.comments)
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
                sx={{ fontSize: "20px", fontWeight: 400, lineHeight: "26px" }}
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
                sx={{ marginTop: "5px" }}
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
              {/* <ModeEditIcon /> */}
              {/* <DeleteForeverIcon sx={{display: "inline"}}/> */}
            </React.Fragment>
          }
        />
        {/* <ReplyIcon fontSize="medium" sx={{ color: "#707070", marginRight: "5px" }} />
              <Typography sx={{ marginTop: "4px", marginRight: "20px", fontSize: "12px", fontWeight: 400 }}>Reply</Typography> */}
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
