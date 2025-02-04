import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { string, number } from "prop-types";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const ProductItem = ({ name, quantity, price, image }) => {
  return (
    <Card sx={{ width: 280, height: 380 }}>
      <CardMedia
        component="img"
        height="180"
        image={image || "https://placehold.co/280x180?text=No+Image"}
        alt={name}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "18px",
        }}
      >
        <Typography
          component="h6"
          variant="h6"
          sx={{
            marginBottom: 2,
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          {name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            component="span"
            sx={{ color: "primary.textRed", fontSize: 24 }}
          >
            {price}
            <Typography component="span" sx={{ fontSize: 16 }}>
              ₴
            </Typography>
          </Typography>

          <Typography component="span" sx={{ fontSize: 15 }}>
            Quantity: {quantity}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <ShoppingCartOutlinedIcon
            sx={{
              color: "primary.main",
              cursor: "pointer",
            }}
          />
          <Typography
            component="span"
            sx={{ color: "primary.main", fontSize: 15 }}
          >
            Ready for shipment
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

ProductItem.propTypes = {
  category: string.isRequired,
  name: string.isRequired,
  quantity: number.isRequired,
  price: number.isRequired,
  image: string,
};

export default ProductItem;
