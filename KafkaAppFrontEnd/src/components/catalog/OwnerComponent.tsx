import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function OwnerComponent() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={option}
      sx={{ width: 200, height: 70 }}
      renderInput={(params) => <TextField {...params} label="Owner" />}
    />
  );
}

const option = [
  {
    label: "nothing",
  },
];
