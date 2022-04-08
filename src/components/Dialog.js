import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormPeli from "./Form";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export default function DialogForm({
  open,
  handleClose,
  tipo,
  handleCreateOrEdit,
  handleDelete,
}) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "800px",
            },
          },
        }}
        PaperProps={{
          style: {
            backgroundColor: "#E7EAF3",
          },
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <DialogTitle variant={"h5"} style={{ fontWeight: "bold" }}>
            Ingrese reporte:
          </DialogTitle>

          {tipo === "create" ? (
            <></>
          ) : (
            <IconButton
              style={{ marginRight: "1%" }}
              onClick={handleDelete}
              aria-label="delete"
            >
              <DeleteIcon style={{ color: "red" }} />
            </IconButton>
          )}
        </div>

        <DialogContent>
          <FormPeli></FormPeli>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreateOrEdit}>
            {tipo === "create" ? "Insertar" : "Actualizar"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
