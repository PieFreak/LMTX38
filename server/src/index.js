import express from "express";
import { app } from "./start.js";

// for enviromental variables
import dotenv from 'dotenv'; 
dotenv.config();

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
