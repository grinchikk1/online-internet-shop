import React from "react";
import { ListItem, ListItemAvatar, ListItemText, Typography, Avatar, Divider } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";

const Comment = ({ name, date, comment }) => {
  return (
    <>
      <ListItem alignItems="flex-start" sx={{ padding: 0, marginBottom: "50px", width: "auto" }}>
        <ListItemAvatar>
          <Avatar alt={name} src="https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/ring_5.png" variant="square" sx={{ borderRadius: "8px", width: "70px", height: "70px", marginRight: "20px" }} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography sx={{ fontSize: "20px", fontWeight: 400, lineHeight: "26px" }} component="span" variant="body1" color="text.primary">
                {name}
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography sx={{ display: "inline", position: "absolute", left: "300px", top: "10px" }} component="span" variant="body2" color="text.primary">
                {date}
              </Typography>
              <Typography component="span" variant="body1" color="text.primary" sx={{ fontSize: "16px", fontWeight: 400, lineHeight: "27px", marginTop: "40px" }}>
                {comment}
              </Typography>
            </React.Fragment>
          }
        />
        <ReplyIcon fontSize="large" sx={{ color: "#707070", marginRight: "10px" }} />
        <Typography sx={{ marginTop: "6px", fontSize: "16px", fontWeight: 400 }}>Reply</Typography>
      </ListItem>
    </>
  );
};

export default Comment;
