import express from "express";
import { Request, Response } from "express";
import diagnosisRouter from "./routes/diagnoses";
import patientsRouter from "./routes/patients";
import cors from "cors";
import errorMiddleware from "./middleware/error";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'client/dist')));

app.get("/api/ping", (_req: Request, res: Response) => {
    res.send("pong");
});

app.use("/api/diagnoses", diagnosisRouter);

app.use("/api/patients", patientsRouter);

// General health check endpoint
app.get("/health", (_req: Request, res: Response) => {
    res.status(200).json({
        status: "ok",
        timestamp: new Date().toISOString(),
    });
});

app.use(errorMiddleware);

app.use((_req: Request, res: Response) => {
    res.sendFile(path.join(process.cwd(), 'client/dist/index.html'));
});
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
