import { Dialog, DialogActions, DialogTitle, Button } from "@mui/material";
import { bool, func } from "prop-types";

const AlertModal = ({ open, handleClose, handleDelete }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle
        id="alert-dialog-title"
        sx={{
          color: "primary.textGreen",
          fontSize: "16px",
          fontWeight: "700",
        }}
      >
        {"Are u sure you want to delete this product?"}
      </DialogTitle>
      <DialogActions>
        <Button
          onClick={handleClose}
          variant="outlined"
          sx={{
            backgroundColor: "primary.bgDarkGrey",
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
          onClick={() => {
            handleDelete();
            handleClose();
          }}
          variant="outlined"
          sx={{
            backgroundColor: "primary.bgRed",
            color: "primary.textWhite",
            border: "none",
            fontWeight: 700,
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "primary.textRed",
            },
          }}
          autoFocus
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AlertModal.propTypes = {
  open: bool.isRequired,
  handleClose: func.isRequired,
  handleDelete: func.isRequired,
};

export default AlertModal;
