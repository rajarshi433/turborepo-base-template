import { name, new_type, VAlUE } from "@repo/common/user-type";

import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("Hello from backend")
  res.json({
    message: `Hello ${VAlUE} and  I am from ${name} and this a ${new_type}`,
  });
});

app.listen(5000);
