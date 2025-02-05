import * as React from "react";
import Typography from "@mui/material/Typography";
import { Slider } from "@mui/material";

export default function Page() {
  return (
    <>
      <Typography>Welcome to a page in the dashboard!</Typography>
      <div>
        <Slider defaultValue={30} />
        <Slider
          defaultValue={30}
          className="text-teal-600"
          slotProps={{ thumb: { className: "rounded-sm" } }}
        />
      </div>
    </>
  );
}
