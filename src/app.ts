import express, { Router } from "express";
import cors, { CorsOptions } from "cors";

const app = express();

const testRouter = Router();
testRouter.get("/", (_req, res) => {
    res.send("tests page");
});
testRouter.get("/1", (_req, res) => {
    res.send("test #1");
});

const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
        if (process.env.NODE_ENV === "development") {
            callback(null, true);
            return;
        }

        const allowedOrigins = ["https://getting-things.done.app"];

        if (allowedOrigins.includes(origin ?? "")) {
            callback(null, true);
            return;
        }

        callback(new Error("Not allowed by CORS"));
    },
};

app.use(
    cors(corsOptions), // Allows localhost with any port
);

app.use("/test", testRouter);
export { app };
