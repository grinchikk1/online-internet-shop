import React from "react";
import { Container, Box, Typography, Button} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useStyles, theme } from "./HomeStyles";
import Card from "../../components/Card/Card";
import Carousel from "react-material-ui-carousel";
import { useEffect, useState } from "react";
import getData from "../../data/index";



function Home() {
  let [products, setProducts] = useState([]);
  let [viewAll, setViewAll] = useState(false);
  const styles = useStyles();
  const output = out();

  useEffect(() => { 
    async function fetchJson() {
      //===!!== Not correct file location. Have to relocate file to client\PUBLIC.
      //===!!== But fetch request from PUBLIC doesn't work...
      // let request = await fetch("../../data.json");
      
      let request = await getData();  
      
      // let response = await request.json();
      // setProducts(response);
      setProducts(request);
    }
    fetchJson();
  }, []);

  function viewAllProducts() {
    let temp = viewAll;
    setViewAll(!temp);
  }

  function out () { 
    if (products) { 
      return (
        products.map(
          (card) => { 
            if (viewAll === true) {
              return (
                <Card
                  className={styles.card}
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
              )
            }
            else { 
              if (card.id > products.length-6) {
                return (
                  <Card
                    className={styles.card}
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
      <Container className={styles.container0}>
        <Container className={styles.container1}>
          <Container className={styles.container2}>
            <Carousel
              autoPlay={false}
              className={styles.carousel}
              IndicatorIcon={<Box className={styles.carouselIcon} />}
              indicatorContainerProps={{
                className: styles.carouselIconContainer,
                // style: {
                //   zIndex: "10",
                //   position: "absolute",
                //   top: "70%",
                // },
              }}
              activeIndicatorIconButtonProps={{
                className: styles.carouselActiveIcon,
                // style: {
                //   width: "20px",
                //   height: "20px",
                //   backgroundColor: "transparent",
                //   color: "transparent",
                //   border: "1px solid white",
                // }
              }}
              indicatorIconButtonProps={{
                // style: {
                //   margin: "8px",
                //   width: "8px",
                //   height: "8px",
                //   color: "#FFFFFF",
                //   backgroundColor: "#FFFFFF",
                // }
              }}
            >
              <Box className={styles.carouselItem1} />
              <Box className={styles.carouselItem2} />
              <Box className={styles.carouselItem3} />
              <Box className={styles.carouselItem4} />
              <Box className={styles.carouselItem5} />
            </Carousel>
          </Container>        
          <Button variant="outlined" className={styles.btn}>
          View Product
          </Button>
          <Typography className={ styles.name}>Gold big hoops</Typography>
          <Typography className={ styles.price}>$ 68,00</Typography>
        </Container>      
        <Container className={styles.container3}>
          { viewAll && <Typography className={styles.latest}>Shop All</Typography>}
          { !viewAll && <Typography className={styles.latest}>Shop The Latest</Typography>}  
          { !viewAll && <Button variant="text" className={styles.btnAll} onClick={viewAllProducts}>View All</Button>}
          { viewAll && <Button variant="text" className={styles.btnAll} onClick={viewAllProducts}>View The Latest</Button>}
        </Container>
        <Container className={styles.container4}>
          { output}
        </Container>
      </Container>      
    </ThemeProvider>
  );
}
export default Home;
