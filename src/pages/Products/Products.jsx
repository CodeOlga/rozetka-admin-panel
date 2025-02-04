import { useState } from "react";
import { useDispatch } from "react-redux";
import { push } from "redux-first-history";
import { Box, Typography, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

import productsAsyncAction from "../../redux/products/saga/asyncAction";
import { routes } from "../../constants/routes";

import ProductsTable from "../../components/ProductsTable/ProductsTable";
import ProductModal from "../../components/Modals/ProductModal";

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalActionType, setModalActionType] = useState("add");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const dispatch = useDispatch();

  const handleModalOpen = (actionType) => {
    setModalActionType(actionType);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handlePreviewClick = () => {
    dispatch(push(routes.preview.path));
  };

  const handleProductSubmit = (formData) => {
    if (modalActionType === "add") {
      dispatch(productsAsyncAction.addProductAction(formData));
    } else if (modalActionType === "edit") {
      dispatch(productsAsyncAction.editProductAction(formData));
    }
    setIsModalOpen(false);
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    handleModalOpen("edit");
  };

  return (
    <Box component="section" sx={{}}>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Button
          startIcon={<PersonOutlinedIcon />}
          variant="contained"
          onClick={handlePreviewClick}
          sx={{
            width: 180,
            height: 52,
            fontSize: 16,
            fontWeight: 700,
            textTransform: "capitalize",
            color: "primary.textGreen",
            backgroundColor: "primary.textWhite",
            "&:hover": {
              backgroundColor: "primary.bgDarkGrey",
            },
          }}
        >
          Preview
        </Button>
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          onClick={() => handleModalOpen("add")}
          sx={{
            width: 180,
            height: 52,
            fontSize: 16,
            fontWeight: 700,
            textTransform: "capitalize",
            color: "primary.textGreen",
            backgroundColor: "primary.textWhite",
            "&:hover": {
              backgroundColor: "primary.bgDarkGrey",
            },
          }}
        >
          Add product
        </Button>
      </Stack>

      <Typography
        component="h1"
        variant="h1"
        sx={{
          fontSize: "64px",
          fontWeight: 700,
          color: "primary.textWhite",
          textAlign: "center",
          marginBottom: "76px",
        }}
      >
        Products
      </Typography>

      <ProductsTable onEditClick={handleEditClick} />

      {/* modal */}
      {isModalOpen && (
        <ProductModal
          open={isModalOpen}
          actionType={modalActionType}
          onClose={handleModalClose}
          onSubmit={handleProductSubmit}
          initialValues={modalActionType === "edit" ? selectedProduct : {}}
        />
      )}
    </Box>
  );
};

export default Products;
