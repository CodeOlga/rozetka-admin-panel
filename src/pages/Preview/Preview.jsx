import { Box, CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { usePreview } from "./hooks/usePreview";

import ProductItem from "../../components/ProductItem/ProductItem";

const Preview = () => {
  const { products, loading } = usePreview();

  return (
    <Box component="section" sx={{ padding: "20px" }}>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <CircularProgress />
        </Box>
      ) : (
        <Grid
          container
          spacing={10}
          justifyContent="center"
          alignItems="stretch"
        >
          {products.map((product) => (
            <Grid
              xs={12}
              sm={6}
              md={4}
              key={product.id}
              sx={{ height: "100%" }}
            >
              <ProductItem {...product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Preview;
