import React from "react";
import { Typography, Container, IconButton, Divider } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import { useStyles } from "./AboutStyles";

function About() {
  const classes = useStyles();

  const shareUrl = "https://shoppe.com"; // треба замінити на URL свого веб-сайту

  return (
    <Container maxWidth="lg" className={classes.pageContainer}>
      {/* Перше фото */}
      <Typography variant="h4" sx={{ marginTop: "50px" }}>
        About us
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: "25px" }}>
        Fast Fashion, And Faster Fashion
      </Typography>
      <img
        src="https://res.cloudinary.com/ddh4awlkr/image/upload/v1693001757/online-internet-shop/about/Img_01_yzmci9.jpg"
        alt="Перше фото"
        style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
      />
      <Typography variant="body1" className={classes.article1}>
        To create a unique image, you use all means to create a unique look, so
        sometimes it is simply necessary to buy jewelry. It is gold and silver
        jewelry that helps you show your individuality, impeccable taste, boost
        your self-confidence, and reveal your femininity.
        <br />
        <br />
        Jewelry made of silver and gold goes well with almost any color and skin
        tone. They can be bought and worn by people of any age and gender. Even
        large, massive pieces made of these noble metals have a graceful,
        elegant look. To create a unique image, all means are used, so sometimes
        it is simply necessary to buy jewelry. It is gold and silver jewelry
        that helps to show your individuality, impeccable taste, boosts
        self-confidence, and reveals femininity.
        <br />
        <br />
        Jewelry perfectly emphasizes your personality. They can be bought and
        worn by people of any age and gender. Even large, massive pieces made of
        this noble metal have a graceful, elegant look. Our online store closely
        follows fashion trends in the world. Even large, massive pieces of
        jewelry have a graceful, elegant look.
      </Typography>

      {/* Друге фото  */}

      <img
        src="https://res.cloudinary.com/ddh4awlkr/image/upload/v1693001756/online-internet-shop/about/Img_02_e8mw2w.jpg"
        alt="Друге фото"
        style={{
          display: "block",
          margin: "0 auto",
          width: "58%",
          minWidth: "288px",
          minHeight: "149px",
          borderRadius: "8px",
          objectFit: "cover",
        }}
      />

      {/* Текст після другого фото */}

      <Typography variant="body1" className={classes.article2}>
        <Typography
          component="span"
          sx={{
            display: "block",
            paddingTop: "50px",
            paddingBottom: "20px",
            fontSize: "26px",
            fontWeight: 400,
          }}
        >
          TOP TRENDS
        </Typography>
        Individual approach to each client We offer only proven and high-quality
        products. Interesting and stylish models for you. We carefully examine
        each piece of jewelry. Only then do we put it up for sale.
        <br />
        <br />
        Each item has a sample from the State Assay Office of Ukraine and
        international quality certificates. Convenient, fast order form.
        Individual approach to each client. Our website has a lot of
        fashionable, stylish and inexpensive jewelry that you won't be able to
        find and buy in city stores. You will be unique and inimitable. Our
        online jewelry store offers to buy only high-quality, interesting models
        of products.
      </Typography>

      {/* Кнопка для Фейсбуку */}

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "0",
          marginBottom: "100px",
        }}
      >
        <Typography sx={{ marginTop: "10px", fontSize: "16px" }}>
          Share
        </Typography>
        <Divider
          flexItem
          sx={{ flexGrow: 1, marginLeft: "8px", maxWidth: "500px" }}
        />
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
    </Container>
  );
}
export default About;
