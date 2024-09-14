import { signupType } from "@repo/common/signup";

import express from "express";
const app = express();

const signup: signupType = "Click here to sign up";

app.get("/", (req, res) => {
  console.log("Hello from backend");
  res.json({
    message: `Hello, ${signup}`,
  });
});

app.listen(5000);
