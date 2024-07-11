import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Stack } from "@mui/material";
import SearchComponent from "./SearchComponent";
import OwnerComponent from "./OwnerComponent";
import LabelsComponent from "./LabelsComponent";
import AdditColumnsComponent from "./AdditColumnsComponent";
import CreateTopicComponent from "./CreateTopicComponent";
import { useTopic } from "../../context/TopicContext";

const columns: GridColDef[] = [
  { field: "name", headerName: "Topic", width: 70 },
  { field: "connection", headerName: "Connection", width: 130 },
  { field: "partition", headerName: "Partition", width: 130 },
  {
    field: "topic_size",
    headerName: "Topic Size",
    width: 180,
  },
  {
    field: "views",
    headerName: "Views",
    width: 80,
    type: "number",
  },
  {
    field: "owner",
    headerName: "Owner",
    width: 80,
    type: "string",
  },
  {
    field: "labels",
    headerName: "Labels",
    width: 80,
    type: "string",
  },
];

export const rows = [
  {
    id: 1,
    name: "smth",
  },
];

export default function DataTable() {
  const { topic } = useTopic();
  return (
    <>
      <Stack spacing={2}>
        <CreateTopicComponent />
        <Stack spacing={2} direction="row">
          <SearchComponent />
          <OwnerComponent />
          <LabelsComponent />
          <AdditColumnsComponent />
        </Stack>
      </Stack>
      <div style={{ height: 400, width: 1000 }}>
        <DataGrid
          rows={topic}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </>
  );
}
