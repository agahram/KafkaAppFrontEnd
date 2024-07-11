import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Stack from "@mui/material/Stack";
import { useTopic } from "../../context/TopicContext";
import { useId } from "../../context/IdContext";
import DialogComponent from "./DialogComponent";

export default function BottomButtonsComponent() {
  const { topic, topicDelete } = useTopic();
  const { idArr } = useId();
  const index = topic.find((t) => t.id === idArr![0]);

  function DeleteTopic() {
    if (topic && idArr) {
      topicDelete(idArr);
    }
  }

  return (
    <Stack spacing={2} direction="row">
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <DialogComponent
          buttonLabel="Add label"
          textDialog="Add labels"
          text="Labels"
        />
        {idArr ? (
          index?.labels ? (
            <DialogComponent
              buttonLabel="Remove label"
              textDialog="Remove Labels"
              text="Labels"
            />
          ) : (
            <Button variant="contained" disabled>
              Remove label
            </Button>
          )
        ) : (
          <></>
        )}
        <DialogComponent
          buttonLabel="Edit Owner"
          textDialog="Edit Owner"
          text="Owner"
        />
        <Button onClick={() => DeleteTopic()}>Delete</Button>
      </ButtonGroup>
    </Stack>
  );
}
