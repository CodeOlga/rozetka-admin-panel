//====only add====
// import {
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   IconButton,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import CloseIcon from "@mui/icons-material/Close";
// import { bool, func, string } from "prop-types";

// import ProductForm from "../ProductForm/ProductForm";

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   "& .MuiDialogContent-root": {
//     padding: theme.spacing(2),
//   },
//   "& .MuiDialogActions-root": {
//     padding: theme.spacing(1),
//   },
// }));

// const ProductModal = ({ open, onClose, onSubmit, actionType }) => {
//   const handleSubmit = (formData) => {
//     // console.log("Отправляем данные:", formData);
//     onSubmit(formData); // Передаем данные формы в родительский компонент
//     onClose(); // Закрываем модалку после отправки
//   };

//   return (
//     <BootstrapDialog
//       onClose={onClose}
//       aria-labelledby="customized-dialog-title"
//       open={open}
//     >
//       <DialogTitle
//         sx={{
//           m: 0,
//           p: 2,
//           color: "primary.bgGrey",
//           fontSize: 24,
//           fontWeight: 700,
//         }}
//         id="customized-dialog-title"
//       >
//         {actionType === "add" ? "Add Product" : "Edit Product"}
//         <IconButton
//           aria-label="close"
//           onClick={onClose}
//           sx={{
//             position: "absolute",
//             right: 8,
//             top: 8,
//             color: "primary.textGrey",
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//       </DialogTitle>
//       <DialogContent
//         dividers
//         sx={{
//           backgroundColor: "primary.bgGrey",
//         }}
//       >
//         <ProductForm onSubmit={handleSubmit} />
//       </DialogContent>
//       <DialogActions
//         sx={{
//           backgroundColor: "primary.bgGrey",
//         }}
//       >
//         <Button
//           onClick={onClose}
//           variant="outlined"
//           sx={{
//             backgroundColor: "primary.textGrey",
//             color: "primary.textWhite",
//             border: "none",
//             fontWeight: 700,
//             textTransform: "capitalize",
//             "&:hover": {
//               backgroundColor: "primary.textLightGrey",
//             },
//           }}
//         >
//           Cancel
//         </Button>
//         <Button
//           // onClick={handleSubmit}
//           type="submit"
//           form="product-form"
//           variant="outlined"
//           sx={{
//             backgroundColor: "primary.bgGreen",
//             color: "primary.textWhite",
//             border: "none",
//             fontWeight: 700,
//             textTransform: "capitalize",
//             "&:hover": {
//               backgroundColor: "primary.main",
//             },
//           }}
//           autoFocus
//         >
//           Submit
//         </Button>
//       </DialogActions>
//     </BootstrapDialog>
//   );
// };

// ProductModal.propTypes = {
//   open: bool.isRequired,
//   onClose: func.isRequired,
//   onSubmit: func.isRequired,
//   actionType: string.isRequired,
// };

// export default ProductModal;

//=====edit=====
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { bool, func, string, object } from "prop-types";

import ProductForm from "../ProductForm/ProductForm";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const ProductModal = ({
  open,
  onClose,
  onSubmit,
  actionType,
  initialValues,
}) => {
  const handleSubmit = (formData) => {
    // Объединяем предзаполненные данные с изменёнными
    const updatedProduct = { ...initialValues, ...formData };
    onSubmit(updatedProduct);
  };

  return (
    <BootstrapDialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle
        sx={{
          m: 0,
          p: 2,
          color: "primary.bgGrey",
          fontSize: 24,
          fontWeight: 700,
        }}
        id="customized-dialog-title"
      >
        {actionType === "add" ? "Add Product" : "Edit Product"}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "primary.textGrey",
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        dividers
        sx={{
          backgroundColor: "primary.bgGrey",
        }}
      >
        <ProductForm onSubmit={handleSubmit} initialValues={initialValues} />
      </DialogContent>
      <DialogActions
        sx={{
          backgroundColor: "primary.bgGrey",
        }}
      >
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            backgroundColor: "primary.textGrey",
            color: "primary.textWhite",
            border: "none",
            fontWeight: 700,
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "primary.textLightGrey",
            },
          }}
        >
          Cancel
        </Button>
        <Button
          // onClick={handleSubmit}
          type="submit"
          form="product-form"
          variant="outlined"
          sx={{
            backgroundColor: "primary.bgGreen",
            color: "primary.textWhite",
            border: "none",
            fontWeight: 700,
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "primary.main",
            },
          }}
          autoFocus
        >
          Submit
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

ProductModal.propTypes = {
  open: bool.isRequired,
  onClose: func.isRequired,
  onSubmit: func.isRequired,
  actionType: string.isRequired,
  initialValues: object,
};

export default ProductModal;
