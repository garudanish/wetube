const express = require("express");
const morgan = require("morgan");

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router();
const userRouter = express.Router();
const videoRouter = express.Router();

const handleHome = (req, res) => res.send("Home");
const handleEditUser = (req, res) => res.send("Edit user");
const handlehWatchVideo = (req, res) => res.send("Watch video");

globalRouter.get("/", handleHome);
userRouter.get("/edit", handleEditUser);
videoRouter.get("/watch", handlehWatchVideo);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
