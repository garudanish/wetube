import express from "express";

const videoRouter = express.Router();

const handlehWatchVideo = (req, res) => res.send("Watch video");

videoRouter.get("/watch", handlehWatchVideo);

export default videoRouter;
