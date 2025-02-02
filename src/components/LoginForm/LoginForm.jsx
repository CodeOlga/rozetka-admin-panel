import {
  Box,
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Field, Form } from "react-final-form";
import { func } from "prop-types";
import { useState } from "react";
import {
  isRequired,
  minLength2,
  passwordValidation,
} from "../../validators/validators";

// const required = (value) => (value ? undefined : "Required");

// const minLength2 = (value) =>
//   value && value.length >= 2 ? undefined : "Must be at least 2 characters";

// const passwordValidation = (value) =>
//   value && value.length >= 6
//     ? undefined
//     : "Password must be at least 6 characters";

const LoginForm = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: 280,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Field
            name="name"
            validate={(value) => isRequired(value) || minLength2(value)}
          >
            {({ input, meta }) => (
              <TextField
                {...input}
                label="User Name"
                variant="outlined"
                autoComplete="off"
                slotProps={{
                  inputLabel: {
                    sx: {
                      fontSize: 14,
                      color: "primary.main",
                    },
                  },
                }}
                error={meta.touched && !!meta.error}
                helperText={meta.touched && meta.error}
              />
            )}
          </Field>

          <Field name="password" validate={passwordValidation}>
            {({ input, meta }) => (
              <TextField
                {...input}
                type={showPassword ? "text" : "password"}
                label="Password"
                variant="outlined"
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          onClick={handleClickShowPassword}
                          sx={{
                            backgroundColor: "inherit",
                          }}
                        >
                          {showPassword ? (
                            <VisibilityOffOutlinedIcon />
                          ) : (
                            <VisibilityOutlinedIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                  inputLabel: {
                    sx: {
                      fontSize: 14,
                      color: "primary.main",
                    },
                  },
                }}
                autoComplete="new-password"
                error={meta.touched && !!meta.error}
                helperText={meta.touched && meta.error}
              />
            )}
          </Field>

          <Button
            type="submit"
            variant="contained"
            sx={{
              height: 56,
              fontSize: 18,
              textTransform: "capitalize",
              color: "primary.textWhite",
            }}
          >
            Login
          </Button>
        </Box>
      )}
    />
  );
};

LoginForm.propTypes = {
  onSubmit: func.isRequired,
};

export default LoginForm;
