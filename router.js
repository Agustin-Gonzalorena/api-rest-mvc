import { Router } from "express";

import { MovieController } from "./app/controller/movies.controller.js";

export const moviesRouter = Router();
moviesRouter.get("/agustin", (req, res) => {
  res.redirect("https://agustingonzalorena.vercel.app/");
});
moviesRouter.get("/movies", MovieController.getAll);
moviesRouter.post("/movies", MovieController.create);

moviesRouter.get("/movies/:id", MovieController.getById);
moviesRouter.delete("/movies/:id", MovieController.delete);
moviesRouter.patch("/movies.json/:id", MovieController.update);
moviesRouter.all("*", (req, res) => {
  res.status(404).json({
    message: "404 route no found",
    getAll: req.url.replace(req.url, "/movies"),
  });
});
