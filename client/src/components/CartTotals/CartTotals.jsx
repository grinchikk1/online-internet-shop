import React from "react";

import { useSelector } from "react-redux";
import { getTotalCartAmount } from "../../features/cart/cartSelector";

import {
  Accordion,
  AccordionSummary,
  CardActions,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { useStyles } from "./CartTotalsStyles";

import CartTotalsCheckout from "./CartTotalsCheckout";
import Card from "@mui/material/Card";

const CartTotals = () => {
  const s = useStyles();
  const totalAmount = useSelector(getTotalCartAmount);

  return (
    <Grid item xs={12} sm={12} md={6} className={s.cart_totals}>
      <Grid container sx={{ display: "block", justifyContent: "end" }}>
        <Grid item>
          <h3 className={s.cart_totalsTitle}>Cart totals</h3>
          <Grid container className={s.cart_subtotalWrapper}>
            <Grid item className={s.cart_subtitle}>
              <Typography sx={{ mb: "23px" }}>SUBTOTAL</Typography>
              <Typography>SHIPPING</Typography>
            </Grid>
            <Grid item sx={{ display: "content" }} className={s.cart_shipping}>
              <Typography sx={{ mb: "23px" }}>$ {totalAmount}</Typography>
              <Typography sx={{ mb: "39px" }}>
                You can calculate the shipping cost after choosing a postal
                company.
              </Typography>
              <Accordion
                variant="standard"
                sx={{
                  "@media (max-width : 768px) ": {
                    backgroundColor: "#EFEFEF",
                  },
                }}
              >
                <AccordionSummary
                  sx={{
                    padding: "0px",
                  }}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography>POSTAL CARRIER</Typography>
                </AccordionSummary>
                <Stack spacing={1}>
                  <Card>
                    <CardActions
                      sx={{
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        size="small"
                        href="https://calc.ukrposhta.ua/domestic-calculator"
                        target="_blank"
                        sx={{
                          width: "100%",
                        }}
                      >
                        UKRPOSHTA
                      </Button>
                    </CardActions>
                  </Card>
                  <Card>
                    <CardActions
                      sx={{
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        size="small"
                        href="https://novaposhta.ua/delivery"
                        target="_blank"
                        sx={{
                          width: "100%",
                        }}
                      >
                        NOVAPOSHTA
                      </Button>
                    </CardActions>
                  </Card>
                  <Card>
                    <CardActions
                      sx={{
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        size="small"
                        href="https://intime.check-track.com/ua/calc/"
                        target="_blank"
                        sx={{
                          width: "100%",
                        }}
                      >
                        INTIME
                      </Button>
                    </CardActions>
                  </Card>
                </Stack>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>
        <CartTotalsCheckout />
      </Grid>
    </Grid>
  );
};

export default CartTotals;
