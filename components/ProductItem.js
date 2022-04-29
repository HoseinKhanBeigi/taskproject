import * as React from "react";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShareIcon from "@mui/icons-material/Share";
import Button from "@mui/material/Button";

export default function ProductList({ product }) {
  console.log(product.description);
  const [age, setAge] = React.useState("UK8");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [QTY, setQTY] = React.useState(1);

  const handleChangeQTY = (event) => {
    setQTY(event.target.value);
  };

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <Container fixed>
      <Grid container>
        <Grid
          container
          item
          md={4}
          alignItems="center"
          sx={{
            background:
              "linear-gradient(0deg, rgba(42,215,245,1) 0%, rgba(0,255,203,1) 100%)",
          }}
        >
          <Grid item xs={12} textAlign="center">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/nike.png"/>
           
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Image
              loader={myLoader}
              src={product.image}
              width={300}
              height={300}
            />
          </Grid>
          <Grid item xs={12} textAlign="center">
          {/*  */}
          </Grid>
        </Grid>

        <Grid item md={8} sx={{ padding: "60px" }}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography
                variant="h4"
                component="h1"
                fontWeight={700}
                color="#2a2929"
              >
                NIKE ROSHE RUN
              </Typography>
            </Grid>
            <Grid item>
              <Rating name="read-only" value={2} readOnly />
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-start">
            <Typography
              variant="h4"
              component="h1"
              color="silver"
              fontStyle="italic"
              fontSize="1.125rem"
            >
              MINT GREEN
            </Typography>
          </Grid>
          <Grid container justifyContent="flex-start" mb={8}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ textDecoration: "line-through" }}
              fontSize="1.5rem"
              color="#1e1d1d"
              fontWeight={600}
            >
              $150
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              sx={{ ml: "12px" }}
              fontSize="1.5rem"
              color="#ff3737"
              fontWeight={600}
            >
              $114.99
            </Typography>
          </Grid>
          <Grid container justifyContent="flex-start" mb={2}>
            <Typography
              variant="h4"
              component="h1"
              fontWeight={800}
              color="#2a2929"
              fontSize="1.2rem"
            >
              DESCRIPTION
            </Typography>
          </Grid>
          <Grid container justifyContent="flex-start" mb={8}>
            <Typography
              variant="h4"
              component="h2"
              color="silver"
              fontSize="1rem"
            >
              {product.description}
            </Typography>
          </Grid>
          <Grid container mb={8}>
            <Grid container item xs={4} md={3} justifyContent="space-between">
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  component="h1"
                  fontWeight={800}
                  color="#2a2929"
                  fontSize="1.2rem"
                >
                  COLOR
                </Typography>
              </Grid>
              <Typography
                variant="body1"
                component="div"
                sx={{
                  width: "20px",
                  height: "20px",
                  background: "#19FFF3",
                  borderRadius: "100%",
                }}
              ></Typography>
              <Typography
                variant="body1"
                component="div"
                sx={{
                  width: "20px",
                  height: "20px",
                  background: "#ffe800",
                  borderRadius: "100%",
                }}
              ></Typography>
              <Typography
                variant="body1"
                component="div"
                sx={{
                  width: "20px",
                  height: "20px",
                  background: "#3b0294",
                  borderRadius: "100%",
                }}
              ></Typography>
              <Typography
                variant="body1"
                component="div"
                sx={{
                  width: "20px",
                  height: "20px",
                  background: "black",
                  borderRadius: "100%",
                }}
              ></Typography>
              <Typography
                variant="body1"
                component="div"
                sx={{
                  width: "20px",
                  height: "20px",
                  background: "silver",
                  borderRadius: "100%",
                }}
              ></Typography>
            </Grid>
            <Grid container justifyContent="center" item xs={4} md={3}>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  component="h1"
                  fontWeight={800}
                  color="#2a2929"
                  fontSize="1.2rem"
                  textAlign="center"
                >
                  SIZE
                </Typography>
              </Grid>

              <FormControl
                variant="standard"
                sx={{ m: 1, minWidth: 120, paddingLeft: "60px" }}
              >
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChange}
                  label="Age"
                  disableUnderline
                  sx={{
                    "& .MuiSvgIcon-root": { right: "45px" },
                  }}
                >
                  <MenuItem value={"UK8"}>(UK 8)</MenuItem>
                  <MenuItem value={"UK7"}>(UK 5)</MenuItem>
                  <MenuItem value={"UK6"}>(UK 7)</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid container justifyContent="center" item xs={4} md={3}>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  component="h1"
                  fontWeight={800}
                  color="#2a2929"
                  fontSize="1.2rem"
                  textAlign="center"
                >
                  QTY
                </Typography>
              </Grid>

              <FormControl
                variant="standard"
                sx={{ m: 1, minWidth: 120, paddingLeft: "80px" }}
              >
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={QTY}
                  onChange={handleChangeQTY}
                  label="QTY"
                  disableUnderline
                  sx={{
                    "& .MuiSvgIcon-root": { right: "75px" },
                  }}
                >
                  <MenuItem value={1}>(1)</MenuItem>
                  <MenuItem value={2}>(2)</MenuItem>
                  <MenuItem value={3}>(3)</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Button
                variant="contained"
                sx={{
                  "&.MuiButton-contained": {
                    backgroundColor: "#ff4e4d",
                    color: "#fff",
                    padding: "13px",
                  },
                }}
                startIcon={<ShoppingCartIcon />}
              >
                ADD TO CART
              </Button>
            </Grid>
            <Grid item>
              <Tooltip title="share">
                <IconButton>
                  <ShareIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
