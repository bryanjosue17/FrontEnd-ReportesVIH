import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
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
      <Dialog open={open} onClose={handleClose}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <DialogTitle>Ingrese pelicula:</DialogTitle>

          {tipo === "create" ? (
            <></>
          ) : (
            <IconButton style={{ marginRight: "1%" }} aria-label="delete">
              <DeleteIcon style={{ color: "red" }} onClick={handleDelete} />
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
