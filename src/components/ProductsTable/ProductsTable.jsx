import { useState } from "react";
import { useDispatch } from "react-redux";
import { func } from "prop-types";
import { Box, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import { useProducts } from "./hooks/useProducts";
import productsAsyncAction from "../../redux/products/saga/asyncAction";

import AlertModal from "../Modals/AlertModal";

const ProductsTable = ({ onEditClick }) => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const dispatch = useDispatch();

  const { products } = useProducts();

  const handleClickOpen = (productId) => {
    setSelectedProduct(productId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    if (selectedProduct) {
      dispatch(productsAsyncAction.deleteProductAction(selectedProduct));
    }
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      flex: 0.2,
    },
    {
      field: "category",
      headerName: "Category",
      width: 130,
      flex: 0.3,
    },
    { field: "name", headerName: "Name", flex: 0.4 },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      width: 90,
      flex: 0.2,
    },
    {
      field: "price",
      headerName: "Price (₴)",
      type: "number",
      width: 120,
      flex: 0.2,
    },
    {
      field: "actions",
      headerName: "",
      width: 100,

      flex: 0.2,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <Box
          sx={{
            padding: "8px 0",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <EditOutlinedIcon
            sx={{
              color: "primary.textGrey",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
            onClick={() => onEditClick(params.row)}
          />
          <DeleteOutlinedIcon
            sx={{
              color: "primary.textGrey",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
            onClick={() => handleClickOpen(params.row.id)}
          />
        </Box>
      ),
    },
  ];

  return (
    <>
      <Paper
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <DataGrid
          rows={products}
          columns={columns}
          pageSize={products.length}
          rowsPerPageOptions={[products.length]}
          disableSelectionOnClick
          sx={{
            border: 0,
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: "primary.bgGreen",
              color: "primary.textGrey",
              fontWeight: 700,
            },
            "& .MuiDataGrid-cell": {
              fontWeight: 700,
            },
            "& .MuiDataGrid-row:nth-of-type(odd)": {
              color: "primary.textWhite",
              backgroundColor: "primary.bgGrey",
            },
            "& .MuiDataGrid-row:nth-of-type(even)": {
              color: "primary.textLightGrey",
              backgroundColor: "primary.bgLightGreen",
            },
          }}
        />
      </Paper>

      <AlertModal
        open={open}
        handleClose={handleClose}
        handleDelete={handleDelete}
      />
    </>
  );
};

ProductsTable.propTypes = {
  onEditClick: func.isRequired,
};

export default ProductsTable;
