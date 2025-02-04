// import { Box, TextField } from "@mui/material";
// import { Field, Form } from "react-final-form";
// import { func } from "prop-types";
// import { isRequired, minLength2, isNumber } from "../../validators/validators";
// // import { useProducts } from "./hooks/useProducts";

// const transformValues = (values) => ({
//   category: values.category || "",
//   name: values.name || "",
//   image:
//     values.image && values.image.trim() !== ""
//       ? values.image
//       : "https://placehold.co/345x140?text=No+Image",
//   quantity: Number(values.quantity),
//   price: Number(values.price),
//   description: values.description || "",
// });

// const ProductForm = ({ onSubmit }) => {
//   // const { products, loading } = useProducts();
//   return (
//     <Form
//       onSubmit={(values) => {
//         const transformedValues = transformValues(values);
//         // const transformedValues = {
//         //   category: values.category || "",
//         //   name: values.name || "",
//         //   image:
//         //     values.image && values.image.trim() !== ""
//         //       ? values.image
//         //       : "https://placehold.co/345x140?text=No+Image",
//         //   quantity: Number(values.quantity),
//         //   price: Number(values.price),
//         //   description: values.description || "",
//         // };

//         // console.log("Отправляем данные:", transformedValues);
//         onSubmit(transformedValues);
//       }}
//       render={({ handleSubmit }) => (
//         <form id="product-form" onSubmit={handleSubmit} noValidate>
//           <Box
//             sx={{
//               width: 430,
//               display: "flex",
//               flexDirection: "column",
//               gap: 2,
//             }}
//           >
//             {/* Поле Category */}
//             <Field
//               name="category"
//               validate={(value) => isRequired(value) || minLength2(value)}
//             >
//               {({ input, meta }) => (
//                 <TextField
//                   {...input}
//                   label="Category"
//                   variant="outlined"
//                   autoComplete="off"
//                   // disabled={loading} // добавить на все поля??
//                   slotProps={{
//                     inputLabel: {
//                       sx: {
//                         fontSize: 14,
//                         fontWeight: 700,
//                         color: "primary.textWhite",
//                       },
//                     },
//                   }}
//                   error={meta.touched && !!meta.error}
//                   helperText={meta.touched && meta.error}
//                 />
//               )}
//             </Field>

//             {/* Поле Name */}
//             <Field
//               name="name"
//               validate={(value) => isRequired(value) || minLength2(value)}
//             >
//               {({ input, meta }) => (
//                 <TextField
//                   {...input}
//                   label="Name"
//                   variant="outlined"
//                   autoComplete="off"
//                   slotProps={{
//                     inputLabel: {
//                       sx: {
//                         fontSize: 14,
//                         fontWeight: 700,
//                         color: "primary.textWhite",
//                       },
//                     },
//                   }}
//                   error={meta.touched && !!meta.error}
//                   helperText={meta.touched && meta.error}
//                 />
//               )}
//             </Field>

//             {/* Поле Image */}
//             <Field name="image">
//               {({ input, meta }) => (
//                 <TextField
//                   {...input}
//                   label="Image URL"
//                   variant="outlined"
//                   autoComplete="off"
//                   slotProps={{
//                     inputLabel: {
//                       sx: {
//                         fontSize: 14,
//                         fontWeight: 700,
//                         color: "primary.textWhite",
//                       },
//                     },
//                   }}
//                   error={meta.touched && !!meta.error}
//                   helperText={meta.touched && meta.error}
//                 />
//               )}
//             </Field>

//             {/* Поле Quantity */}
//             <Field
//               name="quantity"
//               validate={(value) => isRequired(value) || isNumber(value)}
//             >
//               {({ input, meta }) => (
//                 <TextField
//                   {...input}
//                   label="Quantity"
//                   variant="outlined"
//                   autoComplete="off"
//                   slotProps={{
//                     inputLabel: {
//                       sx: {
//                         fontSize: 14,
//                         fontWeight: 700,
//                         color: "primary.textWhite",
//                       },
//                     },
//                   }}
//                   error={meta.touched && !!meta.error}
//                   helperText={meta.touched && meta.error}
//                 />
//               )}
//             </Field>

//             {/* Поле Price */}
//             <Field
//               name="price"
//               validate={(value) => isRequired(value) || isNumber(value)}
//             >
//               {({ input, meta }) => (
//                 <TextField
//                   {...input}
//                   label="Price"
//                   variant="outlined"
//                   autoComplete="off"
//                   slotProps={{
//                     inputLabel: {
//                       sx: {
//                         fontSize: 14,
//                         fontWeight: 700,
//                         color: "primary.textWhite",
//                       },
//                     },
//                   }}
//                   error={meta.touched && !!meta.error}
//                   helperText={meta.touched && meta.error}
//                 />
//               )}
//             </Field>

