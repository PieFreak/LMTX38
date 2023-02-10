import express from "express";
import { app } from "./start.js";

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
