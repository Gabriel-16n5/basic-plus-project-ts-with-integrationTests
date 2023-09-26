import express, {Request, Response, json} from "express"
import httpStatus from "http-status";
import usersRouter from "./routers/users-router";

const app = express();
app.use(json());
app.use(usersRouter)

app.get("/health", (req: Request, res: Response) => {
    res.status(httpStatus.OK).send("aplicação up");
})

export default app;