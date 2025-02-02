import { useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import ProductsTable from "../../components/ProductsTable/ProductsTable";
import AddIcon from "@mui/icons-material/Add";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ProductModal from "../../components/Modals/ProductModal"; // Импорт модалки
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; // Для использования dispatch
import { push } from "redux-first-history"; // Импорт useHistory
import { routes } from "../../constants/routes";
import productsAsyncAction from "../../redux/products/saga/asyncAction";

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalActionType, setModalActionType] = useState("add");
  // const navigate = useNavigate();
  const dispatch = useDispatch(); // Используем dispatch для отправки действия

  const handleModalOpen = (actionType) => {
    setModalActionType(actionType); // Устанавливаем тип действия в зависимости от кнопки
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handlePreviewClick = () => {
    // navigate("/preview"); // Переход на страницу /preview
    dispatch(push(routes.preview.path)); // Переход на страницу /preview через redux-history
  };

  // Новый обработчик для добавления продукта:
  const handleProductSubmit = (formData) => {
    // Диспатчим экшен для добавления нового товара
    dispatch(productsAsyncAction.addProductAction(formData));
    setIsModalOpen(false);
  };

  const handleEditClick = () => {
    handleModalOpen("edit"); // Открытие модалки для редактирования
  };

  return (
    <Box component="section" sx={{}}>
      <Stack spacing={2} direction="row" justifyContent="space-between">
        <Button
          startIcon={<PersonOutlinedIcon />}
          variant="contained"
          // onClick={() => handleModalOpen("edit")} // Открытие модалки для редактирования
          onClick={handlePreviewClick} // Открытие страницы Preview
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
          onClick={() => handleModalOpen("add")} // Открытие модалки для добавления
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

      {/* Подключение модалки */}
      {isModalOpen && (
        <ProductModal
          open={isModalOpen}
          actionType={modalActionType} // Передаем текущий тип действия
          onClose={handleModalClose} // Закрытие модалки
          onSubmit={handleProductSubmit} // Закрываем после добавления или редактирования

          // onSubmit={(formData) => {
          //   console.log(
          //     `${
          //       modalActionType === "add" ? "Product added" : "Product edited"
          //     }:`,
          //     formData
          //   );
          //   handleModalClose(); // Закрываем после добавления или редактирования
          // }}
        />
      )}
    </Box>
  );
};

export default Products;
