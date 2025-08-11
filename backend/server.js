import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());

// setup multer for file storage
const upload = multer({ dest: "uploads" });

// post router to handle file upload
app.post("/upload", upload.single("myFile"), (req, res) => {
  console.log("File info: " + req.file);
  res.json({ message: "file uploaded successfully" });
})

app.listen(5000, () => {
  console.log("server running");
})