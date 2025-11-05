import React from "react";
import { Button } from "@mui/material";

function mui() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>ola</h2>
      <Button variant="contained" color="primary">
        btn 1
      </Button>
      <Button variant="outlined" color="secondary" style={{ marginLeft: "10px" }}>
        btn 2
      </Button>
    </div>
  );
}

export default mui;
