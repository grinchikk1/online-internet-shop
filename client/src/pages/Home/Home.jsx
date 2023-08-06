import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Container, Box, Typography, Button} from "@mui/material";
import Card from "../../components/Card/Card";
import Carousel from "react-material-ui-carousel";
import { useStyles, theme } from "./HomeStyles";
import { useEffect, useState } from "react";
import getData from "../../data/index";
// import CardItem from "../Shop/CardItem/CardItem";
import { Link } from "react-router-dom";
//=========================
import {
  container0,
  container1,
  container2,
  container3,
  container4,
  carousel,
  btn,
  name,
  price,
  latest,
  btnAll,
  carouselIcon,
  carouselItem1,
  carouselItem2,
  carouselItem3,
  carouselItem4,
  carouselItem5
} from "./HomeStyles";

function Home() {
  let [products, setProducts] = useState([]);
  let [viewAll, setViewAll] = useState(false);
  const styles = useStyles();
  const output = out();

  useEffect(() => { 
    async function fetchJson() {      
      let request = await getData(); 
      setProducts(request);
    }
    fetchJson();
  }, []);

  // function viewAllProducts() {
  //   let temp = viewAll;
  //   setViewAll(!temp);
  // }

  function out () { 
    if (products) { 
      return (
        products.map(
          (card) => { 
            if (viewAll === true) {
              return (
                <Card
                  // className={styles.card}
                  key={card.id}
                  id={card.id}
                  enabled={card.enabled}
                  image={card.image[0]}
                  quantity={card.quantity}
                  name={card.name}
                  currentPrice={card.currentPrice}
                  categories={card.categories}
                  productMaterial={card.productMaterial}
                  brand={card.brand}
                  itemNo={card.itemNo}
                  date={card.date}
                  country={card.country}
                />
                // <CardItem key={card.id} card={card} />
              )
            }
            else { 
              if (card.id > products.length-6) {
                return (
                  <Card
                    // className={styles.card}
                    key={card.id}
                    id={card.id}
                    enabled={card.enabled}
                    image={card.image[0]}
                    quantity={card.quantity}
                    name={card.name}
                    currentPrice={card.currentPrice}
                    categories={card.categories}
                    productMaterial={card.productMaterial}
                    brand={card.brand}
                    itemNo={card.itemNo}
                    date={card.date}
                    country={card.country}
                  />
                  // <CardItem key={card.id} card={card} />
                )
              }
              else { 
                return null;
              }
            }
          }
        )
      );
    }
  }  

  return (
    <ThemeProvider theme={theme}>
      <Container 
        // className={styles.container0}
        sx={container0 }
      >
        <Container
          // className={styles.container1}
          sx={container1 }
        >
          <Container
            // className={styles.container2}
            sx={container2 }
          >
            <Carousel
              autoPlay={false}
              // className={styles.carousel}
              sx={carousel}
              IndicatorIcon={<Box
                // className={styles.carouselIcon}
                sx={carouselIcon}
              />}
              indicatorContainerProps={{
                //  className: styles.carouselIconContainer,
                style: {
                  zIndex: "10",
                  position: "absolute",
                  top: "70%",
                },
              }}
              activeIndicatorIconButtonProps={{
                //  className: styles.carouselActiveIcon,
                sx: {
                  width: "18px",
                  height: "18px",
                  backgroundColor: "transparent",
                  color: "transparent",
                  border: "1px solid white",                  
                    "@media (max-width: 768.9px)": {
                    width: "10px",
                    height: "10px",
                  },
                },
              //  style: {
                //  width: "20px",
                //  height: "20px",
                //  backgroundColor: "transparent",
                //  color: "transparent",
                //  border: "1px solid white",
              //  }
              }}
              indicatorIconButtonProps={{
              // className: styles.carouselIcon,
                // style: {
                //   margin: "8px",
                //   width: "8px",
                //   height: "8px",
                //   color: "#FFFFFF",
                //   backgroundColor: "#FFFFFF",
                //   "@media (max-width: 768.9px)": {
                //     width: "18px",
                //   height: "18px",
                //   },
                // }
             }}
           >
              <Box
                // className={styles.carouselItem1}
                sx={carouselItem1 }
              />
              <Box
                // className={styles.carouselItem2}
                sx={carouselItem2 }
              />
              <Box
                // className={styles.carouselItem3}
                sx={carouselItem3 }
              />
              <Box
                // className={styles.carouselItem4}
                sx={carouselItem4 }
              />
              <Box
                // className={styles.carouselItem5}
                sx={carouselItem5 }
              />
           </Carousel>
         </Container>        
          <Button
            variant="outlined"
            // className={styles.btn}
            sx={btn} >
            View Product
          </Button>
          <Typography
            // className={styles.name}
            sx={name}
          >
            Gold big hoops
          </Typography>
          <Typography
            // className={styles.price}
            sx={price}
          >
            $ 68,00
          </Typography>
       </Container>      
        <Container
          // className={styles.container3}
          sx={container3}
        >
         {/* { viewAll && <Typography className={styles.latest}>Shop All</Typography>} */}
         {/* { !viewAll && <Typography className={styles.latest}>Shop The Latest</Typography>}   */}
         {/* { !viewAll && <Button variant="text" className={styles.btnAll} onClick={viewAllProducts}>View All</Button>} */}
         {/* { viewAll && <Button variant="text" className={styles.btnAll} onClick={viewAllProducts}>View The Latest</Button>} */}
          <Typography
            // className={styles.latest}
            sx={latest}
          >
            Shop The Latest
          </Typography>
          <Link className={styles.link} to="/Shop">
            <Button
              variant="text"
              // className={styles.btnAll}
              sx={btnAll }
              // onClick={viewAllProducts}
            >
              View All
            </Button>
          </Link>
       </Container>
        <Container
          // className={styles.container4}
          sx={container4}
        >
         { output}
       </Container>
     </Container>      
   </ThemeProvider>
  );
}
export default Home;