//             {/* Поле Description */}
//             <Field name="description">
//               {({ input, meta }) => (
//                 <TextField
//                   {...input}
//                   label="Description"
//                   variant="outlined"
//                   autoComplete="off"
//                   slotProps={{
//                     inputLabel: {
//                       sx: {
//                         fontSize: 14,
//                         fontWeight: 700,
//                         color: "primary.textWhite",
//                       },
//                     },
//                   }}
//                   multiline
//                   rows={3}
//                   error={meta.touched && !!meta.error}
//                   helperText={meta.touched && meta.error}
//                 />
//               )}
//             </Field>
//           </Box>
//         </form>
//       )}
//     />
//   );
// };

// ProductForm.propTypes = {
//   onSubmit: func.isRequired,
// };

// export default ProductForm;

//======edit====
import { Box, TextField } from "@mui/material";
import { Field, Form } from "react-final-form";
import { func, object } from "prop-types";
import { isRequired, minLength2, isNumber } from "../../validators/validators";
// import { useProducts } from "./hooks/useProducts";

const transformValues = (values) => ({
  // id: values.id,
  category: values.category || "",
  name: values.name || "",
  image:
    values.image && values.image.trim() !== ""
      ? values.image
      : "https://placehold.co/345x140?text=No+Image",
  quantity: Number(values.quantity),
  price: Number(values.price),
  description: values.description || "",
});

const ProductForm = ({ onSubmit, initialValues }) => {
  // const { products, loading } = useProducts();
  return (
    <Form
      // надо ли????
      // key={JSON.stringify(initialValues)}
      onSubmit={(values) => {
        const transformedValues = transformValues(values);

        // console.log("Отправляем данные:", transformedValues);
        onSubmit(transformedValues);
      }}
      initialValues={initialValues}
      render={({ handleSubmit }) => (
        <form id="product-form" onSubmit={handleSubmit} noValidate>
          <Box
            sx={{
              width: 430,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* Поле Category */}
            <Field
              name="category"
              validate={(value) => isRequired(value) || minLength2(value)}
            >
              {({ input, meta }) => (
                <TextField
                  {...input}
                  label="Category"
                  variant="outlined"
                  autoComplete="off"
                  // disabled={loading} // добавить на все поля??
                  slotProps={{
                    inputLabel: {
                      sx: {
                        fontSize: 14,
                        fontWeight: 700,
                        color: "primary.textWhite",
                      },
                    },
                  }}
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>

            {/* Поле Name */}
            <Field
              name="name"
              validate={(value) => isRequired(value) || minLength2(value)}
            >
              {({ input, meta }) => (
                <TextField
                  {...input}
                  label="Name"
                  variant="outlined"
                  autoComplete="off"
                  slotProps={{
                    inputLabel: {
                      sx: {
                        fontSize: 14,
                        fontWeight: 700,
                        color: "primary.textWhite",
                      },
                    },
                  }}
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>

            {/* Поле Image */}
            <Field name="image">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  label="Image URL"
                  variant="outlined"
                  autoComplete="off"
                  slotProps={{
                    inputLabel: {
                      sx: {
                        fontSize: 14,
                        fontWeight: 700,
                        color: "primary.textWhite",
                      },
                    },
                  }}
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>

            {/* Поле Quantity */}
            <Field
              name="quantity"
              validate={(value) => isRequired(value) || isNumber(value)}
            >
              {({ input, meta }) => (
                <TextField
                  {...input}
                  label="Quantity"
                  variant="outlined"
                  autoComplete="off"
                  slotProps={{
                    inputLabel: {
                      sx: {
                        fontSize: 14,
                        fontWeight: 700,
                        color: "primary.textWhite",
                      },
                    },
                  }}
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>

            {/* Поле Price */}
            <Field
              name="price"
              validate={(value) => isRequired(value) || isNumber(value)}
            >
              {({ input, meta }) => (
                <TextField
                  {...input}
                  label="Price"
                  variant="outlined"
                  autoComplete="off"
                  slotProps={{
                    inputLabel: {
                      sx: {
                        fontSize: 14,
                        fontWeight: 700,
                        color: "primary.textWhite",
                      },
                    },
                  }}
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>

            {/* Поле Description */}
            <Field name="description">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  label="Description"
                  variant="outlined"
                  autoComplete="off"
                  slotProps={{
                    inputLabel: {
                      sx: {
                        fontSize: 14,
                        fontWeight: 700,
                        color: "primary.textWhite",
                      },
                    },
                  }}
                  multiline
                  rows={3}
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>
          </Box>
        </form>
      )}
    />
  );
};

ProductForm.propTypes = {
  onSubmit: func.isRequired,
  initialValues: object,
};

export default ProductForm;
