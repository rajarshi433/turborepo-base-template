import { VAlUE } from "@repo/common/user-type";

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: `Hello ${VAlUE}`,
  });
});

app.listen(3000);
