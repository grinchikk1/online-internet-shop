import React from "react";
import { Typography, Container, Box, IconButton,  Divider } from "@mui/material";

import { Facebook, Twitter, Instagram } from "@mui/icons-material";

import { useStyles, theme } from "./AboutStyles"; 

// import { ThemeProvider } from "@mui/material/styles";

import ReplyForm from "../../components/AboutForm/AboutForm"








function About() {
  const classes = useStyles(); 

  const shareUrl = "https://shoppe.com"; // треба замінити на URL свого веб-сайту

  

  return (
    // <ThemeProvider theme={theme}>
      <Container maxWidth="lg" className={classes.pageContainer}>
        {/* Перше фото */}
        <img
          src="https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/main_picture.png"
          alt="Перше фото"
          style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
        />
         <Typography variant="body1" className={classes.article1}>
          To create a unique image, you use all means to create a unique look, so sometimes it is simply necessary to buy jewelry.
          It is gold and silver jewelry that helps you show your individuality, impeccable taste, boost your self-confidence,
          and reveal your femininity.
          <Box mt={2} />


          Jewelry made of silver and gold goes well with almost any color and skin tone. 
          They can be bought and worn by people of any age and gender. Even large, massive pieces made of these noble metals have a graceful, 
          elegant look. 
          To create a unique image, all means are used, so sometimes it is simply necessary to buy jewelry.
          It is gold and silver jewelry that helps to show your individuality, impeccable taste, boosts self-confidence, and reveals femininity.
          <Box mt={2} />

          Jewelry perfectly emphasizes your personality. They can be bought and worn by people of any age and gender. 
          Even large, massive pieces made of this noble metal have a graceful, elegant look.  Our online store closely follows fashion trends in the world. 
          Even large, massive pieces of jewelry have a graceful, elegant look. 
        </Typography>
        

      {/* Друге фото  */}
        <img 
          src="https://res.cloudinary.com/ddh4awlkr/image/upload/v1689947205/online-internet-shop/main_picture.png"
          alt="Друге фото"
          style={{ display: "block", margin: "0 auto", width: "58%", borderRadius: "8px", objectFit: "cover" }}
        />

        {/* Текст після другого фото */}
        
        <Typography variant="body1" className={classes.article2}>

        <Typography variant="h5" className={classes.title}>TOP TRENDS</Typography>
        Individual approach to each client
        We offer only proven and high-quality products. Interesting and stylish models for you.
        We carefully examine each piece of jewelry. Only then do we put it up for sale.
          <Box mt={2} />

       Each item has a sample from the State Assay Office of Ukraine and international quality certificates.
       Convenient, fast order form.
       Individual approach to each client.
       Our website has a lot of fashionable, stylish and inexpensive jewelry that you won't be able to find and buy in city stores. You will be unique and inimitable. Our online jewelry store offers to buy only high-quality, interesting models of products.
        </Typography>
        {/* Кнопка для Фейсбуку */}
        
         <Container style={{ display: "flex", justifyContent: "center", padding: "0" }}>
           <Typography  style={{ marginTop: "10px", fontSize: "16px" }}>Share</Typography>
           <Divider flexItem style={{flexGrow: 1, marginLeft: "8px", maxWidth: "500px"}} />
      
            <IconButton
              aria-label="Поділитися на Фейсбук"
              component="a"
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
            >
            <Facebook />
            
           </IconButton>

          {/* Кнопка для Твіттера */}
          
            <IconButton
              aria-label="Поділитися на Твіттері"
              component="a"
              href={`https://twitter.com/intent/tweet?url=${shareUrl}`}
              target="_blank"
            >
             <Twitter />
           </IconButton>

          {/* Кнопка для Інстаграму */}
           <IconButton
             aria-label="Поділитися на Інстаграмі"
             component="a"
             href={`https://www.instagram.com/${shareUrl}`}
             target="_blank"
           >
            <Instagram />
           </IconButton>
           
        </Container>
        
    {/* Форма */}
          <ReplyForm/>
           

      
      </Container>
      


      
    // </ThemeProvider>
  )
}
export default About;
