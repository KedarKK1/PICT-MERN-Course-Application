import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config({ path: './.env.local' });

const app = express();
app.use(express.json());
app.use(cors());

// ROUTES
app.use("/auth", authRoutes);
app.use("/post", postRoutes);

// MONGOOSE (DATABASE connection) SETUP 
const PORT = process.env.PORT || 6001;
mongoose.connect(`${process.env.MONGO_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
}).catch((error) => console.log(`${error} did not connect`));