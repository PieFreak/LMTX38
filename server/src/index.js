import express from "express";
import { userRouter } from "./router/UserRouter.js";

const app = express();


app.use(express.json());
app.use("/", userRouter);

app.listen(5000, () => {console.log("Server started on port 5000")});
