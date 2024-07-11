import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { useTopic } from "../../context/TopicContext";
import { useId } from "../../context/IdContext";

export default function MultipleSelect() {
  const { topic } = useTopic();
  const { idArr } = useId();
  const index = topic.find((t) => t.id === idArr![0]);

  console.log("----", index?.labels);

  const [addLabel, setAddLabel] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof addLabel>) => {
    const {
      target: { value },
    } = event;
    setAddLabel(typeof value === "string" ? value.split(",") : value);
  };

  function handleReset(): void {
    setAddLabel([]);
  }

  return (
    <div>
      <FormControl sx={{ m: 0, width: 280 }}>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={addLabel}
          onChange={handleChange}
        >
          {index?.labels?.map((label) => (
            <MenuItem key={label} value={label}>
              {label}
            </MenuItem>
          ))}
          <Stack spacing={1}>
            <Button variant="contained" onClick={handleReset}>
              Reset
            </Button>
            <Button variant="contained">Apply</Button>
          </Stack>
        </Select>
      </FormControl>
    </div>
  );
}
