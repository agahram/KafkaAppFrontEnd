import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const add_colums = [
  "Records",
  "Replicas",
  "Retention Size",
  "Retention Period",
  "Retention Policy",
  "Schemas",
];

function getStyles(add_colums: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(add_colums) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const [addColumn, setAddColumn] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof addColumn>) => {
    const {
      target: { value },
    } = event;
    setAddColumn(typeof value === "string" ? value.split(",") : value);
  };

  function handleReset(): void {
    setAddColumn([]);
  }

  return (
    <div>
      <FormControl sx={{ m: 0, width: 280 }}>
        <InputLabel id="demo-multiple-name-label">
          Additional columns
        </InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={addColumn}
          onChange={handleChange}
        >
          {add_colums.map((add_colum) => (
            <MenuItem
              key={add_colum}
              value={add_colum}
              style={getStyles(add_colum, addColumn, theme)}
            >
              {add_colum}
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
