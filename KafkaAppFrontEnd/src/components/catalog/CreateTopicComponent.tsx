import * as React from "react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import ConnectionComponent from "./ConnectionComponent";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import LabelsComponent from "./LabelsComponent";
import OwnerComponent from "./OwnerComponent";
import Stack from "@mui/material/Stack";
import { useTopic } from "../../context/TopicContext";
import { useState } from "react";

export default function SimpleDialogDemo() {
  const { addNewTopic } = useTopic();
  const [open, setOpen] = useState(false);
  const [newTopic, setNewTopic] = useState({
    name: "",
    connection: "",
    partition: 1,
    topic_size: 0,
    views: 0,
    owner: "",
    labels: "",
    id: 0,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTopicCreation = () => {
    addNewTopic({
      name: newTopic.name,
      connection: "",
      partition: Number(newTopic.partition),
      topic_size: 0,
      views: 0,
      owner: "",
      labels: "",
      id: 0,
    });
    setNewTopic({
      name: "",
      connection: "",
      partition: 1,
      topic_size: 0,
      views: 0,
      owner: "",
      labels: "",
      id: 0,
    });
    handleClose();
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    setNewTopic({
      ...newTopic,
      [key]: event.target.value,
    });
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Create topic
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Create a new topic</DialogTitle>
        <List sx={{ pt: 0, width: 500, marginLeft: 2 }}>
          <p>Create a new topic in your environment.</p>
          <p>Connection</p>
          <ConnectionComponent />
          <p>Name</p>
          <div>
            <form noValidate autoComplete="off">
              <FormControl sx={{ width: "45ch" }}>
                <OutlinedInput
                  placeholder="Name"
                  value={newTopic.name}
                  onChange={(e) => handleInputChange(e, "name")}
                />
              </FormControl>
            </form>
          </div>
        </List>
        <List sx={{ pt: 0, width: 500, marginLeft: 4 }}>
          <p>Data Product</p>
          <p>Owner</p>
          <OwnerComponent />
          <p>Labels</p>
          <LabelsComponent />
          <p>Configuration</p>
          <p>Partitions</p>
          <div>
            <form noValidate autoComplete="off">
              <FormControl sx={{ width: "45ch" }}>
                <OutlinedInput
                  type="number"
                  value={newTopic.partition}
                  onChange={(e) => handleInputChange(e, "partition")}
                />
              </FormControl>
            </form>
          </div>
          <p>Replications</p>
          <div>
            <form noValidate autoComplete="off">
              <FormControl sx={{ width: "45ch" }}>
                <OutlinedInput type="number" />
              </FormControl>
            </form>
          </div>
          <Stack spacing={1} direction="row">
            <div>
              <p>Key</p>
              <ConnectionComponent />
            </div>
            <div>
              <p>Value</p>
              <form noValidate autoComplete="off">
                <FormControl sx={{ width: "22ch" }}>
                  <OutlinedInput placeholder="" />
                </FormControl>
              </form>
            </div>
          </Stack>
          <Stack spacing={1}>
            <Button variant="contained" fullWidth>
              Add
            </Button>
            <Stack spacing={1} direction="row">
              <Button variant="contained" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="contained" onClick={handleTopicCreation}>
                Confirm
              </Button>
            </Stack>
          </Stack>
        </List>
      </Dialog>
    </div>
  );
}
