//=====only add==========
// import { useState } from "react";
// import { func } from "prop-types";
// import { DataGrid } from "@mui/x-data-grid";
// import Paper from "@mui/material/Paper";
// import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
// import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
// import AlertModal from "../Modals/AlertModal"; // Импортируем компонент модального окна
// import { useProducts } from "./hooks/useProducts";
// import { Box } from "@mui/material";
// import productsAsyncAction from "../../redux/products/saga/asyncAction";
// import { useDispatch } from "react-redux";

// const ProductsTable = ({ onEditClick }) => {
//   const dispatch = useDispatch();

//   const { products } = useProducts(); // Получаем данные о продуктах

//   const [open, setOpen] = useState(false); // Состояние для модального окна
//   const [selectedProduct, setSelectedProduct] = useState(null); // Храним выбранный продукт для удаления

//   // Открытие модального окна с передачей id продукта
//   const handleClickOpen = (productId) => {
//     console.log("Product is selected:", productId);
//     setSelectedProduct(productId);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   // Функция для удаления продукта (можно заменить на реальную логику)
//   const handleDelete = () => {
//     if (selectedProduct) {
//       dispatch(productsAsyncAction.deleteProductAction(selectedProduct)); // Отправляем запрос на удаление
//     }
//     // console.log("Product is deleted:", selectedProduct);
//     // Здесь можно выполнить удаление продукта из данных, например, через setState
//   };

//   const columns = [
//     {
//       field: "id",
//       headerName: "ID",
//       // width: 70,
//       flex: 0.2,
//     },
//     {
//       field: "category",
//       headerName: "Category",
//       // width: 130,
//       flex: 0.3,
//     },
//     { field: "name", headerName: "Name", flex: 0.4 },
//     {
//       field: "quantity",
//       headerName: "Quantity",
//       type: "number",
//       // width: 90,
//       flex: 0.2,
//     },
//     {
//       field: "price",
//       headerName: "Price (₴)",
//       type: "number",
//       // width: 120,
//       flex: 0.2,
//     },
//     {
//       field: "actions",
//       headerName: "",
//       // width: 100,
//       flex: 0.2,
//       sortable: false,
//       renderCell: (params) => (
//         <Box sx={{ display: "flex", justifyContent: "space-around" }}>
//           <EditOutlinedIcon
//             sx={{
//               color: "primary.textGrey",
//               cursor: "pointer",
//               transition: "color 0.3s ease",
//             }}
//             onClick={onEditClick}
//           />
//           <DeleteOutlinedIcon
//             sx={{
//               color: "primary.textGrey",
//               cursor: "pointer",
//               transition: "color 0.3s ease",
//             }}
//             onClick={() => handleClickOpen(params.row.id)} // Открыть модалку при клике
//           />
//         </Box>
//       ),
//     },
//   ];

//   // const rows = [
//   //   { id: 1, category: "PC", name: "Lenovo Y50-70", quantity: 5, price: 25000 },
//   //   {
//   //     id: 2,
//   //     category: "Clothes",
//   //     name: "Nike M&M DF Acg21",
//   //     quantity: 22,
//   //     price: 4000,
//   //   },
//   //   {
//   //     id: 3,
//   //     category: "Plumbing",
//   //     name: "CERSANIT MITO 17",
//   //     quantity: 1337,
//   //     price: 5000,
//   //   },
//   // ];

//   return (
//     <>
//       <Paper sx={{ height: "100%", width: "100%" }}>
//         <DataGrid
//           rows={products}
//           columns={columns}
//           pageSize={products.length} // Показывать все строки
//           rowsPerPageOptions={[products.length]} // Отключить пагинацию
//           disableSelectionOnClick
//           sx={{
//             border: 0,
//             "& .MuiDataGrid-columnHeader": {
//               backgroundColor: "primary.bgGreen",
//               color: "primary.textGrey",
//               fontWeight: 700,
//             },
//             "& .MuiDataGrid-cell": {
//               fontWeight: 700,
//             },
//             "& .MuiDataGrid-row:nth-of-type(odd)": {
//               color: "primary.textWhite",
//               backgroundColor: "primary.bgGrey",
//               // transition: "color 0.3s ease",
//             },
//             "& .MuiDataGrid-row:nth-of-type(even)": {
//               color: "primary.textLightGrey",
//               backgroundColor: "primary.bgLightGreen", // Цвет для четных строк
//             },
//             // "& .MuiDataGrid-row:hover .MuiDataGrid-cell": {
//             //   color: "primary.textLightGrey", // Цвет при наведении
//             // },
//           }}
//         />
//       </Paper>
//       <AlertModal
//         open={open}
//         handleClose={handleClose}
//         handleDelete={handleDelete} // Передаем функции в модалку
//       />
//     </>
//   );
// };

// ProductsTable.propTypes = {
//   onEditClick: func.isRequired,
// };

// export default ProductsTable;

//======edit========
import { useState } from "react";
import { func } from "prop-types";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AlertModal from "../Modals/AlertModal"; // Импортируем компонент модального окна
import { useProducts } from "./hooks/useProducts";
import { Box } from "@mui/material";
import productsAsyncAction from "../../redux/products/saga/asyncAction";
import { useDispatch } from "react-redux";

const ProductsTable = ({ onEditClick }) => {
  const dispatch = useDispatch();

  const { products } = useProducts(); // Получаем данные о продуктах

  const [open, setOpen] = useState(false); // Состояние для модального окна
  const [selectedProduct, setSelectedProduct] = useState(null); // Храним выбранный продукт для удаления

  // Открытие модального окна с передачей id продукта
  const handleClickOpen = (productId) => {
    console.log("Product is selected:", productId);
    setSelectedProduct(productId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Функция для удаления продукта (можно заменить на реальную логику)
  const handleDelete = () => {
    if (selectedProduct) {
      dispatch(productsAsyncAction.deleteProductAction(selectedProduct)); // Отправляем запрос на удаление
    }
    // console.log("Product is deleted:", selectedProduct);
    // Здесь можно выполнить удаление продукта из данных, например, через setState
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
            onClick={() => handleClickOpen(params.row.id)} // Открыть модалку при клике
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
          pageSize={products.length} // Показывать все строки
          rowsPerPageOptions={[products.length]} // Отключить пагинацию
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
              // transition: "color 0.3s ease",
            },
            "& .MuiDataGrid-row:nth-of-type(even)": {
              color: "primary.textLightGrey",
              backgroundColor: "primary.bgLightGreen", // Цвет для четных строк
            },
            // "& .MuiDataGrid-row:hover .MuiDataGrid-cell": {
            //   color: "primary.textLightGrey", // Цвет при наведении
            // },
          }}
        />
      </Paper>
      <AlertModal
        open={open}
        handleClose={handleClose}
        handleDelete={handleDelete} // Передаем функции в модалку
      />
    </>
  );
};

ProductsTable.propTypes = {
  onEditClick: func.isRequired,
};

export default ProductsTable;
