import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import DialogContentComponent from "./DialogContentComponent";
import { useTopic } from "../../context/TopicContext";
import { useId } from "../../context/IdContext";
import Stack from "@mui/material/Stack";
import AddLabelDialog from "./AddLabelDialog";

interface Props {
  buttonLabel: string;
  textDialog: string;
  text: string;
}

export default function DialogComponent({
  buttonLabel,
  textDialog,
  text,
}: Props) {
  const { topic } = useTopic();
  const { idArr } = useId();

  const labels = topic.find((t) => t.id === idArr![0])?.labels;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const text_info = buttonLabel === "Add label" ? "Label" : "Owner";
  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        {buttonLabel}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{textDialog}</DialogTitle>
        <DialogContent>
          <DialogContentText>{text}</DialogContentText>
          <Stack spacing={1} direction="row">
            <DialogContentComponent />
            {buttonLabel == "Add label" || buttonLabel == "Edit Owner" ? (
              <AddLabelDialog text={text_info} />
            ) : (
              <></>
            )}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleClose}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
