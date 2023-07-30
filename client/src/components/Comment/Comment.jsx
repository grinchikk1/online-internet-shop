import React from "react";
import { ListItem, ListItemAvatar, ListItemText, Typography, Avatar } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";

function Comment ( {name, date, comment} ) {
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
              {/* sx={{ display: "inline", position: "absolute", left: "250px", top: "10px" }} */}
              <Typography  variant="body2" color="text.primary" sx={{marginTop: "6px"}} >
                {date}
              </Typography>
              <Typography   variant="body1" color="text.primary" sx={{ fontSize: "16px", fontWeight: 400, lineHeight: "27px", marginTop: "5px" , maxWidth: "576px", wordWrap: "break-word"}}>
                {comment}
              </Typography>
            </React.Fragment>
          }
        />
        <ReplyIcon fontSize="large" sx={{ color: "#707070", margin: "0"}} />
        {/* <Typography sx={{ marginTop: "6px", fontSize: "16px", fontWeight: 400 }}>Reply</Typography> */}
      </ListItem>
    </>
  );
};

export default Comment;
