import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import DialogContentText from "@mui/material/DialogContentText";

interface Props {
  text: string;
}

export default function AddLabelDialog({ text }: Props) {
  const [open, setOpen] = useState(false);
  const [newLabel, setNewLabel] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddLabel = () => {
    setOpen(false);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewLabel(event.target.value);
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        <ControlPointIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add label</DialogTitle>
        <DialogContentText>{text}</DialogContentText>
        <DialogContent>
          <TextField
            id="outlined-basic"
            label="New label"
            variant="outlined"
            value={newLabel}
            onChange={(e) => handleInputChange(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button type="submit" onClick={handleAddLabel}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
