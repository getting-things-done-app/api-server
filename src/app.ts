import express, { Router } from "express";

const app = express();

const testRouter = Router();
testRouter.get("/", (_req, res) => {
    res.send("tests page");
});
testRouter.get("/1", (_req, res) => {
    res.send("test #1");
});

app.use("/test", testRouter);
export { app };
